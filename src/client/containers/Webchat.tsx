import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import { Message } from '@src/types'
import Chat from '../components/Chat'
import JSONDisplay from '../components/JSONDisplay'
import ProgressBar from '../components/ProgressBar'

interface Props {
  history: any
  location: any
  match: any
}

interface State {
  unshownMessages: Message[]
  messages: Message[]
  threshhold: number
  timerInterval: number
  debug: boolean
}

export default class Webchat extends Component<Props, State> {
  static MSG_PUSH_THRESH_HOLD_MS = 4000
  state = {
    unshownMessages: [],
    messages: [],
    threshhold: Webchat.MSG_PUSH_THRESH_HOLD_MS / 2,
    timerInterval: 0,
    debug: true,
  }

  componentDidMount() {
    this.fetchFirstScenarioMessages()
    this.startTimer()
  }

  toggleDebug = () => this.setState({ debug: !this.state.debug })

  startTimer = () => {
    const timerInterval = window.setInterval(this.checkThreshhold, 10)
    this.setState({ timerInterval })
  }

  checkThreshhold = () => {
    const { threshhold } = this.state
    const needsUpdate = threshhold <= 0
    if (needsUpdate) {
      this.setState({ threshhold: Webchat.MSG_PUSH_THRESH_HOLD_MS })
      this.transferMessage()
    } else {
      this.setState({ threshhold: threshhold - 10 })
    }
  }

  transferMessage = () => {
    let { unshownMessages, messages } = this.state
    if (unshownMessages.length) {
      const message = unshownMessages.pop()
      messages.push(message)
      this.setState({
        unshownMessages, messages
      })
    }
  }

  fetchFirstScenarioMessages = () => {
    const url = `http://localhost:3000/scenarios`
    fetch(url)
      .then(res => res.json())
      .then(([scenario]) => {
        return fetch(`${url}/${scenario.id}`)
      })
      .then(res => res.json())
      .then(({ messages }) => {
        this.setState({ unshownMessages: messages.reverse() })
      })
  }

  render() {
    const { location: { search } } = this.props
    const query = new URLSearchParams(search)
    const {
      unshownMessages,
      messages,
      threshhold,
      debug
    } = this.state
    return (
      <div id="webchat-container">
        <div className='debug-container'>
          <div><Link to={`/app`}>Back</Link></div>
          <button onClick={this.toggleDebug}>View Debug</button>
          {debug ? (
            <div>
              <ProgressBar
                percent={(threshhold / Webchat.MSG_PUSH_THRESH_HOLD_MS) * 100}
                color={'red'}
                className={'progress-bar'}
              />
              <h3>Unshown Messages</h3>
              <JSONDisplay obj={unshownMessages} />
              <h3>Messages</h3>
              <JSONDisplay obj={messages} />
            </div>
          ) : null}
        </div>
        <div className="phone-container">
          <div className="phone">
            <div className="screen">
              <Chat messages={messages} user={query.get('user')} />
            </div>
            <div className="controls">
              <div className="iphone-btn"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
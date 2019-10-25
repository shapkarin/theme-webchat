import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import { Message } from '@src/types'
import Chat from '../components/Chat'

interface Props {
  history: any
  location: any
  match: any
}

interface State {
  messages: Message[]
}

export default class Webchat extends Component<Props, State> {
  state = {
    messages: []
  }

  render() {
    const { history } = this.props
    const { messages } = this.state
    return (
      <div id="webchat-container">
        <div className="phone">
          <div className="screen">
            <Chat messages={messages} />
          </div>
          <div className="controls">
            <div className="iphone-btn"></div>
          </div>
        </div>
      </div>
    )
  }
}
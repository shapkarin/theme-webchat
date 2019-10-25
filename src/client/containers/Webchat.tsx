import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

interface Props {
  history: any
  location: any
  match: any
}

export default class Webchat extends Component<Props> {
  render() {
    const { history } = this.props
    return (
      <div id="webchat-container">
        <div className="phone">
          <div className="screen"></div>
          <div className="controls">
            <div className="iphone-btn"></div>
          </div>
        </div>
      </div>
    )
  }
}
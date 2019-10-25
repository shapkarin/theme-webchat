import React from 'react'
import { Message } from '@src/types'
import TextMessage from './TextMessage'

interface Props {
  messages: Message[]
}

function switchMessage(message: Message) {
  if (message.text) {
    return <TextMessage {...message} />
  } else {
    return null
  }
}

const Chat: React.SFC<Props> = ({ messages }) => {
  return (
    <div className="chat-container">
      {messages.map(switchMessage)}
    </div>
  )
}

export default Chat
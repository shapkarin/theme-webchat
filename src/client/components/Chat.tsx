import React from 'react'
import { Message } from '@src/types'
import TextMessage from './TextMessage'

interface Props {
  messages: Message[]
}

const nerdStyles = {
  fontFamily: "'Press Start 2P', monospace",
  padding: "10px 20px",
  border: "4px solid #000",
  background: "#eee",
  color: '#000',
}

const girlStyles = {
  fontFamily: "cursive",
  padding: "10px 20px",
  border: "pink",
  background: "#fbc",
  color: '#810000eb',
  borderRadius: '20px';
}

function switchMessage(message: Message, index: number) {
  const isUser = !!(index % 2)
  if (message.text) {
    return (
      <TextMessage
        key={message.id}
        style={isUser ? false : girlStyles}
        isUser={isUser}
        {...message}
      />
    )
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
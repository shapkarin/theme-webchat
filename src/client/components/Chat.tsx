import React from 'react'
import { Message } from '@src/types'
import TextMessage from './TextMessage'

interface Props {
  messages: Message[]
  user: any
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
  borderRadius: '20px',
}

const styles = {
  nerd: nerdStyles,
  girl: girlStyles,
}

function switchMessage(
  message: Message,
  index: number,
  user: string
) {
  const isUser = !!(index % 2)
  const botStyle = user ? styles[user] : false
  if (message.text) {
    return (
      <TextMessage
        key={message.id}
        style={isUser ? false : botStyle}
        isUser={isUser}
        {...message}
      />
    )
  } else {
    return null
  }
}

const Chat: React.SFC<Props> = ({ messages, user }) => {
  return (
    <div className="chat-container">
      {messages.map((m, i) => switchMessage(m, i, user))}
    </div>
  )
}

export default Chat
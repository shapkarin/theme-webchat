import React from 'react'
import { Message } from '@src/types'

interface Props extends Message {
  style?: any
  isUser?: boolean
}

const defaultStyles = {
  padding: "10px 20px",
  border: "1px solid #666",
  background: "#eee",
  borderRadius: "20px"
}

const TextMessage: React.SFC<Props> = ({ text, style, isUser }) => {
  return (
    <div
      className={`message text-message ${isUser ? 'right' : ''}`}
    >
      <span
        className="text-message-inner"
        style={style || defaultStyles}
      >
        {text}
      </span>
    </div>
  )
}

export default TextMessage
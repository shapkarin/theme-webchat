import React from 'react'
import { Message } from '@src/types'

interface Props extends Message {
  user?: {
    style: any
  }
}

const defaultStyles = {
  padding: "10px 20px",
  border: "1px solid #666",
  background: "#eee",
  borderRadius: "20px"
}

const TextMessage: React.SFC<Props> = ({ text }) => {
  return (
    <div className="message text-message">
      <span className="text-message-inner" style={defaultStyles}>
        {text}
      </span>
    </div>
  )
}

export default TextMessage
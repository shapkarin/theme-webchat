import React from 'react'
import { Message } from '@src/types'

interface Props extends Message {}

const TextMessage: React.SFC<Props> = ({ text }) => {
  return (
    <div className="message text-message">
      <span className="text-message-inner">
        {text}
      </span>
    </div>
  )
}

export default TextMessage
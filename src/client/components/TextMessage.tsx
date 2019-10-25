import React from 'react'
import { Message } from '@src/types'

interface Props extends Message {}

const TextMessage: React.SFC<Props> = ({ text }) => {
  return (
    <div className="text-message">
      {text}
    </div>
  )
}

export default TextMessage
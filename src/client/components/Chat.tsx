import React from 'react'
import { Message } from '@src/types'
import TextMessage from './TextMessage'
import Icon from './Icon'

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

const icons = {
  nerd: 'http://pixelartmaker.com/art/e7e22b996482c10.png',
  girl: 'https://as1.ftcdn.net/jpg/02/46/57/64/500_F_246576482_UHy9FOEZPNWG7cy9NPSKPMn5jE3MpHeA.jpg',
}

function switchMessage(
  message: Message,
  isUser: boolean,
  user: string
) {
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
  const icon = user ? icons[user] : 'https://b.rgbimg.com/users/b/ba/barunpatro/600/mf6GB1O.jpg'
  return (
    <div className="chat-container">
      {messages.map((m, i) => {
        const isUser = !!(i % 2)
        return (
          <div className={`message-container ${isUser ? '' : 'right'}`}>
          <Icon
            url={icon}
            px={40}
          />
            {switchMessage(m, isUser, user)}
        </div>
      )})}
    </div>
  )
}

export default Chat
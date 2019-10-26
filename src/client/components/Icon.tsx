import React from 'react'

const Icon: React.SFC<{ url: string, px: number }> = ({ url, px }) => (
  <div className="user-icon" style={{
    height: px + 'px',
    width: px + 'px',
    backgroundImage: `url(${url})`,
    backgroundSize: px + 'px',
  }}>
  </div>
)

export default Icon
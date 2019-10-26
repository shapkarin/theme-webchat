import React from 'react'

interface Props {
  color: string
  backgroundColor?: string
  heightPx?: number
  percent?: number
  className?: string
}

const ProgressBar: React.SFC<Props> = ({
  color,
  backgroundColor = '#fff',
  heightPx = 20,
  percent = 0,
  className = "",
}) => (
  <div
    className={className}
    style={{
      position: 'relative',
      width: '100%',
      height: heightPx + 'px',
      backgroundColor,
    }}
  >
    <div
      className="percent"
      style={{
        position: 'absolute',
        width: `${percent}%`,
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: color,
      }}
    />
  </div>
)

export default ProgressBar
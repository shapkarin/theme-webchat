import React from 'react'

const JSONDisplay: React.SFC<{ obj: any, indent?: number }> = ({ obj, indent = 2 }) => (
  <div>
    <pre>{JSON.stringify(obj, null, indent)}</pre>
  </div>
)

export default JSONDisplay
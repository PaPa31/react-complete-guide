import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>I am {props.name}</p>
      <p> </p>
    </div>
  )
}

export default userOutput

import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>
        I am {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  )
}

export default userOutput

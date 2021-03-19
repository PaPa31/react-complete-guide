import React from 'react'

const userOutput = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  )
}

export default userOutput

import React from 'react'

const userOutput = (props) => {
  return (
    <div>
      <p>
        I am {props.name} and I'm {props.age} year old!
      </p>
      <p>{props.children}</p>
    </div>
  )
}

export default userOutput

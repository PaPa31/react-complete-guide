import React from 'react'

const style = {
  border: '2px solid red',
  padding: '6px',
  margin: '0 auto',
  display: 'block',
  textAlign: 'center',
}
const userInput = (props) => {
  return (
    <input
      style={style}
      type="text"
      onChange={props.changed}
      value={props.name}
    ></input>
  )
}

export default userInput

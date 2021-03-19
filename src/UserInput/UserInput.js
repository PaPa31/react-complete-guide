import React from 'react'
const style = {
  border: '1px solid red',
  padding: '6px',
  textAlign: 'center',
  display: 'block',
  margin: '0 auto',
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

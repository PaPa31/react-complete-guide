import React from 'react'
const style = {
  border: '2px solid red',
  padding: '8px',
  cursor: 'pointer',
  textAlign: 'center',
  margin: '0 auto',
  display: 'block',
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

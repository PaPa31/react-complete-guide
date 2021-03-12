import React from 'react'

// class Person extends React.Component {
//   render() {
//     return (
//       <p>
//         I'm {this.props.name} and I am {this.props.age} years old!
//       </p>
//     )
//   }
// }
const person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  )
}

export default person

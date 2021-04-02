import React, { Component } from "react";
import "./App.css";
import CharComponent from "./CharComponent";
import ValidationComponent from "./ValidationComponent";

class App extends Component {
  state = {
    tex: [{ text: "", len: "".length }],
  };
  onTypeHandler = (event) => {
    // let lenn = event.target.value.length;
    this.setState({
      tex: [
        {
          text: event.target.value,
          len: event.target.value.length,
        },
      ],
    });
  };

  deleteCharComponent = (charIndex) => {
    // console.log("click");
    let chars = this.state.tex[0].text; // make copy
    // with objects and arrays you can using
    // let chars = [...this.state.tex]  // spread operator
    // let chars = this.state.tex.slice(); // slice method
    // console.log(chars);
    // let newStr = chars.split("");
    // console.log(newStr);
    // newStr.splice(charIndex, 1);
    // console.log(newStr);
    // chars = newStr.join("");
    chars = chars.slice(0, charIndex) + chars.slice(charIndex + 1);
    // console.log(chars);
    this.setState({
      tex: [
        {
          text: chars,
          len: chars.length,
        },
      ],
    });
  };

  render() {
    const for_p = {
      textAlign: "right",
    };
    return (
      <div className="App">
        <p style={for_p}>Practice-4: setState</p>
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input
          type="text"
          onChange={(event) => this.onTypeHandler(event)}
          value={this.state.tex[0].text}
        />
        <p>{this.state.tex[0].len}</p>
        <ValidationComponent leng={this.state.tex[0].len} />
        {this.state.tex[0].text.split("").map((ch, index) => {
          return (
            <CharComponent
              char={ch}
              key={index}
              click={() => this.deleteCharComponent(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

// state :- we can change / modify data
// data same file chage
// state this.state = {}
// this.setstate :- inbuilt method , function
// constr supr
// data modfiy/ chnage

import React, { Component } from "react";
import Image from "./Image";

class Class_State extends Component {
  constructor() {
    super();
    // state
    this.state = {
      name: "xyz",
      count: 0,
      isIamge: true,
      course: {
        front: "Front-end",
        back: "Back-end",
      },
    };
  }

  chnagename = () => {
    this.setState({ name: "abc" });
  };
  render() {
    return (
      <div>
        <h1>Hello name :- {this.state.name}</h1>
        {/* setstate change */}
        <button
          onClick={() => {
            this.setState({ name: "tyu" });
          }}
        >
          Chnage name
        </button>
        <button
          onClick={() => {
            this.setState({ name: "hij" });
          }}
        >
          Change name2
        </button>
        <button onClick={this.chnagename}>Change name3</button>
        <h1>Hello count :- {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          decement
        </button>
        {/* <button onClick={()=>{this.setState({count : this.state.count = 0})}}>Reset</button> */}
        <button
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          Reset
        </button>
        <br /> <br />
        <button
          onClick={() => {
            this.setState({ isIamge: false });
          }}
        >
          Hide
        </button>
        <button
          onClick={() => {
            this.setState({ isIamge: true });
          }}
        >
          Show
        </button>
        <button
          onClick={() => {
            this.setState({ isIamge: !this.state.isIamge });
          }}
        >
          Toggle
        </button>
        <br /> <br />
        {this.state.isIamge ? <Image /> : false}
        <h1>hello course {this.state.course.front}</h1>
        <h1>hello course {this.state.course.back}</h1>
      </div>
    );
  }
}

export default Class_State;

// component:- its block of code. it's is reuse
// class :-  extends compoent , html print render method
// state full component

//this is manually code

// import React, { Component } from "react";
// class Class_compo extends Component {
//   render() {
//     return <h1>hello this is class compo</h1>;
//   }
// }
// export default Class_compo;

//this is after the extension
// rce :- react class export compo

// import React, { Component } from 'react'
// class Class_compo extends Component {
//   render() {
//     return (
//       <div>
//         <h1>hello this Rce compo</h1>
//       </div>
//     )
//   }
// }
// export default Class_compo

// rcc :- react class component
import React, { Component } from "react";

export default class Class_compo extends Component {
  render() {
    return (
      <div>
        <h1>hello RCC react class compo</h1>
        <h2>helloooooo</h2>
      </div>
    );
  }
}

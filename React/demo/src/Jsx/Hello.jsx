// jsx:- javascript syntax xml /extesition
// jsx:- html retrun read allow
// js vs jsx jsx :- fast 0.2 s

import React from "react";

function Hello() {
  let name = "xyz";

  let person = {
    name: "aayushi",
    age: 24,
    course: {
      front: "front-end",
      back: "Back-end",
    },
  };

  console.log(name);

  let element = (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Help</li>
    </ul>
  );

  return (
    <div>
      <h1>hello this h1 data jsx</h1>
      <h1>hello name {name}</h1>

      <h2>hello {person.name}</h2>
      <h2>hello {person.age}</h2>
      <h2>hello {person.course.front}</h2>
      <h2>hello {person.course.back}</h2>

      <h2>{5 + 5}</h2>

      {element}
    </div>
  );
}

export default Hello;

// hooks :- only use for function v.16
// hooks :- it's rese,define
// hooks ;- useState()

// import hook react {}
// retrun hook define
//        define , set
// const [name,setname] = useState("value")

import React, { useState } from "react";
import Image from "./Image";

function Func_state() {
  // name :- define , setname :- name change method
  const [name, setname] = useState("Ayushi");
  const [count, setcount] = useState(0);
  const [isIamge, setisIamge] = useState(true);

  console.log(name);

  // resuse
  const changename = () => {
    setname("Tops data");
  };

  return (
    <div>
      <h1>Hello This Function state</h1>
      <h1>Hello name :- {name}</h1>
      <button onClick={() => setname("Shubham jadav")}>Change name</button>
      <button onClick={() => setname("jiger sir")}>Change name</button>
      <button onClick={changename}>Chnage name2</button>

      <h1>Hello Count :- {count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
      <button onClick={() => setcount(0)}>Reset</button>

      <br />
      <br />
      <button onClick={() => setisIamge(false)}>Hide</button>
      <button onClick={() => setisIamge(true)}>Show</button>
      <button onClick={() => setisIamge(!isIamge)}>Toggle</button>
      <br />
      <br />

      {isIamge ? <Image /> : false}
    </div>
  );
}

export default Func_state;

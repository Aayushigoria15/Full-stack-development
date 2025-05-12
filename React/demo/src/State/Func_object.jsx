import React, { useState } from "react";
import Image from "./Image";

function Func_object() {
  const [data, setdata] = useState({
    name: "xyz",
    count: 0,
    isImage: true,
  });

  // console.log(data.name)

  const increment2 = () => {
    setdata({
      ...data,
      count: data.count + 2,
    });
  };

  const chnagename = () => {
    setdata({
      ...data,
      name: "ayushi",
    });
  };

  return (
    <div>
      <h1>Hello name :- {data.name}</h1>
      {/* spred ... op object */}
      <button onClick={() => setdata({ ...data, name: "jiger sir" })}>
        Chnage name
      </button>
      <button onClick={() => setdata({ ...data, name: "Tops" })}>
        Chnage name1
      </button>
      <button onClick={chnagename}>chnage name</button>
      <h1>hello count :- {data.count}</h1>
      <button onClick={() => setdata({ ...data, count: data.count + 1 })}>
        Increment
      </button>
      <button onClick={increment2}>incement 2</button>
      <button onClick={() => setdata({ ...data, count: data.count - 1 })}>
        Decrement
      </button>
      <button onClick={() => setdata({ ...data, count: 0 })}>reset</button>
      <br /> <br />
      <button onClick={() => setdata({ ...data, isImage: false })}>hide</button>
      <button onClick={() => setdata({ ...data, isImage: true })}>Show</button>
      <button onClick={() => setdata({ ...data, isImage: !data.isImage })}>
        Toggle
      </button>
      <br /> <br />
      {data.isImage ? <Image /> : false}
    </div>
  );
}

export default Func_object;

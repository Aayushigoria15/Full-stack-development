import React from "react";
import Class_props from "./Class_props";
import Func_Props from "./Func_Props";

function Main_compo() {
  return (
    <div>
      <h1 className="text-danger">Hello this Props data</h1>
      <div className="container">
        <h1>Hello THis Class in Props</h1>
        <div className="row">
          <Class_props
            title="Card 1"
            desc="hello this card data 1"
            src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Class_props
            title="Card 2"
            desc="hello this card data 1"
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Class_props
            title="Card 1"
            desc="hello this card data 1"
            src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Class_props
            title="Card 2"
            desc="hello this card data 1"
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Class_props
            title="Card 1"
            desc="hello this card data 1"
            src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Class_props
            title="Card 2"
            desc="hello this card data 1"
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
      <div className="container">
        <h1>Hello this Function in props</h1>
        <div className="row">
          <Func_Props
            title="Card1 fun"
            desc="Hello this CArd data 1"
            img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Func_Props
            title="Card1 fun"
            desc="Hello this CArd data 1"
            img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Func_Props
            title="Card1 fun"
            desc="Hello this CArd data 1"
            img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Func_Props
            title="Card1 fun"
            desc="Hello this CArd data 1"
            img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Func_Props
            title="Card1 fun"
            desc="Hello this CArd data 1"
            img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Func_Props
            title="Card1 fun"
            desc="Hello this CArd data 1"
            img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
    </div>
  );
}

export default Main_compo;

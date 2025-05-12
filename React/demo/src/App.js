import React from "react";
import Hello from "./Jsx/Hello";
import Class_compo from "./Component/Class_compo";
import Func_compo from "./Component/Func_compo";
import Class_State from "./State/Class_State";
import Func_object from "./State/Func_object";
import Func_state from "./State/Func_state";
import Main_state from "./State/Main_state";
import Class_props from "./Props/Class_props";
import Func_Props from "./Props/Func_Props";
import Main_compo from "./Props/Main_compo";
import Css from "./Css/Css";
import Form from "./Form_ handling/Form";
import Form2 from "./Form_ handling/Form2";
import UseEffect from "./useEffect/UseEffect";
import User from "./useEffect/User";
import Userdata from "./useEffect/Userdata";
import Card from "./useEffect/Card";
import Taskuser from "./useEffect/Taskuser";
import Taskproduct from "./useEffect/Taskproduct";
import Taskcart from "./useEffect/Taskcart";
import Cardreac from "./Bootstrap/Cardreac";
import Footer from "./Bootstrap/Footer";
import Header from "./Bootstrap/Header";
import Login from "./Bootstrap/Login";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import Help from "./Layout/Pages/Help";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>hello Header data</h1>
        {/* jsx compo */}
        {/* <Hello /> */}
        {/* for class compo */}
        {/* <Class_compo /> */}
        {/* <Func_compo /> */}
        {/* for css */}
        {/* <Css /> */}
        {/* <Class_props /> */}
        {/* <Func_Props /> */}
        {/* <Main_compo /> */}
        {/* <Class_State /> */}
        {/* <Main_state /> */}
        {/* <Func_state /> */}
        {/* <Func_object /> */}
        {/* <Form /> */}
        {/* <Form2 /> */}
        {/* <UseEffect /> */}
        {/* <User /> */}
        {/* <Userdata /> */}
        {/* <Card /> */}
        {/* <Taskuser /> */}
        {/* <Taskproduct /> */}
        {/* <Taskcart /> */}
        {/* <Cardreac /> */}
        {/* <Footer /> */}
        {/* <Header/> */}
        {/* <Login /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="/about1" element={<About />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

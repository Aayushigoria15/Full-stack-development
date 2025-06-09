import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./State-management/store";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // <Provider store={store}>
  //   <App />
  // </Provider>
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

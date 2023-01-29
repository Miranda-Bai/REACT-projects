import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
    <React.StrictMode>
      <App />
    </React.StrictMode> 
);
// 全局订阅store中的state变化
store.subscribe(() => {
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
});

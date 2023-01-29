import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

/* ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
document.getElementById('root')) */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// 全局订阅store中的state变化
/* store.subscribe(() => {
  root.render(
    <Provider store={store}>
    <App />
  </Provider>
  );
}); */

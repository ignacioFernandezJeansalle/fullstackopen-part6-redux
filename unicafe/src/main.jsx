import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

for (let i = 0; i < 5; i++) {
  store.dispatch({ type: "GOOD" });
}
for (let i = 0; i < 4; i++) {
  store.dispatch({ type: "OK" });
}
for (let i = 0; i < 2; i++) {
  store.dispatch({ type: "BAD" });
}

const App = () => {
  const good = () => store.dispatch({ type: "GOOD" });
  const ok = () => store.dispatch({ type: "OK" });
  const bad = () => store.dispatch({ type: "BAD" });
  const resetStats = () => store.dispatch({ type: "ZERO" });

  return (
    <div>
      <button onClick={good}>Good</button>
      <button onClick={ok}>Ok</button>
      <button onClick={bad}>Bad</button>
      <button onClick={resetStats}>Reset stats</button>
      <p>Good: {store.getState().good}</p>
      <p>Ok: {store.getState().ok}</p>
      <p>Bad: {store.getState().bad}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);

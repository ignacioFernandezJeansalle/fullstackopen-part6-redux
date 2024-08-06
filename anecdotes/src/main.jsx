import ReactDOM from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

/* 
Cambia la definición del filter reducer y sus action creators para usar la función createSlice de Redux Toolkit.

También, comienza a utilizar Redux DevTools para depurar el estado de la aplicación fácilmente.
*/

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/config";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div></div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

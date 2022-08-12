import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Navigation";
import { store } from "./redux/config";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </BrowserRouter>
  );
};

export default App;

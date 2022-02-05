import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";

import Content from "./Content";

const App = () => {
  return (
    <div className="page">
      <Provider store={store}>
        <Content />
      </Provider>
    </div>
  );
};

export default App;

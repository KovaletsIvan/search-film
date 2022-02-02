import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchField from "./SearchField";
import Content from "./Content";

const App = () => {
  console.log(store.getState())
  return (
    <div className="page">
      <Provider store={store}>
        <SearchField />
        <Content />
      </Provider>
    </div>
  );
};

export default App;

import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchField from "./SearchField";
import Content from "./Content";
import { getData } from "../films.gatawey";

const App = () => {
  getData().then(resp=>console.log(resp))
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

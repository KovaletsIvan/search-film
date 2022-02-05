import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchField from "./SearchField";
import Content from "./Content";
import MyPagination from "./Pagination";

const App = () => {
  return (
    <div className="page">
      <Provider store={store}>
        <SearchField />
        <Content />
        <MyPagination />
      </Provider>
    </div>
  );
};

export default App;

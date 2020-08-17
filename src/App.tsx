import React from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./AddUser";
import AddRemoveUser from "./AddRemoveUser";

const App = () => {
  console.log("app component");

  return (
    <div>
      <AddRemoveUser />
    </div>
  );
};

export default App;

import React from "react";
import Input from "../components/Input";
import Table from "../components/Table";
import "./App.scss";

function App() {
  return (
    <div className="content">
      <header>
        <Input />
      </header>
      <Table />
    </div>
  );
}

export default App;

import React from "react";
import Input from "../components/Input";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import "./App.scss";

function App() {
  return (
    <div className="content">
      <header>
        <Input />
      </header>
      <Table />
      <Pagination />
    </div>
  );
}

export default App;

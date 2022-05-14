import React, { useEffect } from "react";
import { useAppDispath } from "../components/hooks/redux";
import Input from "../components/Input";
import Table from "../components/Table";
import { fetchPosts } from "../store/reducers/actionCreators";
import "./App.scss";

function App() {
  const dispatch = useAppDispath();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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

import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/AppRouter/AppRouter";
import { useAppDispath } from "../components/hooks/redux";
import Input from "../components/Input";
import { fetchPosts } from "../store/reducers/actionCreators";
import "./App.scss";

function App() {
  const dispatch = useAppDispath();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="content">
        <header>
          <Input />
        </header>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;

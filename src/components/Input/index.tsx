import React, { FC } from "react";
import { postsSlice } from "../../store/reducers/postsSlice";
import { useAppDispath } from "../hooks/redux";
import "./Input.scss";

const Input: FC = () => {
  const dispatch = useAppDispath();
  const { filtredInput } = postsSlice.actions;

  const searchValue = (e: any) => {
    return dispatch(filtredInput(e.target.value));
  };

  const checkEnterKey = (e: any) => {
    if (e.keyCode === 13) return searchValue(e);
  };

  return (
    <input
      className="header-input"
      type="text"
      placeholder="Поиск"
      onBlur={(e) => searchValue(e)}
      onKeyUp={(e) => checkEnterKey(e)}
    />
  );
};

export default Input;

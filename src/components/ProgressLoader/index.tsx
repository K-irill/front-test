import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./ProgressLoader.scss";

export const ProgressLoader = () => {
  return (
    <div className="loader">
      <CircularProgress color="inherit" />
    </div>
  );
};

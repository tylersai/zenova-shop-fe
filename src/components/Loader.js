import React from "react";
import { Spinner } from "reactstrap";
import "./Loader.css";

export const Loader = ({ delay = 1000 }) => {
  return (
    <div
      className="Loader d-block mx-auto my-2"
      style={{ animationDelay: delay + "ms" }}
    >
      <Spinner className="d-block mx-auto" />
    </div>
  );
};

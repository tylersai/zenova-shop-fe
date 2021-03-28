import React from "react";
import { Spinner } from "reactstrap";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="Loader d-block mx-auto my-2">
      <Spinner className="d-block mx-auto" />
    </div>
  );
};

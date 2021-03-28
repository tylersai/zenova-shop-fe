import React from "react";
import { Spinner } from "reactstrap";

export const Loader = () => {
  return (
    <Spinner className="Loader d-block mx-auto my-2">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

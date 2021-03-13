import React from "react";

export const ProductPage = ({ match }) => {
  return (
    <div className="ProductPage">
      <h3 className="text-center my-4">Product</h3>
      <p className="text-center">PID : {match.params.id}</p>
    </div>
  );
};

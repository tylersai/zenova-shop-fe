import React from "react";

export const CartPage = ({ match }) => {
  return (
    <div className="CartPage">
      <h3>Cart Page</h3>
      <p>PID : {match.params.id}</p>
    </div>
  );
};

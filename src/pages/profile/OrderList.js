import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";

export const OrderList = ({ orders = [] }) => {
  return (
    <div className="OrderList">
      <h3>Orders</h3>
      {orders && orders.length > 0 ? (
        <p>List of orders goes here...</p>
      ) : (
        <Alert color="info" className="mt-3">
          No orders,{" "}
          <Link className="alert-link" to="/">
            continue shopping
          </Link>
        </Alert>
      )}
    </div>
  );
};

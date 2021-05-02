import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { formatMoney } from "../../utils/formats";

export const OrderTable = ({ orders = [] }) => {
  return (
    <Table className="OrderTable" hover striped responsive color="dark">
      <thead className="thead-dark">
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Customer Email</th>
          <th>Shipping Address</th>
          <th className="text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr key={o._id}>
            <td>
              <Link to={`/order/${o._id}`}>{o._id}</Link>
            </td>
            <td>{o.user}</td>
            <td>{o.user}</td>
            <td>
              <span>{o.shippingInfo.address}</span>
              <br />
              <span>
                {o.shippingInfo.city}, {o.shippingInfo.country}
              </span>
            </td>
            <td className="text-right">${formatMoney(o.totalAmount)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

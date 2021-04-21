import React from "react";
import { Link } from "react-router-dom";
import { Alert, Table } from "reactstrap";
import { formatMoney } from "../../utils/formats";

export const ProductTable = ({ products = [] }) => {
  if (!(products && products.length > 0)) {
    return <Alert color="info">No Products</Alert>;
  }
  return (
    <Table className="ProductTable" hover striped responsive color="dark">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th className="text-right">Quantity</th>
          <th className="text-right">Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p._id}>
            <td>
              <Link to={`/product/${p._id}`}>{p.name}</Link>
            </td>
            <td>{p.brand}</td>
            <td className="text-right">{p.countInStock}</td>
            <td className="text-right">${formatMoney(p.price)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

import React from "react";
import { Col, Row } from "reactstrap";
import { Product } from "../components";
import products from "../products";

export const HomePage = () => {
  return (
    <div>
      <h2>Latest Products</h2>
      <Row>
        {products.map((p) => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

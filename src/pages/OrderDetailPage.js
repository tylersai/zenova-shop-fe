import React from "react";
import { Col, Row } from "reactstrap";

export const OrderDetailPage = ({ match }) => {
  const orderId = match.params.id;
  return (
    <div className="OrderDetailPage">
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={10} md={6}>
          <h2 className="text-center mt-2 mb-5">Your Order Info</h2>
          <p>Order ID: {orderId}</p>
        </Col>
      </Row>
    </div>
  );
};

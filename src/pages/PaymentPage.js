import React from "react";
import { Col, Row } from "reactstrap";
import { CheckoutStepper } from "../components";

export const PaymentPage = () => {
  return (
    <div className="PaymentPage">
      <CheckoutStepper step={3} />
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={10} md={6}>
          <h2 className="text-center mt-2 mb-5">Payment</h2>
        </Col>
      </Row>
    </div>
  );
};

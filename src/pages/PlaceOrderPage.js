import React from "react";
import { Button, Col, Form, Row } from "reactstrap";
import { CheckoutStepper } from "../components";

export const PlaceOrderPage = () => {
  const goPlaceOrder = (e) => {
    e.preventDefault();
    alert("Placing order...");
  };

  return (
    <div className="PlaceOrderPage">
      <CheckoutStepper step={4} />
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={10} md={6}>
          <h2 className="text-center mt-2 mb-5">Place Order</h2>
          <Form onSubmit={goPlaceOrder}>
            <Button type="submit" color="dark" className="my-2">
              Place Order
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

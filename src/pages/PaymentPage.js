import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CheckoutStepper } from "../components";
import paypalLogo from "../assets/paypal-seeklogo.com.svg";
import stripeLogo from "../assets/stripe-seeklogo.com.svg";
import "./PaymentPage.css";

export const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const goSavePayment = (e) => {
    e.preventDefault();
    alert(paymentMethod);
  };

  return (
    <div className="PaymentPage">
      <CheckoutStepper step={3} />
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={10} md={6}>
          <h2 className="text-center mt-2 mb-5">Payment</h2>
          <Form onSubmit={goSavePayment}>
            <FormGroup tag="fieldset">
              <legend>Select Payment Method</legend>
              <FormGroup
                check
                className={
                  "payment-option pl-4 mt-2" +
                  (paymentMethod === "PayPal" ? " selected" : "")
                }
              >
                <Label check className="d-flex px-3 py-4 align-items-center">
                  <Input
                    type="radio"
                    name="paymentMethod"
                    value="PayPal"
                    checked={paymentMethod === "PayPal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <img
                    className="img-fluid ml-3 payment-logo"
                    alt="PayPal"
                    src={paypalLogo}
                  />
                </Label>
              </FormGroup>
              <FormGroup
                check
                className={
                  "payment-option pl-4 mt-2" +
                  (paymentMethod === "Stripe" ? " selected" : "")
                }
              >
                <Label check className="d-flex px-3 py-4 align-items-center">
                  <Input
                    type="radio"
                    name="paymentMethod"
                    value="Stripe"
                    checked={paymentMethod === "Stripe"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <img
                    className="img-fluid ml-3 payment-logo"
                    alt="Stripe"
                    src={stripeLogo}
                  />
                </Label>
              </FormGroup>
            </FormGroup>
            <Button type="submit" color="dark" className="my-2">
              Continue
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

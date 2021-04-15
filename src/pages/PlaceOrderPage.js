import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { CheckoutStepper } from "../components";
import paypalLogo from "../assets/paypal-seeklogo.com.svg";
import stripeLogo from "../assets/stripe-seeklogo.com.svg";

export const PlaceOrderPage = () => {
  const sippingInfo = useSelector((state) => state.shippingInfoState);
  const { address, city, country, postalCode } = sippingInfo.data;

  const paymentMethodState = useSelector((state) => state.paymentMethodState);
  const { paymentMethod } = paymentMethodState.data || {};

  const cartState = useSelector((state) => state.cartState);
  const cartItems = cartState.data || [];

  const getSubtotal = () =>
    +cartItems
      .reduce((tot, el) => tot + +el.price.toFixed(2) * +el.qty, 0)
      .toFixed(2);
  const subtotal = getSubtotal();

  const getShippingFee = () => +(subtotal >= 100 ? 0 : 50).toFixed(2);
  const shippingFee = getShippingFee();

  const getTaxAmt = () => +(subtotal * 0.05).toFixed(2);
  const taxAmt = getTaxAmt();

  const getTotalAmt = () => subtotal + shippingFee + taxAmt;
  const totalAmt = getTotalAmt();

  const goPlaceOrder = (e) => {
    e.preventDefault();
    alert("Placing order...");
  };

  return (
    <div className="PlaceOrderPage">
      <CheckoutStepper step={4} />
      <Row>
        <Col md={8} className="mt-3">
          <Card>
            <ListGroup flush>
              <ListGroupItem>
                <h4 className="my-3">Shipping Address</h4>
                <p className="my-0">{address}</p>
                <p className="my-0">
                  {city}, {country}
                </p>
                <p className="my-0">{postalCode}</p>
              </ListGroupItem>
              <ListGroupItem>
                <h4 className="my-3">Payment Method</h4>
                <div className="d-flex align-items-center pt-1 pb-2">
                  <label className="my-0">Method : </label>
                  <img
                    className="img-fluid ml-3"
                    alt="Payment"
                    src={paymentMethod === "Stripe" ? stripeLogo : paypalLogo}
                    style={{ maxHeight: "30px" }}
                  />
                </div>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4} className="mt-3">
          <Card>
            <ListGroup flush>
              <ListGroupItem>
                <h4 className="my-3">Order Summary</h4>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Subtotal : </Col>
                  <Col className="text-right">${subtotal.toFixed(2)}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Shipping Fee : </Col>
                  <Col className="text-right">${shippingFee.toFixed(2)}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Tax : </Col>
                  <Col className="text-right">${taxAmt.toFixed(2)}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Total : </Col>
                  <Col className="text-right">${totalAmt.toFixed(2)}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button block color="dark" onClick={goPlaceOrder}>
                  Place Order
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

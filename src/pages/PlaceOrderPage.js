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

  const goPlaceOrder = (e) => {
    e.preventDefault();
    alert("Placing order...");
  };

  return (
    <div className="PlaceOrderPage">
      <CheckoutStepper step={4} />
      <Row className="pt-3">
        <Col md={8}>
          <Card>
            <ListGroup flush>
              <ListGroupItem>
                <h4 className="my-2">Shipping</h4>
                <p className="my-0">{address}</p>
                <p className="my-0">
                  {city}, {country}
                </p>
                <p className="my-0">{postalCode}</p>
              </ListGroupItem>
              <ListGroupItem>
                <h4 className="my-2">Payment Method</h4>
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
        <Col md={4}>
          <Card>
            <ListGroup flush>
              <ListGroupItem>
                <h4 className="my-2">Order Summary</h4>
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

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { saveShippingInfoAction } from "../actions/shippingActions";
import { CheckoutStepper } from "../components";

export const ShippingPage = ({ history }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.shippingInfoState);

  const [address, setAddress] = useState(data.address);
  const [city, setCity] = useState(data.city);
  const [postalCode, setPostalCode] = useState(data.postalCode);
  const [country, setCountry] = useState(data.country);

  const goSaveShipping = (e) => {
    e.preventDefault();
    if (address && city && country) {
      dispatch(saveShippingInfoAction({ address, city, country, postalCode }));
      history.push("/payment");
    }
  };

  return (
    <div className="ShippingPage">
      <CheckoutStepper step={2} />
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={10} md={6}>
          <h2 className="text-center mt-2 mb-5">Shipping</h2>
          <Form onSubmit={goSaveShipping}>
            <FormGroup>
              <Label htmlFor="address">Address *</Label>
              <Input
                type="text"
                id="address"
                name="address"
                placeholder="No.123, Cornelia Street"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="city">City *</Label>
              <Input
                type="text"
                id="city"
                name="city"
                placeholder="New York"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="country">Country *</Label>
              <Input
                type="text"
                id="country"
                name="country"
                placeholder="United States"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="postalCode">PostalCode (Optional)</Label>
              <Input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="10001"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
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

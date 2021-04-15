import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./CheckoutStepper.css";

export const CheckoutStepper = ({ step }) => {
  return (
    <div className="CheckoutStepper px-2 pt-2 pb-3">
      <Nav className="justify-content-center align-items-center">
        <NavItem className="mr-0 mr-sm-1 mr-md-3 mr-lg-4" active={step === 1}>
          <LinkContainer to="/login">
            <NavLink disabled={step < 1}>Sign In</NavLink>
          </LinkContainer>
        </NavItem>
        <NavItem className="mr-0 mr-sm-1 mr-md-3 mr-lg-4" active={step === 2}>
          <LinkContainer to="/shipping">
            <NavLink disabled={step < 2}>Shipping</NavLink>
          </LinkContainer>
        </NavItem>
        <NavItem className="mr-0 mr-sm-1 mr-md-3 mr-lg-4" active={step === 3}>
          <LinkContainer to="/payment">
            <NavLink disabled={step < 3}>Payment</NavLink>
          </LinkContainer>
        </NavItem>
        <NavItem className="mr-0 mr-sm-1 mr-md-3 mr-lg-4" active={step === 4}>
          <LinkContainer to="/place-order">
            <NavLink disabled={step < 4}>Place Order</NavLink>
          </LinkContainer>
        </NavItem>
      </Nav>
    </div>
  );
};

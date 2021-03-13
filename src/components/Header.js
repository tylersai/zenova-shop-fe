import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="Header">
      <Navbar className="py-3" dark color="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <NavbarBrand>Zenova</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LinkContainer to="/cart">
                  <NavLink>
                    <i className="fas fa-shopping-cart"></i> Cart
                  </NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem>
                <LinkContainer to="/login">
                  <NavLink href="/login">
                    <i className="fas fa-user"></i> Sign In
                  </NavLink>
                </LinkContainer>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

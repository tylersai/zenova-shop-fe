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

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="Header">
      <Navbar className="py-3" dark color="dark" expand="lg">
        <Container>
          <NavbarBrand href="/">Zenova</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/cart">
                  <i className="fas fa-shopping-cart"></i> Cart
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">
                  <i className="fas fa-user"></i> Sign In
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

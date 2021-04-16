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
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Badge,
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logoutAction } from "../actions/userActions";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data } = useSelector((state) => state.currentUserState);
  const cart = useSelector((state) => state.cartState);
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  const goLogout = () => {
    dispatch(logoutAction());
    history.push("/");
  };

  const cartItemCount =
    cart && cart.data && cart.data.length > 0
      ? cart.data.reduce((count, el) => count + el.qty, 0)
      : 0;

  return (
    <header className="Header">
      <Navbar className="py-3" dark color="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <NavbarBrand>Zenova</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto align-items-center" navbar>
              <NavItem style={{ marginRight: "1rem" }}>
                <LinkContainer to="/cart">
                  <NavLink>
                    <i className="fas fa-shopping-cart"></i> Cart{" "}
                    {cartItemCount > 0 && (
                      <Badge
                        pill
                        color="success"
                        style={{
                          fontSize: "80%",
                          position: "absolute",
                          marginLeft: "4px",
                          zIndex: 2,
                        }}
                      >
                        {cartItemCount}
                      </Badge>
                    )}
                  </NavLink>
                </LinkContainer>
              </NavItem>
              {data && data._id ? (
                <Dropdown
                  isOpen={userMenuOpen}
                  toggle={toggleUserMenu}
                  className="ml-2"
                >
                  <DropdownToggle color="dark" caret>
                    {data.name}{" "}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => history.push("/profile")}>
                      Profile
                    </DropdownItem>
                    <DropdownItem onClick={goLogout}>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NavItem className="ml-4 ml-md-3">
                  <LinkContainer to="/login">
                    <NavLink href="/login">
                      <i className="fas fa-user"></i> Sign In
                    </NavLink>
                  </LinkContainer>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

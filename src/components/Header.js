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
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Badge,
  UncontrolledDropdown,
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  logoutAction,
  clearCreatedOrder,
  clearExistingOrder,
  clearShippingInfoAction,
  clearRegisteredUser,
  removeCartItems,
  clearMyOrders,
} from "../actions";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data: currentUser } = useSelector((state) => state.currentUserState);
  const cart = useSelector((state) => state.cartState);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const goLogout = () => {
    dispatch(logoutAction());
    dispatch(clearCreatedOrder());
    dispatch(clearExistingOrder());
    dispatch(clearShippingInfoAction());
    dispatch(clearRegisteredUser());
    dispatch(removeCartItems());
    dispatch(clearMyOrders());
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
              {currentUser && currentUser.isAdmin ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Manage{" "}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => history.push("/users")}>
                      Users
                    </DropdownItem>
                    <DropdownItem onClick={() => history.push("/products")}>
                      Products
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
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
              )}
              {currentUser && currentUser._id ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {currentUser.name}{" "}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => history.push("/profile")}>
                      Profile
                    </DropdownItem>
                    <DropdownItem onClick={goLogout}>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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

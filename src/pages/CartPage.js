import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  Col,
  Input,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import { cartAddAction, cartRemoveAction } from "../actions/cartActions";

export const CartPage = ({ match, location, history }) => {
  const pid = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cartState);
  const { data } = cartState;

  useEffect(() => {
    if (pid && qty) {
      dispatch(cartAddAction(pid, qty));
    }
  }, [dispatch, pid, qty]);

  const setProductQty = (pid, qty) => dispatch(cartAddAction(pid, qty));

  const removeProduct = (pid) => dispatch(cartRemoveAction(pid));

  const proceedToCheckout = () => history.push("/login?redirect=shipping");

  return (
    <div className="CartPage">
      <h3>Shopping Cart</h3>
      {data && data.length > 0 ? (
        <Row className="pt-4">
          <Col md={8}>
            <Card>
              <ListGroup flush>
                {data.map((item) => (
                  <ListGroupItem key={item.pid}>
                    <Row>
                      <Col xs={6} md={3}>
                        <img
                          className="img img-fluid my-2 my-md-0"
                          src={item.image}
                          alt="Product Img"
                        />
                      </Col>
                      <Col md={7}>
                        <h5 className="my-2">
                          <Link to={`/product/${item.pid}`}>{item.name}</Link>
                        </h5>
                        <Row>
                          <Col xs={6} md={4}>
                            <Input
                              className="my-1"
                              type="select"
                              bsSize="sm"
                              value={item.qty}
                              onChange={(e) =>
                                setProductQty(item.pid, +e.target.value)
                              }
                            >
                              {[...Array(item.countInStock).keys()].map((o) => (
                                <option key={o + 1} value={o + 1}>
                                  {o + 1}
                                </option>
                              ))}
                            </Input>
                          </Col>
                          <Col xs={6} md={4}>
                            <Button
                              className="py-2 px-3"
                              color="light"
                              onClick={() => removeProduct(item.pid)}
                            >
                              <i className="fa fa-trash"></i>
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={2}>
                        <h5 className="text-success text-right my-2">
                          ${item.price}
                        </h5>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup flush>
                <ListGroupItem>
                  <h4 className="my-2">
                    Subtotal ({data.reduce((acc, item) => acc + item.qty, 0)})
                    items
                  </h4>
                  <h5 className="mt-4">
                    $
                    {data
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </h5>
                </ListGroupItem>
                <ListGroupItem>
                  <Button block color="dark" onClick={proceedToCheckout}>
                    Proceed to Checkout
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ) : (
        <Alert color="info" className="mt-3 ">
          Your cart is empty,{" "}
          <Link className="alert-link" to="/">
            continue shopping
          </Link>
        </Alert>
      )}
    </div>
  );
};

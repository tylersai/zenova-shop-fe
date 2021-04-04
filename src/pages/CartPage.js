import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, Card, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { cartAddAction } from "../actions/cartActions";

export const CartPage = ({ match, location }) => {
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
  return (
    <div className="CartPage">
      <h3>Shopping Cart</h3>
      {data && data.length > 0 ? (
        <Row className="pt-4">
          <Col md={10}>
            <Card>
              <ListGroup flush>
                {data.map((item) => (
                  <ListGroupItem key={item.pid}>
                    <Row>
                      <Col xs={11}>
                        <h5 className="my-2">{item.name}</h5>
                      </Col>
                      <Col xs={1}>
                        <h5 className="text-success my-2">{item.qty}</h5>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
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

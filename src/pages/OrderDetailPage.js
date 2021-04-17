import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { getOrderByIdAction } from "../actions/orderActions";
import { Loader } from "../components";

export const OrderDetailPage = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const { loading, error, data } = useSelector(
    (state) => state.orderDetailsState
  );

  useEffect(() => {
    dispatch(getOrderByIdAction(orderId));
  }, [dispatch, orderId]);

  return (
    <div className="OrderDetailPage">
      <h2 className="mb-3">Your Order Info</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert color="danger">{error}</Alert>
      ) : (
        <Row>
          <Col xs={12} md={8} lg={9} className="mb-3">
            <p>
              <label className="font-weight-bold mb-0">Order ID:</label>
              <br />
              <span className="pl-2">{data._id}</span>
            </p>
            <p>
              <label className="font-weight-bold mb-0">Name:</label>
              <br />
              <span className="pl-2">{data.user.name}</span>
            </p>
            <p>
              <label className="font-weight-bold mb-0">Email:</label>
              <br />
              <span className="pl-2">
                <a href={`mailto:${data.user.email}`}>{data.user.email}</a>
              </span>
            </p>
            <p>
              <label className="font-weight-bold mb-0">Address:</label>
              <br />
              <span className="pl-2">{data.shippingInfo.address}</span>
              <br />
              <span className="pl-2">
                {data.shippingInfo.city}, {data.shippingInfo.country}
              </span>
              <br />
              <span className="pl-2">{data.shippingInfo.postalCode}</span>
            </p>
            <label className="font-weight-bold mb-0">Items:</label>
            <ListGroup flush>
              {data.orderItems.map((item) => (
                <ListGroupItem key={item._id}>
                  <Row>
                    <Col xs={8}>{item.name}</Col>
                    <Col xs={1}>x{item.qty}</Col>
                    <Col xs={3} className="text-right">
                      ${(item.qty * +item.price.toFixed(2)).toFixed(2)}
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <h5 className="mb-4">Summary</h5>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="font-weight-bold mb-0">Subtotal:</label>
              <span className="pl-2">${data.subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="font-weight-bold mb-0">Shipping:</label>
              <span className="pl-2">${data.shippingFee.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="font-weight-bold mb-0">Tax:</label>
              <span className="pl-2">${data.taxAmount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="font-weight-bold mb-0">Total:</label>
              <span className="pl-2">${data.totalAmount.toFixed(2)}</span>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

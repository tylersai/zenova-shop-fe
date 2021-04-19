import React, { useEffect } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { getOrderByIdAction, payOrderAction } from "../actions/orderActions";
import { Loader } from "../components";

export const OrderDetailPage = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const { loading, error, data } = useSelector(
    (state) => state.orderDetailsState
  );

  useEffect(() => {
    orderId && dispatch(getOrderByIdAction(orderId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, orderId]);

  const onPaymentSuccess = (paymentResult) =>
    dispatch(payOrderAction(orderId, paymentResult));

  return (
    <div className="OrderDetailPage">
      <h2 className="mb-3">Your Order Info</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert color="danger">{error}</Alert>
      ) : (
        data &&
        data._id && (
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
                      <Col xs={8}>
                        <Link to={`/product/${item.pid}`}>{item.name}</Link>
                      </Col>
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
              {data.isPaid ? (
                <>
                  <div className="border-bottom mt-3"></div>
                  <h5 className="mt-4 mb-3">Status</h5>
                  <Alert color="info" className="mb-2">
                    Paid on {data.paidAt.substr(0, 10)}
                  </Alert>

                  {data.isDelivered ? (
                    <Alert color="info" className="mb-2">
                      Delivered on {data.deliveredAt.substr(0, 10)}
                    </Alert>
                  ) : (
                    <Alert color="danger" className="mb-2">
                      Not Delivered
                    </Alert>
                  )}
                </>
              ) : (
                <div className="pt-4">
                  <PayPalButton
                    amount={+data.totalAmount.toFixed(2)}
                    onSuccess={onPaymentSuccess}
                    style={{
                      color: "black",
                      height: 42,
                    }}
                  />
                </div>
              )}
            </Col>
          </Row>
        )
      )}
    </div>
  );
};

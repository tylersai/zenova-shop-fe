import React from "react";
import { Link } from "react-router-dom";
import { Alert, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { formatMoney } from "../../utils/formats";

export const OrderList = ({ orders = [] }) => {
  return (
    <div className="OrderList">
      <h3>Orders</h3>
      {orders && orders.length > 0 ? (
        <ListGroup flush>
          {orders.map((o) => (
            <ListGroupItem key={o._id}>
              <Row>
                <Col xs={9} md={4}>
                  <p>
                    <Link to={`/order/${o._id}`}>{o._id}</Link>
                  </p>
                </Col>
                <Col xs={3} md={2} className="text-right">
                  <p>${formatMoney(o.totalAmount)}</p>
                </Col>
                <Col xs={6} md={3} className="text-right">
                  {o.isPaid ? (
                    <p className="text-info">
                      <span>Paid On</span>
                      <br />
                      <span>{o.paidAt.substr(0, 10)}</span>
                    </p>
                  ) : (
                    <p className="text-danger">Not Paid</p>
                  )}
                </Col>
                <Col xs={6} md={3} className="text-right">
                  {o.isDelivered ? (
                    <p className="text-info">
                      <span>Delivered On</span>
                      <br />
                      <span>{o.deliveredAt.substr(0, 10)}</span>
                    </p>
                  ) : (
                    <p className="text-danger">Not Delivered</p>
                  )}
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <Alert color="info" className="mt-3">
          No orders,{" "}
          <Link className="alert-link" to="/">
            continue shopping
          </Link>
        </Alert>
      )}
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { Alert, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { formatMoney } from "../../utils/formats";

export const OrderList = ({ orders = [] }) => {
  return (
    <div className="OrderList">
      <h3>Orders</h3>
      {orders && orders.length > 0 ? (
        <ListGroup flush className="hover">
          {orders.map((o) => (
            <ListGroupItem key={o._id} action>
              <Row>
                <Col xs={9} md={4}>
                  <p>
                    <Link to={`/order/${o._id}`}>{o._id}</Link>
                  </p>
                </Col>
                <Col xs={3} md={2} className="text-right font-weight-bold">
                  <p>${formatMoney(o.totalAmount)}</p>
                </Col>
                <Col xs={6} md={3} className="text-right">
                  {o.isPaid ? (
                    <p className="text-success mb-0">
                      <span>
                        <i className="far fa-check-circle"></i> Paid On
                      </span>
                      <br />
                      <span>{o.paidAt.substr(0, 10)}</span>
                    </p>
                  ) : (
                    <p className="text-danger mb-0">
                      <i className="far fa-times-circle"></i> Not Paid
                    </p>
                  )}
                </Col>
                <Col xs={6} md={3} className="text-right">
                  {o.isDelivered ? (
                    <p className="text-info mb-0">
                      <span>
                        <i className="far fa-check-circle"></i> Delivered On
                      </span>
                      <br />
                      <span>{o.deliveredAt.substr(0, 10)}</span>
                    </p>
                  ) : (
                    <p className="text-danger mb-0">
                      <i className="far fa-times-circle"></i> Not Delivered
                    </p>
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

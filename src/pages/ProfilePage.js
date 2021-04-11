import React from "react";
import { Col, Row } from "reactstrap";

export const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      <Row>
        <Col xs={12} md={4}>
          <h3>Profile</h3>
        </Col>
        <Col xs={12} md={8}>
          <h3>Orders</h3>
        </Col>
      </Row>
    </div>
  );
};

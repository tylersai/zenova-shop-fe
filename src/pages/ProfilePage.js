import React from "react";
import { Col, Row } from "reactstrap";
import { ProfileCard } from "./profile";

export const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      <Row>
        <Col xs={12} md={4}>
          <ProfileCard name="John Doe" email="john@gmail.com" />
        </Col>
        <Col xs={12} md={8}>
          <h3>Orders</h3>
        </Col>
      </Row>
    </div>
  );
};

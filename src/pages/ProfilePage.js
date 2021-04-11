import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { OrderList, ProfileCard } from "./profile";

export const ProfilePage = () => {
  const { data } = useSelector((state) => state.currentUserState);
  return (
    <div className="ProfilePage">
      <Row>
        <Col xs={12} md={4}>
          {data && data._id && (
            <ProfileCard name={data.name} email={data.email} />
          )}
        </Col>
        <Col xs={12} md={8}>
          <OrderList orders={[]} />
        </Col>
      </Row>
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Row } from "reactstrap";
import { getMyOrdersAction } from "../actions/orderActions";
import { Loader } from "../components";
import { OrderList, ProfileCard } from "./profile";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { data: currentUser } = useSelector((state) => state.currentUserState);
  const { loading, error, data: orders } = useSelector(
    (state) => state.myOrdersState
  );

  useEffect(() => {
    dispatch(getMyOrdersAction());
  }, [dispatch]);

  return (
    <div className="ProfilePage">
      <Row>
        <Col xs={12} md={4}>
          {currentUser && currentUser._id && (
            <ProfileCard name={currentUser.name} email={currentUser.email} />
          )}
        </Col>
        <Col xs={12} md={8}>
          {loading ? (
            <Loader />
          ) : error ? (
            <Alert color="danger">{error}</Alert>
          ) : (
            <OrderList orders={orders} />
          )}
        </Col>
      </Row>
    </div>
  );
};

import React from "react";
import { Col, Row } from "reactstrap";
import notFoundIcon from "../assets/404-error.svg";

export const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <div className="d-flex flex-column align-items-stretch">
        <Row className="justify-content-center">
          <Col xs={4} sm={3} md={2} lg={1}>
            <img className="img-fluid mt-5" src={notFoundIcon} alt="404" />
          </Col>
        </Row>
        <h3 className="text-center my-4">NOT FOUND</h3>
      </div>
    </div>
  );
};

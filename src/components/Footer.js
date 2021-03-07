import React from "react";
import { Col, Container, Row } from "reactstrap";

export const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
        <Row>
          <Col>
            <small className="text-center d-block my-3">
              Copyright &copy; Zenova Shop
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

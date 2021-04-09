import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="LoginPage">
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={10} md={6}>
          <h2 className="text-center mt-2 mb-5">Zenova</h2>
          <Form onSubmit={goLogin}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="6 - 20 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button type="submit" color="dark" className="my-2">
              Login
            </Button>
          </Form>
          <small className="text-right d-block mt-3">
            New to Zenova? <Link to="/register">Register</Link>
          </small>
        </Col>
      </Row>
    </div>
  );
};

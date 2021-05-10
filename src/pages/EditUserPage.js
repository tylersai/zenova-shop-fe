import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { updateProfileAction } from "../actions";

export const EditUserPage = ({ history }) => {
  const dispatch = useDispatch();
  const { updating, error, data: currentUser } = useSelector(
    (state) => state.currentUserState
  );

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const goUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(updateProfileAction(name, email));
  };

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="EditUserPage">
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={10} md={6}>
          <div className="d-flex align-items-center mb-4">
            <a href="/" className="btn btn-light" onClick={goBack}>
              <i className="fas fa-chevron-left mr-2"></i>
              Back
            </a>
            <h3 className="text-center ml-5 my-0">Edit Profile</h3>
          </div>
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={goUpdateProfile}>
            <FormGroup>
              <Label htmlFor="name">Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <Button
              type="submit"
              color="dark"
              className="my-2"
              disabled={updating || !name || !email}
            >
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

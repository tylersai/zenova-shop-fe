import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
  Alert,
  Input,
} from "reactstrap";
import { productDetailsAction } from "../actions";
import { Loader, Rating } from "../components";

export const ProductPage = ({ match, history }) => {
  const id = match.params.id;

  const dispatch = useDispatch();

  const { data: currentUser } = useSelector((state) => state.currentUserState);
  const productDetailsState = useSelector((state) => state.productDetailsState);
  const { loading, data, error } = productDetailsState;
  const product = data;

  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(productDetailsAction(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  const processAddToCard = () => {
    history.push(`/cart/${id}?qty=${qty}`);
  };

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="ProductPage">
      <a href="/" className="btn btn-light mt-1 mb-3" onClick={goBack}>
        <i className="fas fa-chevron-left mr-2"></i>
        Back
      </a>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert color="danger" role="status">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col md={6}>
            <img
              src={process.env.REACT_APP_IMG_BASE_URL + product.image}
              alt="Product Img"
              className="img-fluid"
            />
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroupItem>
                <h4>{product.name}</h4>
              </ListGroupItem>
              <ListGroupItem>
                <Rating rating={product.rating} reviews={product.numReviews} />
              </ListGroupItem>
              <ListGroupItem>Price: ${product.price}</ListGroupItem>
              <ListGroupItem>Description: {product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup flush>
                <ListGroupItem>
                  <Row>
                    <Col xs={5}>Price:</Col>
                    <Col xs={7}>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs={5}>Status:</Col>
                    <Col xs={7}>
                      {product.countInStock > 0 ? (
                        <span className="text-success">In Stock</span>
                      ) : (
                        <span className="text-danger">Out of Stock</span>
                      )}
                    </Col>
                  </Row>
                </ListGroupItem>
                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>Qty:</Col>
                      <Col>
                        <Input
                          type="select"
                          bsSize="sm"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                          disabled={
                            product.countInStock === 0 ||
                            (currentUser && currentUser.isAdmin)
                          }
                        >
                          {[...Array(product.countInStock).keys()].map((o) => (
                            <option key={o + 1} value={o + 1}>
                              {o + 1}
                            </option>
                          ))}
                        </Input>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}
                <ListGroupItem>
                  <Button
                    block
                    color="dark"
                    disabled={
                      product.countInStock === 0 ||
                      (currentUser && currentUser.isAdmin)
                    }
                    onClick={processAddToCard}
                  >
                    Add To Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

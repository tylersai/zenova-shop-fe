import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, ListGroupItem, Card, Button } from "reactstrap";
import { Rating } from "../components";

export const ProductPage = ({ match }) => {
  const id = match.params.id;
  const [product, setProduct] = useState(null);

  const fetchProduct = () => {
    axios
      .get(`/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setProduct(null));
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!product) return null;
  return (
    <div className="ProductPage">
      <Link to="/" className="btn btn-light mt-1 mb-3">
        <i class="fas fa-chevron-left mr-2"></i>
        Back
      </Link>
      <Row>
        <Col md={6}>
          <img src={product.image} alt="Product Img" className="img-fluid" />
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
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  block
                  color="dark"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

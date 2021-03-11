import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Rating } from "./";
import "./Product.css";

export const Product = ({ product }) => {
  return (
    <Card className="Product my-3">
      <a href={`/product/${product._id}`}>
        <CardImg top src={product.image} alt="Prod Img" />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText tag="div">
            <Rating rating={product.rating} reviews={product.numReviews} />
          </CardText>
          <CardText className="pt-3" tag="h5">
            ${product.price}
          </CardText>
        </CardBody>
      </a>
    </Card>
  );
};

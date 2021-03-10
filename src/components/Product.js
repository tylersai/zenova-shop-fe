import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import "./Product.css";

export const Product = ({ product }) => {
  return (
    <Card className="Product my-3">
      <a href={`/product/${product._id}`}>
        <CardImg top src={product.image} alt="Prod Img" />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText style={{ textDecoration: "none" }}>
            {product.description}
          </CardText>
        </CardBody>
      </a>
    </Card>
  );
};

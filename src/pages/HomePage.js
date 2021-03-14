import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Product } from "../components";

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => setProducts([]));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Latest Products</h2>
      <Row>
        {products.map((p) => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

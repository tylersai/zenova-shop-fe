import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { productListAction } from "../actions";
import { Product } from "../components";

export const HomePage = () => {
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.productState);
  const { productList, loading, error } = productState;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      <h2>Latest Products</h2>
      {loading ? (
        <h4 className="text-secondary">Loading...</h4>
      ) : error ? (
        <h4 className="text-danger">{error}</h4>
      ) : (
        <Row>
          {productList.map((p) => (
            <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={p} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Row } from "reactstrap";
import { productListAction } from "../actions";
import { Product, Loader } from "../components";

export const HomePage = () => {
  const dispatch = useDispatch();

  const productListState = useSelector((state) => state.productListState);
  const { loading, data, error } = productListState;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div className="HomePage">
      <h2 className="mb-3">Latest Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert color="danger" role="status">
          {error}
        </Alert>
      ) : (
        <Row>
          {data.map((p) => (
            <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={p} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

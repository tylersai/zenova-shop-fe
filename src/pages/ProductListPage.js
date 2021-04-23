import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Alert } from "reactstrap";
import { productListAction } from "../actions";
import { Loader } from "../components";
import { ProductTable } from "./product";

export const ProductListPage = () => {
  const dispatch = useDispatch();

  const productListState = useSelector((state) => state.productListState);
  const { loading, data, error } = productListState;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div className="ProductListPage">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <h2 className="mb-0">All Products in Store</h2>
        <LinkContainer to="/save/product">
          <a className="btn btn-dark ml-auto" href="/save/product">
            <i className="fas fa-plus"></i> New
          </a>
        </LinkContainer>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Alert color="danger" role="status">
          {error}
        </Alert>
      ) : (
        <ProductTable products={data} />
      )}
    </div>
  );
};

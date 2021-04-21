import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <h2 className="mb-3">All Products in Store</h2>
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

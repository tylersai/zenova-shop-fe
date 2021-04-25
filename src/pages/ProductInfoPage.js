import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import { productFormGetOrRenewAction } from "../actions";
import { ProductForm } from "./product";

export const ProductInfoPage = ({ match }) => {
  const dispatch = useDispatch();

  const { loading, data: product, error } = useSelector(
    (state) => state.productFormState
  );

  useEffect(() => {
    dispatch(productFormGetOrRenewAction(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div className="ProductInfoPage">
      <h2 className="mb-3">{match.params.id && "Edit"} Product Info</h2>
      {error && <Alert color="danger">{error}</Alert>}
      <ProductForm loading={loading} product={product} />
    </div>
  );
};

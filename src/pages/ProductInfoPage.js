import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Alert } from "reactstrap";
// import { getProductById } from "../actions";

export const ProductInfoPage = ({ match }) => {
  // const dispatch = useDispatch();

  // const { loading, data: product, error } = useSelector(
  //   (state) => state.productFormState
  // );

  // useEffect(() => {
  //   dispatch(getProductById());
  // }, [dispatch, match.params.id]);

  return (
    <div className="ProductInfoPage">
      <h2 className="mb-3">Product Info</h2>
      PID : {match.params.id}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Alert, Nav, NavItem } from "reactstrap";
import { getOrders } from "../actions";
import { Loader, TablePagination } from "../components";
import { OrderTable } from "./order";

export const OrderListPage = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.orderPaginationState
  );

  const [orderType, setOrderType] = useState("paid-but-not-delivered");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getOrders(orderType, currentPage));
  }, [dispatch, orderType, currentPage]);

  const handleChangeTab = (tab) => {
    if (tab !== orderType) {
      setOrderType(tab);
      setCurrentPage(1);
    }
  };

  return (
    <div className="OrderListPage">
      <h2 className="mb-3">Customer Orders</h2>
      <Nav tabs>
        <NavItem className="mr-0">
          <NavLink
            to="/orders"
            className="nav-link"
            activeClassName={
              orderType === "paid-but-not-delivered" ? "active" : ""
            }
            onClick={(e) => {
              e.preventDefault();
              handleChangeTab("paid-but-not-delivered");
            }}
          >
            Paid
          </NavLink>
        </NavItem>
        <NavItem className="mr-0">
          <NavLink
            to="/orders"
            className="nav-link"
            activeClassName={orderType === "unpaid" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleChangeTab("unpaid");
            }}
          >
            Unpaid
          </NavLink>
        </NavItem>
        <NavItem className="mr-0">
          <NavLink
            to="/orders"
            className="nav-link"
            activeClassName={orderType === "delivered" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleChangeTab("delivered");
            }}
          >
            Delivered
          </NavLink>
        </NavItem>
      </Nav>
      <div className="pt-3 px-2">
        {loading ? (
          <Loader delay={200} />
        ) : error ? (
          <Alert color="danger">{error}</Alert>
        ) : data && data.contents && data.contents.length > 0 ? (
          <>
            <OrderTable orders={data.contents} orderType={orderType} />
            <div className="d-flex justify-content-center mt-2">
              <TablePagination
                currentPage={currentPage}
                totalPages={data.totalPages}
                changePage={setCurrentPage}
              />
            </div>
          </>
        ) : (
          <Alert color="info">No orders available</Alert>
        )}
      </div>
    </div>
  );
};

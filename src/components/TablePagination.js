import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export const TablePagination = ({ currentPage, totalPages, changePage }) => {
  if (totalPages <= 1) {
    return null;
  }
  const goChangePage = (e, page) => {
    e.preventDefault();
    changePage && changePage(page);
  };
  return (
    <Pagination className="TablePagination">
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink
          first
          href="#"
          onClick={(e) => currentPage !== 1 && goChangePage(e, 1)}
        />
      </PaginationItem>
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink
          previous
          href="#"
          onClick={(e) => currentPage !== 1 && goChangePage(e, currentPage - 1)}
        />
      </PaginationItem>
      {[...Array(totalPages).keys()].map((pg) => (
        <PaginationItem
          key={pg + 1}
          active={pg + 1 === currentPage}
          onClick={(e) => goChangePage(e, pg + 1)}
        >
          <PaginationLink href="#">{pg + 1}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={currentPage === totalPages}>
        <PaginationLink
          next
          href="#"
          onClick={(e) =>
            currentPage !== totalPages && goChangePage(e, currentPage + 1)
          }
        />
      </PaginationItem>
      <PaginationItem disabled={currentPage === totalPages}>
        <PaginationLink
          last
          href="#"
          onClick={(e) =>
            currentPage !== totalPages && goChangePage(e, totalPages)
          }
        />
      </PaginationItem>
    </Pagination>
  );
};

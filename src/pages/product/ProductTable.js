import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import { formatMoney } from "../../utils/formats";
import { productDeleteAction } from "../../actions";

export const ProductTable = ({ products = [] }) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  if (!(products && products.length > 0)) {
    return <Alert color="info">No Products</Alert>;
  }

  const toggle = () => setModal(!modal);

  const goDelete = (item) => {
    dispatch(productDeleteAction(item._id));
    setModal(false);
  };

  return (
    <Table className="ProductTable" hover striped responsive color="dark">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th className="text-right">Quantity</th>
          <th className="text-right">Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p._id}>
            <td>
              <Link to={`/product/${p._id}`}>{p.name}</Link>
            </td>
            <td>{p.brand}</td>
            <td className="text-right">{p.countInStock}</td>
            <td className="text-right">${formatMoney(p.price)}</td>
            <td>
              <div
                style={{
                  opacity: "0.7",
                  whiteSpace: "nowrap",
                  textAlign: "right",
                }}
              >
                <Link to={`/save/product/${p._id}`}>
                  <i className="fas fa-pen"></i>
                </Link>{" "}
                <span className="mx-2">|</span>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedItem(p);
                    toggle();
                  }}
                >
                  <i className="fas fa-trash"></i>
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Delete Product</ModalHeader>
        <ModalBody>
          Are you sure you want to delete{" "}
          <Link
            to={`/product/${selectedItem?._id}`}
            className="font-weight-bold"
          >
            {selectedItem?.name}
          </Link>
          ?
          <br />
          <br />
          <span>Brand: {selectedItem?.brand}</span>
          <br />
          <span>Price: ${formatMoney(selectedItem?.price)}</span>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button
            className="ml-2"
            color="danger"
            onClick={() => goDelete(selectedItem)}
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </Table>
  );
};

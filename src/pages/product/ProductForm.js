import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Product } from "../../models";

export const ProductForm = ({ loading, product = new Product() }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setName(product.name);
    setBrand(product.brand);
    setCategory(product.category);
    setDescription(product.description);
    setImage(product.image);
    setPrice(product.price);
    setCountInStock(product.countInStock);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const goUploadImage = async (e) => {
    const file = e.target.files[0];
    const form = new FormData();
    form.append("image", file);
    try {
      setUploading(true);
      const { data } = await axios.post("/products/images/upload", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploading(false);
      setImage(data.imagePath);
    } catch (error) {
      setUploading(false);
      setImage("");
    }
  };

  const goSaveOrUpdate = () =>
    alert("Process " + (product._id ? "update" : "save"));

  return (
    <Form className="ProductForm">
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="brand">Brand</Label>
            <Input
              type="text"
              id="brand"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="category">Category</Label>
            <Input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="price">Price</Label>
            <Input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="countInStock">In Stock Qty</Label>
            <Input
              type="text"
              id="countInStock"
              name="countInStock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="align-items-end">
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="image">Image</Label>
            <Input type="text" id="image" name="image" value={image} disabled />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              className="form-control"
              type="file"
              id="imgFile"
              disabled={loading || uploading}
              onChange={goUploadImage}
            />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <Input
          type="textarea"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormGroup>

      <Button
        color="dark"
        className="my-2"
        disabled={loading || uploading}
        onClick={goSaveOrUpdate}
      >
        Save
      </Button>
    </Form>
  );
};

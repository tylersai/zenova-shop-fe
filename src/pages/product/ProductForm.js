import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { productCreateAction } from "../../actions";
import { Product } from "../../models";

export const ProductForm = ({ loading, product = new Product() }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);

  const [nameErr, setNameErr] = useState("");
  const [brandErr, setBrandErr] = useState("");
  const [categoryErr, setCategoryErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");
  const [imageErr, setImageErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  const [countInStockErr, setCountInStockErr] = useState("");

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
      setImageErr("");
    } catch (error) {
      setUploading(false);
      setImage("");
      setImageErr(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const clearError = () => {
    setNameErr("");
    setBrandErr("");
    setCategoryErr("");
    setDescriptionErr("");
    setImageErr("");
    setPriceErr("");
    setCountInStockErr("");
  };

  const isValid = () => {
    let nameValid = true;
    let brandValid = true;
    let categoryValid = true;
    let descriptionValid = true;
    let imageValid = true;
    let countInStockValid = true;
    let priceValid = true;

    if (!name) {
      setNameErr("Name is required");
      nameValid = false;
    }

    if (!brand) {
      setBrandErr("Brand is required");
      brandValid = false;
    }

    if (!category) {
      setCategoryErr("Category is required");
      categoryValid = false;
    }

    if (!description) {
      setDescriptionErr("Description is required");
      descriptionValid = false;
    }

    if (!image) {
      setImageErr("Image is required");
      imageValid = false;
    }

    if (!price) {
      setPriceErr("Price is required");
      priceValid = false;
    } else if (isNaN(price)) {
      setPriceErr("Invalid price");
      priceValid = false;
    } else if (+price < 0.01) {
      setPriceErr("Price is too low");
      priceValid = false;
    }

    if (!countInStock) {
      setCountInStockErr("In Stock Qty is required");
      countInStockValid = false;
    } else if (isNaN(countInStock)) {
      setCountInStockErr("Invalid In Stock Qty");
      countInStockValid = false;
    } else if (!Number.isInteger(+countInStock)) {
      setCountInStockErr("In Stock Qty must be an integer");
      countInStockValid = false;
    } else if (+countInStock < 0) {
      setCountInStockErr("In Stock Qty must be positive value");
      countInStockValid = false;
    }

    return (
      nameValid &&
      brandValid &&
      categoryValid &&
      descriptionValid &&
      imageValid &&
      countInStockValid &&
      priceValid
    );
  };

  const goSaveOrUpdate = () => {
    clearError();
    if (isValid()) {
      if (product._id) {
        // Update
        alert("Process update");
      } else {
        dispatch(
          productCreateAction(
            { name, brand, category, countInStock, price, image, description },
            history
          )
        );
      }
    }
  };

  return (
    <Form className="ProductForm">
      {product._id && (
        <FormGroup>
          <p>
            PID : <span className="text-info">{product._id}</span>
          </p>
        </FormGroup>
      )}
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          className={nameErr && "is-invalid"}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setNameErr("");
            setName(e.target.value);
          }}
          required
        />
        {nameErr && <div class="invalid-feedback">{nameErr}</div>}
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="brand">Brand</Label>
            <Input
              className={brandErr && "is-invalid"}
              type="text"
              id="brand"
              name="brand"
              value={brand}
              onChange={(e) => {
                setBrandErr("");
                setBrand(e.target.value);
              }}
              required
            />
            {brandErr && <div class="invalid-feedback">{brandErr}</div>}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="category">Category</Label>
            <Input
              className={categoryErr && "is-invalid"}
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => {
                setCategoryErr("");
                setCategory(e.target.value);
              }}
              required
            />
            {categoryErr && <div class="invalid-feedback">{categoryErr}</div>}
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="price">Price</Label>
            <Input
              className={priceErr && "is-invalid"}
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => {
                setPriceErr("");
                setPrice(e.target.value);
              }}
              required
            />
            {priceErr && <div class="invalid-feedback">{priceErr}</div>}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="countInStock">In Stock Qty</Label>
            <Input
              className={countInStockErr && "is-invalid"}
              type="text"
              id="countInStock"
              name="countInStock"
              value={countInStock}
              onChange={(e) => {
                setCountInStockErr("");
                setCountInStock(e.target.value);
              }}
              required
            />
            {countInStockErr && (
              <div class="invalid-feedback">{countInStockErr}</div>
            )}
          </FormGroup>
        </Col>
      </Row>

      <Row className="align-items-end">
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="image">Image</Label>
            <Input
              type="text"
              id="image"
              name="image"
              value={image}
              disabled
              required
            />
            {imageErr && (
              <div class="invalid-feedback d-none d-md-block">&nbsp;</div>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              className={"form-control" + (imageErr ? " is-invalid" : "")}
              type="file"
              id="imgFile"
              disabled={loading || uploading}
              onChange={goUploadImage}
              required
            />
            {imageErr && <div class="invalid-feedback">{imageErr}</div>}
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <Input
          className={descriptionErr && "is-invalid"}
          type="textarea"
          id="description"
          name="description"
          value={description}
          onChange={(e) => {
            setDescriptionErr("");
            setDescription(e.target.value);
          }}
          required
        />
        {descriptionErr && <div class="invalid-feedback">{descriptionErr}</div>}
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

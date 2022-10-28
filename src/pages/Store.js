import React from "react";
import { Row, Col } from "react-bootstrap";
import { productArray } from "../productsStore";
import ProductCard from "../components/ProductCard";

function Store() {
  return (
    <>
      <h1 align="centre" className="p-3">Welcome to the Store</h1>
      <Row xs={1} md={3} classname="g-4">
        {productArray.map((product, index) => (
          <Col align="centre" key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;

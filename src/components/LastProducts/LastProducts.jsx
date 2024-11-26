import React from "react";
import "./LastProducts.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductBox from "../ProductBox/ProductBox";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

export default function LastProducts() {
  return (
    <div>
      <SectionHeader
        title={`tending products`}
        subTitle={`best products you ever seen`}
        linkHref={`products`}
      />
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <ProductBox
              title={`airpod`}
              price={200}
              imgSrc={`images/airpodimg.webp`}
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ProductBox
              title={`airpod`}
              price={200}
              imgSrc={`images/airpodimg.webp`}
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ProductBox
              title={`airpod`}
              price={200}
              imgSrc={`images/airpodimg.webp`}
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ProductBox
              title={`airpod`}
              price={200}
              imgSrc={`images/airpodimg.webp`}
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ProductBox
              title={`airpod`}
              price={200}
              imgSrc={`images/airpodimg.webp`}
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ProductBox
              title={`airpod`}
              price={200}
              imgSrc={`images/airpodimg.webp`}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductBox from "../../components/ProductBox/ProductBox";
import './Products.css'
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from '../../components/Footer/Footer'

export default function Products() {
  return (
    <div className="Products">
      <NavMenu></NavMenu>
      <select className="filter-box">
        <option value="-1">Choose the filter</option>
        <option value="cheap">Cheap</option>
        <option value="expensive">Expensive</option>
        <option value="shoes">Shoes</option>
        <option value="gadget">Gadget</option>
      </select>
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
      <Footer></Footer>
    </div>
  );
}

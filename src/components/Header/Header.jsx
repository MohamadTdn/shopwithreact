import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container fluid className="Header">
    <Row className="d-flex justify-content-center align-items-center">
      <Col lg={6}>
        <img className="banner-img d-none d-lg-block" src="/images/bannerimg.png" alt="" />
      </Col>
      <Col lg={6} md={12}>
        <h5 className="mt-3">Proudcts for Men and Women</h5>
        <h1 className="mt-3">Always like a Genthelman</h1>
        <p className="header-desc mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          dolore beatae minima laboriosam suscipit, quidem provident iusto
          voluptates adipisci aliquid sed temporibus, neque nostrum,
          accusantium ea incidunt deleniti iste veniam Lorem ipsum dolor sit
          amet conse.
        </p>
        <Button className="mt-3" variant="warning">
          <Link to={'/'}>Go To Shop</Link>
        </Button>
      </Col>
    </Row>
  </Container>
  );
}

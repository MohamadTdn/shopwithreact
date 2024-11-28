import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="Footer">
      <Row>
        <Col lg={4} md={6} sm={12}>
          <h5>About Us</h5>
          <div className="footer-desc">
            <img className="Footer-logo" src="/images/logo.png" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              dolorum quos voluptatibus, numquam dolore laudantium adipisci.
              Sequi reiciendis illo aspernatur maxime ex nesciunt, sunt odio
              aliquid impedit natus vel dignissimos?
            </p>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ul>
          <h5>Pages</h5>
            <li>Home</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ul>
          <h5>Infos</h5>
            <li>Social Media</li>
            <li>News</li>
            <li>About Us</li>
            <li>Articles</li>
          </ul>
        </Col>
      </Row>
      <div className="copyright">
        <h5>Created by Mohamad Tadayon</h5>
      </div>
    </Container>
  );
}

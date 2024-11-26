import React from "react";
import Col from "react-bootstrap/Col";
import "./ProductBanner.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function ProductBanner({ imgSrc }) {
  return (
    <Col lg={6} sm={12}>
      <ScrollAnimation
        animateIn="fadeIn"
        initiallyVisible={true}
        animateOnce={true}
      >
        <img className={"product-banner-img"} src={imgSrc} alt="" />
      </ScrollAnimation>
    </Col>
  );
}

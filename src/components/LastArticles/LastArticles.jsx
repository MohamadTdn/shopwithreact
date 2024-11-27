import React from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Container, Row, Col } from "react-bootstrap";
import ArticleBox from "../ArticleBox/ArticleBox";

export default function LastArticles() {
  return (
    <div className="LastArticles">
      <SectionHeader
        title={`last Articles`}
        subTitle={`read last 3 articles in website`}
        linkHref={`/blog`}
      />
      <Container fluid>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <ArticleBox />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ArticleBox />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ArticleBox />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

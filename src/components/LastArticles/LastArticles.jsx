import React from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Container, Row, Col } from "react-bootstrap";
import ArticleBox from "../ArticleBox/ArticleBox";
import { useQuery } from "react-query";
import api from "../../Axios/Config";

export default function LastArticles() {
  const { data } = useQuery(["Articles"], () => {
    return api.get("/articles").then((res) => {
      return res.data;
    });
  });

  return (
    <div className="LastArticles">
      <SectionHeader
        title={`last Articles`}
        subTitle={`read last 3 articles in website`}
        linkHref={`/blog`}
      />
      <Container fluid>
        <Row>
          {data?.slice(0, 3).map((article) => {
            return (
              <Col lg={4} md={6} sm={12}>
                <ArticleBox {...article} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

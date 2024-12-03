import React from "react";
import "./LastProducts.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductBox from "../ProductBox/ProductBox";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../Axios/Config";

export default function LastProducts() {
  const { data } = useQuery(["Products"], () => {
    return api.get("/products").then((res) => {
      return res.data;
    });
  });

  return (
    <div>
      <SectionHeader
        title={`tending products`}
        subTitle={`best products you ever seen`}
        linkHref={`products`}
      />
      <Container>
        <Row>
          {data?.map((product) => {
            return (
              <Col key={product.id} lg={4} md={6} sm={12}>
                <ProductBox {...product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

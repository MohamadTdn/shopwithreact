import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductBox from "../../components/ProductBox/ProductBox";
import "./Products.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import api from "../../Axios/Config";

export default function Products() {
  const { data } = useQuery(["Products"], () => {
    return api.get("/products").then((res) => {
      return res.data;
    });
  });

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
          {data?.map((product) => {
            return (
              <Col lg={4} md={6} sm={12}>
                <ProductBox {...product} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

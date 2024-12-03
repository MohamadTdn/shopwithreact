import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductBox from "../../components/ProductBox/ProductBox";
import "./Products.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import api from "../../Axios/Config";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [status, setStatus] = useState("-1");

  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(res.data);
      setOrderedProducts(res.data);
    });
  }, []);

  const filterProducts = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    switch (status) {
      case "newest": {
        setOrderedProducts(products);
        break;
      }
      case "oldest": {
        const oldProducts = products.slice().reverse();
        setOrderedProducts(oldProducts);
        break;
      }
      case "cheap": {
        const cheapProducts = products.filter((product) => {
          return product.price < 500;
        });
        setOrderedProducts(cheapProducts);
        break;
      }
      case "expensive": {
        const expensiveProducts = products.filter((product) => {
          return product.price > 500;
        });
        setOrderedProducts(expensiveProducts);
        break;
      }
      default: {
        setOrderedProducts(products);
      }
    }
  }, [status]);

  return (
    <div className="Products">
      <NavMenu></NavMenu>
      <select onChange={filterProducts} className="filter-box">
        <option value="-1">Choose the filter</option>
        <option value="newest">newst</option>
        <option value="oldest">oldest</option>
        <option value="cheap">cheap</option>
        <option value="expensive">expensive</option>
      </select>
      <Container>
        <Row>
          {orderedProducts.map((product) => {
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

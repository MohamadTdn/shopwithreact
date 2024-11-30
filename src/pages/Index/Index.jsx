import React from "react";
import Header from "../../components/Header/Header";
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LastProducts from "../../components/LastProducts/LastProducts";
import BestProducts from "../../components/BestProducts/BestProducts";
import './Index.css'
import LastArticles from "../../components/LastArticles/LastArticles";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from '../../components/Footer/Footer'

export default function Index() {
  return (
    <div>
      <NavMenu></NavMenu>
      <Header />
      <Container fluid className="mt-4 mb-4">
        <Row>
          <ProductBanner imgSrc={"/images/bagimg.webp"} />
          <ProductBanner imgSrc={"/images/shoe.jfif"} />
          <ProductBanner imgSrc={"/images/watchimg.jfif"} />
          <ProductBanner imgSrc={"/images/airpodimg.webp"} />
        </Row>
      </Container>
      <LastProducts/>
      <BestProducts/>
      <div className="section-com"></div>
      <LastArticles/>
      <Footer></Footer>
    </div>
  );
}

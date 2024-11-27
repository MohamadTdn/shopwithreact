import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import "swiper/css";
import ProductBox from "../ProductBox/ProductBox";

export default function BestProducts() {
  return (
    <div className="BestProducts">
      <SectionHeader
        title={`best products`}
        subTitle={`the list of our best and popular products`}
      />
      <Container fluid>
        <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
          <Row>
            <Col lg={4} md={12} sm={12}>
              <SwiperSlide>
                <ProductBox
                  title={`airpod`}
                  price={200}
                  imgSrc={`images/airpodimg.webp`}
                  slideBox={true}
                />
              </SwiperSlide>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <SwiperSlide>
                <ProductBox
                  title={`airpod`}
                  price={200}
                  imgSrc={`images/airpodimg.webp`}
                  slideBox={true}
                />
              </SwiperSlide>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <SwiperSlide>
                <ProductBox
                  title={`airpod`}
                  price={200}
                  imgSrc={`images/airpodimg.webp`}
                  slideBox={true}
                />
              </SwiperSlide>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <SwiperSlide>
                <ProductBox
                  title={`airpod`}
                  price={200}
                  imgSrc={`images/airpodimg.webp`}
                  slideBox={true}
                />
              </SwiperSlide>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <SwiperSlide>
                <ProductBox
                  title={`airpod`}
                  price={200}
                  imgSrc={`images/airpodimg.webp`}
                  slideBox={true}
                />
              </SwiperSlide>
            </Col>
          </Row>
        </Swiper>
      </Container>
    </div>
  );
}

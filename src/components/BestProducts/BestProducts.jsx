import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import "swiper/css";
import ProductBox from "../ProductBox/ProductBox";
import api from "../../Axios/Config";
import { useQuery } from "react-query";

export default function BestProducts() {
  const { data } = useQuery(["Products"], () => {
    return api.get("/products").then((res) => {
      return res.data;
    });
  });

  return (
    <div className="BestProducts">
      <SectionHeader
        title={`best products`}
        subTitle={`the list of our best and popular products`}
      />
      <Container fluid>
        <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
          <Row>
            {data
              ?.filter((product) => {
                return product.score > 3;
              })
              .map((filteredProduct) => {
                return (
                  <Col lg={4} md={12} sm={12}>
                    <SwiperSlide>
                      <ProductBox {...filteredProduct} slideBox={true} />
                    </SwiperSlide>
                  </Col>
                );
              })}
          </Row>
        </Swiper>
      </Container>
    </div>
  );
}

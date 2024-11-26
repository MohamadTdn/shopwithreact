import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductBox from "../ProductBox/ProductBox";

export default function BestProducts() {
  return (
    <div className="BestProducts">
      <SectionHeader
        title={`best products`}
        subTitle={`the list of our best and popular products`}
      />
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        <SwiperSlide>
          <ProductBox
            title={`airpod`}
            price={200}
            imgSrc={`images/airpodimg.webp`}
            slideBox={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox
            title={`airpod`}
            price={200}
            imgSrc={`images/airpodimg.webp`}
            slideBox={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox
            title={`airpod`}
            price={200}
            imgSrc={`images/airpodimg.webp`}
            slideBox={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox
            title={`airpod`}
            price={200}
            imgSrc={`images/airpodimg.webp`}
            slideBox={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox
            title={`airpod`}
            price={200}
            imgSrc={`images/airpodimg.webp`}
            slideBox={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox
            title={`airpod`}
            price={200}
            imgSrc={`images/airpodimg.webp`}
            slideBox={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox
            title={`airpod`}
            price={200}
            imgSrc={`images/airpodimg.webp`}
            slideBox={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

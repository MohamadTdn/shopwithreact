import React from "react";
import "./ProductInfo.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from '../../components/Footer/Footer'

export default function ProductInfo() {
  return (
    <div className="ProductInfo">
      <NavMenu></NavMenu>
      <Container>
        <Row>
          <Col lg={7}>
            <img
              className="product-image"
              src="/images/airpodimg.webp"
              alt=""
            />
          </Col>
          <Col lg={5}>
            <h1 className="product-title">airpods</h1>
            <h4>Colors</h4>
            <div className="color-cont">
              <div
                className="product-color"
                style={{
                  backgroundColor: "red",
                  width: "30px",
                  height: "30px",
                }}
              ></div>
              <div
                className="product-color"
                style={{
                  backgroundColor: "red",
                  width: "30px",
                  height: "30px",
                }}
              ></div>
            </div>
            <h5 className="product-price">200 $</h5>
            <Button variant="primary">Add To Bag</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h1>product infos</h1>
            <p className="product-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              veniam nobis! Sint voluptatem nisi nobis vitae aliquam inventore
              ducimus animi placeat, sequi, dolore minus suscipit. Sit dolorum
              voluptas suscipit natus.
            </p>
            <br />
            <p className="product-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              veniam nobis! Sint voluptatem nisi nobis vitae aliquam inventore
              ducimus animi placeat, sequi, dolore minus suscipit. Sit dolorum
              voluptas suscipit natus.
            </p>
            <br />
            <p className="product-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              veniam nobis! Sint voluptatem nisi nobis vitae aliquam inventore
              ducimus animi placeat, sequi, dolore minus suscipit. Sit dolorum
              voluptas suscipit natus.
            </p>
            <h1>Comments</h1>
            <div className="comments">
              <div className="comment">
                <div className="comment-data">
                  <img
                    className="comment-user-profile"
                    src="/images/logo.png"
                    alt=""
                  />
                  <div className="comment-user-data">
                    <h5 className="comment-user-name">Mohamad tdn</h5>
                    <h5 className="comment-user-role">User</h5>
                  </div>
                </div>
                <div className="comment-body-cont">
                  <p className="comment-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat saepe illo repudiandae deserunt quos ipsum quas
                    quaerat libero aliquid adipisci consequatur corporis nulla
                    laudantium laborum id, sapiente inventore est distinctio.
                  </p>
                </div>
                <div className="comment-answer">
                  <div className="comment-data">
                    <img
                      className="comment-user-profile"
                      src="/images/logo.png"
                      alt=""
                    />
                    <div className="comment-user-data">
                      <h5 className="comment-user-name">Mohamad tdn</h5>
                      <h5 className="comment-user-role">User</h5>
                    </div>
                  </div>
                  <div className="comment-body-cont">
                    <p className="comment-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat saepe illo repudiandae deserunt quos ipsum quas
                      quaerat libero aliquid adipisci consequatur corporis nulla
                      laudantium laborum id, sapiente inventore est distinctio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment">
                <div className="comment-data">
                  <img
                    className="comment-user-profile"
                    src="/images/logo.png"
                    alt=""
                  />
                  <div className="comment-user-data">
                    <h5 className="comment-user-name">Mohamad tdn</h5>
                    <h5 className="comment-user-role">User</h5>
                  </div>
                </div>
                <div className="comment-body-cont">
                  <p className="comment-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat saepe illo repudiandae deserunt quos ipsum quas
                    quaerat libero aliquid adipisci consequatur corporis nulla
                    laudantium laborum id, sapiente inventore est distinctio.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

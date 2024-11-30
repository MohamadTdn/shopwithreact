import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import './ArticleInfo.css'
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from '../../components/Footer/Footer'

export default function ArticleInfo() {
  return (
    <div className="ArticleInfo">
      <NavMenu/>
      <Container>
        <Row>
          <Col lg={9}>
            <h1 className="article-title">Article Title</h1>
            <div className="article-data">
              <h5 className="article-author">author : Tdn</h5>
              <h5 className="article-date">Publish Date : 2024</h5>
            </div>
            <img
              className="article-image"
              src="/images/airpodimg.webp"
              alt=""
            />
            <p className="article-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate illum, quam error numquam nemo quaerat accusamus qui!
              Ullam alias officia beatae doloremque! Eum eligendi dolorum et
              neque nihil provident ducimus?
            </p>
            <br />
            <p className="article-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate illum, quam error numquam nemo quaerat accusamus qui!
              Ullam alias officia beatae doloremque! Eum eligendi dolorum et
              neque nihil provident ducimus?
            </p>
            <br />
            <p className="article-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate illum, quam error numquam nemo quaerat accusamus qui!
              Ullam alias officia beatae doloremque! Eum eligendi dolorum et
              neque nihil provident ducimus?
            </p>
            <br />
            <p className="article-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate illum, quam error numquam nemo quaerat accusamus qui!
              Ullam alias officia beatae doloremque! Eum eligendi dolorum et
              neque nihil provident ducimus?
            </p>
            <br />
            <h3>Its A title</h3>
            <img className="article-image" src="/images/watchimg.jfif" alt="" />
          </Col>
          <Col lg={3}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

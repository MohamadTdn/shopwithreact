import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ArticleBox from '../../components/ArticleBox/ArticleBox'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from '../../components/Footer/Footer'

export default function Blog() {
  return (
    <div className='Blog'>
      <NavMenu></NavMenu>
      <Container fluid>
        <Row>
          <Col lg={9} md={12} sm={12}>
            <Container>
              <Row>
              <Col lg={4} md={12} sm={12}>
                <ArticleBox/>
              </Col>
              <Col lg={4} md={12} sm={12}>
                <ArticleBox/>
              </Col>
              <Col lg={4} md={12} sm={12}>
                <ArticleBox/>
              </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <Sidebar/>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

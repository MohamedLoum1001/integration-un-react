import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Assets/OrangeGM.png";
const Banner = () => {
  return (
    <section id="banner" className="banner ">
      <Container>
        <Row className="align-items-center">
          <h1 className="text-center">WE ARE CREATIVE</h1>
            <Col>
              <div className="image mt-2">
                <img src={headerImg} alt="Header Img" className="img-fluid"/>
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner

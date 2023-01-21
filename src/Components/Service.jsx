import React from 'react'
// import { Container, Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image from "../Assets/oeuf.png";
import image1 from "../Assets/verre.png";
import image2 from "../Assets/pomme.png";
import image3 from "../Assets/orangePM.png";


const Service = () => {
  
  return (
    <section id="service" className="service">
      <Container fluid className="p-0">
          <Row className='g-0'>
            {/* COLONNE 1 */}
            <Col xs={12} md={6} xl={6}>
              <div className="TEXTE">
                <h1>Transform your</h1>
                <h1 className='h1'>brand</h1>
                <p className='mt-1'>We are a full-service creative angency specializing in <br />
                helping grow fast. Engage your clients trought <br />
                comperence usuals that do most of the marketng for you <br /></p>
                <a href="#">LEARN MORE</a>
              </div>
            </Col>
            {/* COLONNE 2 */}
            <Col xs={12} md={6} xl={6}>
              <div className="IMAGE">
                <img src={image} alt="image" className='mt-3 mb-4 img-fluid'/>
              </div>
            </Col>
          </Row>
          {/* COLONNE 3 */}
          <Row className='g-0'> 
            <Col xs={12} md={6} xl={6}>
              <div className="IMAGE1">
                <img src={image1} alt="image1" className='mt-3 mb-4 img-fluid'/>
              </div>
            </Col>
            {/* COLONNE 4 */}
            <Col xs={12} md={6} xl={6}>
              <div className="TEXTE">
                <h1 className='text-left'>Stand out to the right</h1>
                <h1 className='h1'>audience</h1>
                <p className='text-left mt-1'>Usin a colloborative formula of designers, researchers, <br />
                photographers, videographers, and copywriters, we'll  <br />
                build and extend your brand in digital palces<br /></p>
                <a href="#">LEARN MORE</a>
              </div>
            </Col> 
          </Row>
          {/* COLONNE 5 */}
          <Row className='g-0'>
            <Col xs={12} md={6} xl={6}>
              <div className="IMAGE2">
                <img src={image2} alt="image1" className='mt-3 mb-4 img-fluid'/>
                <h2>Graphic Design</h2>
                <p className='mb-5'>Great design you memorable. We deliver<br />
                atwork that underscores you brand messages<br />
                and captures potentials clients attention<br /></p>
              </div>
            </Col>
          {/* COLONNE */}
            <Col xs={12} md={6} xl={6}>
              <div className="IMAGE3">
                <img src={image3} alt="image1" className='mt-3 mb-4 img-fluid'/>
                <h2>Photography</h2>
                <p className='mb-5'>Increase your credibility by getting the most <br />
                stunning, high-quality photos that improve your<br />
                buisness image.<br /></p>
              </div>
            </Col>
          </Row> 
      </Container>
  </section>
  )
}

export default Service

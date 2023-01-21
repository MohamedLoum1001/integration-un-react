import React from 'react';

import { Container, Row, Col } from "react-bootstrap";
import bouteille from "../Assets/bouteille.png";
import orangeFruit from "../Assets/orangeFruit.png";
import rico from "../Assets/rico.png";
import sucre from "../Assets/sucre.png";

const Gallerie = () => {
  return (
    <section id='galerie' className='gallerie '>
       <Container fluid className='p-0'>
        
         <Row className='g-0'>
            
            <Col xs={12} md={6} xl={3}>
                <div className="gallerie-img">
                   <img src={ bouteille } alt=""  className='img-fluid'/>
                </div>
           
            </Col>
                <Col xs={12} md={6} xl={3}>
                <div className="gallerie-img1">
                   <img src={ orangeFruit } alt=""  className='img-fluid'/>
                </div>
                </Col>
          
                <Col xs={12} md={6} xl={3}>
                <div className="gallerie-img2">
                   <img src={ rico } alt=""  className='img-fluid'/>
                </div>
                </Col>
                <Col xs={12} md={6} xl={3}>
                <div className="gallerie-img3">
                   <img src={ sucre } alt=""  className='img-fluid'/>
                </div>
            </Col>
        
         </Row>
         
       </Container>
    </section>
  )
}

export default Gallerie

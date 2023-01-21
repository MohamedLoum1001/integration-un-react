import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter  } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <section id='footer' className='footer'>
        <Container>
            <Row>
                <div className="footer-container">
                    <Col xs={12} md={4}>
                        <div className="title text-center">
                            <h1 className='text-center'>sunnyside</h1>
                        </div>
                    </Col>

                    <Col xs={6} md={4}>
                        <div className="menu text-center">
                            <p>About</p>
                            <p>Service</p>
                            <p>Project</p>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div className="icons text-center">
                            <div className="icon1">
                                <h3><FaFacebookSquare /></h3>
                            </div>

                            <div className="icon2">
                                <h3><FaInstagram /></h3> 
                            </div>

                            <div className="icon3">
                                <h3><FaTwitter /></h3>
                            </div>

                            <div className="icon4">
                                <h3><FaPinterestSquare /></h3>
                            </div>


                        </div>
                    </Col>
                </div>
            </Row>
        </Container>

    </section>
  )
}

export default Footer

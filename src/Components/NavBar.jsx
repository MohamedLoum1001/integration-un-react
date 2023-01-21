import { useState, useEffect } from "react";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {
  const [activeLink] = useState('about');
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <h1>sunnyside</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}>About</Nav.Link>
            <Nav.Link href="#service" className={activeLink === 'service' ? 'active navbar-link' : 'navbar-link'}>Service</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
                <button className="vvd"><span>Contact</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  )
}

export default NavBar

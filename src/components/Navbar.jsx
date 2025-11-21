import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark">
          <span className="text-primary">SKE</span> Textiles
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

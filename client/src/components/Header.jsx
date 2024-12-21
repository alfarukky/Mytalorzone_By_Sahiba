import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../bootstrap.min.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      {/* Top announcement bar */}
      <div className="bg-dark text-white text-center py-1">
        Welcome to our website! We've already processed
        <strong className="badge bg-light text-dark mx-1">20+</strong>
        orders and counting.
      </div>

      {/* Navbar */}
      <Navbar
        bg="primary"
        expand="lg"
        className="navbar-light border-bottom shadow-sm"
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center me-auto text-white"
          >
            <img
              src="https://via.placeholder.com/50" // Replace with your logo URL
              alt="Logo"
              className="me-2"
            />
            HANDMADELOVE By Tanya
          </Navbar.Brand>
          {/* Brand */}

          {/* Toggle Button */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-white"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart" className="text-white">
                <i className="fas fa-shopping-cart me-1"></i> Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-white">
                <i className="fas fa-user me-1"></i> Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

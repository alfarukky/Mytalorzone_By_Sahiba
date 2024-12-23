import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Badge, Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/bootstrap.min.css';
import '../assets/index.css';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <header>
      {/* Top announcement bar */}
      <div className="bg-dark text-white text-center py-1">
        Experience excellence! Trusted by customers worldwide for quality and
        reliability.
      </div>

      {/* Navbar */}
      <Navbar
        bg="primary"
        expand="lg"
        className="sticky-top navbar-light border-bottom shadow-sm mb-4"
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className="shadow-text d-flex align-items-center me-auto text-white fs-3"
          >
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
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <Badge pill bg="success" style={{ marginLeft: '5px' }}>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-white">
                <FaUser /> Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

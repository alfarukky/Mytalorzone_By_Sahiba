import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
const Product = ({ product }) => {
  return (
    <Card className="shadow-sm mb-4" style={{ width: '18rem' }}>
      {/* Product Image */}
      <Link to={`/product/${product.productId}`}>
        <Card.Img
          variant="top"
          src={product.img}
          alt={product.name}
          style={{ height: '300px', objectFit: 'cover' }}
        />
      </Link>

      {/* Card Body */}
      <Card.Body>
        <Card.Title
          className="text-uppercase fw-bold"
          style={{ fontSize: '16px' }}
        >
          <Link
            to={`/product/${product._id}`}
            className="text-decoration-none text-dark"
          >
            {product.name}
          </Link>
        </Card.Title>
        <Card.Text className="text-muted">₹ {product.price}</Card.Text>
        <Card.Text>
          <Rating value={product.rating} color={'#ffae2d'} />
        </Card.Text>
        <Button variant="outline-primary" className="w-100">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;

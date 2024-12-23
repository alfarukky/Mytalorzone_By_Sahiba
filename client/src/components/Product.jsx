import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { formatPrice } from '../utils/priceUtils';
import '../assets/index.css';
const Product = ({ product }) => {
  return (
    <Card className="product-card shadow-sm m-3">
      {/* Product Image */}
      <Link to={`/product/${product._id}`}>
        <Card.Img
          variant="top"
          src={product.img}
          alt={product.name}
          className="product-card-img"
        />
      </Link>

      {/* Card Body */}
      <Card.Body>
        <Card.Title className="text-uppercase fw-bold product-card-title">
          <Link
            to={`/product/${product._id}`}
            className="text-decoration-none text-dark"
          >
            {product.name}
          </Link>
        </Card.Title>
        <Card.Text className="text-muted">
          {formatPrice(product.price)}
        </Card.Text>
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

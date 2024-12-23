import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { formatPrice } from '../utils/priceUtils';
import { addToCart } from '../slices/cartSlice';

const ProductScreen = () => {
  const { id: productId } = useParams(); // Fetching product ID from the URL

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product.product, qty }));
    navigate('/cart');
  };
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId); // Fetch product details

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>

          <Row>
            {/* Product image section */}
            <Col md={6}>
              <Image
                src={product.product.img}
                alt={product.product.name}
                fluid
              />
            </Col>

            {/* Product details section */}
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating value={product.product.rating} color={'#ffae2d'} />
                  <span className="ms-2">{product.product.rating} stars</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: {formatPrice(product.product.price)}
                </ListGroup.Item>
                <ListGroup.Item>
                  Category: {product.product.category}
                </ListGroup.Item>

                <ListGroup.Item>
                  Sold: {product.product.soldStockValue} items
                </ListGroup.Item>
              </ListGroup>
            </Col>

            {/* Purchase info section */}
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{formatPrice(product.product.price)}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.product.inStockValue > 0
                          ? 'In Stock'
                          : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.product.inStockValue > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[
                              ...Array(product.product.inStockValue).keys(),
                            ].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      className="btn-block"
                      disabled={product.product.inStockValue === 0}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;

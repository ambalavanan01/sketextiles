import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name_asc');

  useEffect(() => {
    AOS.init();
    // Fetch products data
    fetch('/assets/products/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    let result = [...products];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(product =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    switch (sortOption) {
      case 'name_asc':
        result.sort((a, b) => a.product_name.localeCompare(b.product_name));
        break;
      case 'name_desc':
        result.sort((a, b) => b.product_name.localeCompare(a.product_name));
        break;
      case 'size_asc':
        result.sort((a, b) => a.size.localeCompare(b.size));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [products, searchTerm, sortOption]);

  const getImagePath = (imagePath) => {
    // Remove 'uploads/' prefix if present and prepend correct path
    // The images are located in public/assets/products/
    const filename = imagePath.replace('uploads/', '');
    return `/assets/products/${filename}`;
  };

  return (
    <section className="products-section py-5" id="products">
      <Container>
        <div data-aos="fade-down" className="text-center mb-5">
          <h1 className="section-title">Our Exclusive Collection</h1>
          <p className="text-muted lead">Discover our wide range of premium quality textiles and readymades.</p>
        </div>

        {/* Search and Sort Controls */}
        <Row className="mb-5 justify-content-center">
          <Col md={6} className="mb-3 mb-md-0">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="shadow-sm"
            />
          </Col>
          <Col md={4}>
            <Form.Select
              size="lg"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="shadow-sm"
            >
              <option value="name_asc">Sort by Name (A-Z)</option>
              <option value="name_desc">Sort by Name (Z-A)</option>
              <option value="size_asc">Sort by Size</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Products Grid */}
        <Row id="product-list">
          {filteredProducts.length === 0 ? (
            <Col xs={12} className="text-center" data-aos="fade-up" data-aos-delay="200">
              <p className="text-muted fs-4 mt-5">No products are available at the moment.</p>
            </Col>
          ) : (
            filteredProducts.map((product, index) => (
              <Col lg={4} md={6} className="mb-4 product-item" key={product.id || index} data-aos="zoom-in" data-aos-delay={(index % 3) * 100}>
                <Card className="product-card h-100 border-0 shadow-sm">
                  <div className="product-image-container">
                    <img src={getImagePath(product.image)} alt={product.product_name} />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="product-name">{product.product_name}</Card.Title>
                    <Card.Subtitle className="mb-2 size">Size:</Card.Subtitle>
                    <Card.Text className="product-price text-primary fw-bold mt-auto">
                      {product.size}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
          <div className="text-center mt-4" data-aos="fade-up">
            <Button variant="outline-primary" as={Link} to="/catalogue">View All Product Catalogue</Button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Products;

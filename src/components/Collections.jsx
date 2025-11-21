import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
    { id: 1, title: "Boys Formal Shirts", image: "/assets/collection/p1.png" },
    { id: 2, title: "Formal Pant", image: "/assets/collection/p2.png" },
    { id: 3, title: "Fancy T-Shirt", image: "/assets/collection/p3.png" },
    { id: 4, title: "Cargo Pant", image: "/assets/collection/p4.png" },
];

const Collections = () => {
    return (
        <section id="collections" className="py-5 bg-light">
            <Container>
                <div className="text-center" data-aos="fade-up">
                    <h2 className="section-title">Our Collections</h2>
                    <p className="lead text-muted mb-5">A glimpse into our curated selection of featured products.</p>
                </div>

                <Row>
                    {products.map((product, index) => (
                        <Col md={6} lg={3} className="mb-4" key={product.id} data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
                            <Card className="product-card h-100 border-0 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    alt={product.title}
                                    onError={(e) => { e.target.src = `https://placehold.co/300x400?text=${product.title.replace(/\s+/g, '+')}`; }}
                                />
                                <Card.Body className="text-center">
                                    <Card.Title>{product.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-4" data-aos="fade-up">
                    <Button variant="outline-primary" href="/products">View All Products</Button>
                </div>
            </Container>
        </section>
    );
};

export default Collections;

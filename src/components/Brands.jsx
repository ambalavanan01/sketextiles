import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const brands = [
    "Poomex", "Udhayam", "Ramraj", "Prithvi", "Prisma", "Otto", "Jackey", "Techno Sports", "Ariser"
];

const Brands = () => {
    return (
        <section id="brands" className="py-5 bg-light">
            <Container className="text-center" data-aos="fade-up">
                <h2 className="mb-4 fw-bold">Our Brands</h2>
                <p className="text-muted mb-5">We proudly deal with top-quality textile and readymade brands.</p>

                <Row className="justify-content-center g-4">
                    {brands.map((brand, index) => (
                        <Col xs={6} md={3} lg={2} key={index}>
                            <div className="brand-logo p-3 bg-white rounded-4 shadow-sm">
                                <img
                                    src={`/assets/brands/${brand.toLowerCase().replace(/\s+/g, '-')}.png`}
                                    className="img-fluid"
                                    alt={brand}
                                    onError={(e) => { e.target.src = `https://placehold.co/150x80?text=${brand}`; }}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Brands;

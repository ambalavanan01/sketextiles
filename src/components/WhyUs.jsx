import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsGem, BsPaletteFill, BsTruck } from 'react-icons/bs';

const WhyUs = () => {
    return (
        <section id="why-us" className="py-5">
            <Container>
                <Row className="text-center">
                    <Col md={4} data-aos="fade-up" data-aos-delay="100">
                        <div className="feature-icon mb-3">
                            <BsGem />
                        </div>
                        <h4>Quality Fabrics</h4>
                        <p className="text-muted">We source only the finest materials, ensuring durability and comfort in every thread.</p>
                    </Col>
                    <Col md={4} data-aos="fade-up" data-aos-delay="200">
                        <div className="feature-icon mb-3">
                            <BsPaletteFill />
                        </div>
                        <h4>Unique Designs</h4>
                        <p className="text-muted">Our in-house designers create exclusive patterns you won't find anywhere else.</p>
                    </Col>
                    <Col md={4} data-aos="fade-up" data-aos-delay="300">
                        <div className="feature-icon mb-3">
                            <BsTruck />
                        </div>
                        <h4>In-Store Shopping</h4>
                        <p className="text-muted">Get your favorite styles collection at our store</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyUs;

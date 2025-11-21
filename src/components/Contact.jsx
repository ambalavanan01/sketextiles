import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill, BsClockFill } from 'react-icons/bs';

const Contact = () => {
    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formspree.io/f/mgvdgkwd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
                setValidated(false);
            } else {
                alert("There was a problem submitting your form");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("There was a problem submitting your form");
        }
    };

    return (
        <section id="contact" className="py-5">
            <Container>
                <div className="text-center" data-aos="fade-up">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="lead text-muted mb-5">We'd love to hear from you. Visit us or send us a message.</p>
                </div>
                <Row className="align-items-center">
                    <Col lg={6} data-aos="fade-right">
                        <h3 className="mb-4">Store Information</h3>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center"><BsGeoAltFill className="text-primary fs-4 me-3" /><span>Thiruvalam, Tamil Nadu - 632515</span></li>
                            <li className="mb-3 d-flex align-items-center"><BsTelephoneFill className="text-primary fs-4 me-3" /><span>(+91) 96292-18964</span></li>
                            <li className="mb-3 d-flex align-items-center"><BsTelephoneFill className="text-primary fs-4 me-3" /><span>(+91) 88077-08964</span></li>
                            <li className="mb-3 d-flex align-items-center"><BsTelephoneFill className="text-primary fs-4 me-3" /><span>(+91) 79045-65456</span></li>
                            <li className="mb-3 d-flex align-items-center"><BsEnvelopeFill className="text-primary fs-4 me-3" /><span>sketextilesreadymades@gmail.com</span></li>
                            <li className="mb-3 d-flex align-items-center"><BsClockFill className="text-primary fs-4 me-3" /><span>Monday - Sunday, 9:00 AM - 9:30 PM</span></li>
                        </ul>
                    </Col>
                    <Col lg={6} data-aos="fade-left">
                        {submitted && (
                            <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                                Message sent successfully! We will get back to you soon.
                            </Alert>
                        )}
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="form-floating mb-3" controlId="name">
                                <Form.Control type="text" name="name" placeholder="Your Name" required />
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="form-floating mb-3" controlId="phonenumber">
                                <Form.Control type="tel" name="phone" placeholder="Phone Number" required />
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control.Feedback type="invalid">Please provide your phone number.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="form-floating mb-3" controlId="email">
                                <Form.Control type="email" name="email" placeholder="Your Email" required />
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="form-floating mb-3" controlId="message">
                                <Form.Control as="textarea" name="message" placeholder="Your Message" style={{ height: '120px' }} required />
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit" variant="primary" size="lg" className="w-100">Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;

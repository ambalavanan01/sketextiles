import React from 'react';
import { Container } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Newsletter = () => {
    return (
        <>
            {/* WhatsApp Community Section */}
            <section id="whatsapp" className="py-5 text-center text-white">
                <Container data-aos="fade-up">
                    <h2 className="fw-bold text-white mb-3">Join Our WhatsApp Community</h2>
                    <p className="text-light mb-4">
                        Get exclusive offers, new arrivals, and fashion updates directly on WhatsApp!
                    </p>

                    <a href="https://chat.whatsapp.com/DPYoCvKMvw8GZZA6vT0tOE"
                        target="_blank"
                        rel="noreferrer"
                        className="whatsapp-button">
                        <FaWhatsapp size={24} />
                        <span>Join Now</span>
                    </a>
                </Container>
            </section>

            {/* Instagram Section */}
            <section id="instagram" className="py-5 text-center">
                <Container data-aos="fade-up">
                    <h2 className="fw-bold text-white mb-3">Follow Us on Instagram</h2>
                    <p className="text-light mb-4">Stay connected with us for new arrivals, offers, and style inspiration!</p>

                    <a href="https://www.instagram.com/ske__thiruvallam___"
                        target="_blank"
                        rel="noreferrer"
                        className="insta-button">
                        <FaInstagram size={24} />
                        <span>@ske__thiruvallam___</span>
                    </a>
                </Container>
            </section>
        </>
    );
};

export default Newsletter;

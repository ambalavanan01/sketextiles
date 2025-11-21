import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="mb-3">SKE Textiles</h5>
                        <p className="text-white-50">
                            Your one-stop destination for premium textiles and readymades. Quality and elegance in every thread.
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/" className="text-white-50 text-decoration-none">Home</a></li>
                            <li className="mb-2"><a href="/products" className="text-white-50 text-decoration-none">Products</a></li>
                            <li className="mb-2"><a href="/#contact" className="text-white-50 text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Contact Us</h5>
                        <ul className="list-unstyled text-white-50">
                            <li className="mb-2">123 Textile Street, Erode</li>
                            <li className="mb-2">+91 98765 43210</li>
                            <li className="mb-2">info@sketextiles.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Follow Us</h5>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-white fs-4"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-secondary" />
                <div className="text-center text-white-50">
                    <small>&copy; {new Date().getFullYear()} SKE Textiles & Readymades. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

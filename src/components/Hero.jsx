import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const heroImages = [
    '/assets/hero1.jpg',
    '/assets/hero2.jpg',
    '/assets/hero3.jpg',
    '/assets/hero4.jpg',
    '/assets/hero5.jpg',
    '/assets/hero6.jpg',
    '/assets/hero7.jpg',
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="hero-section text-center d-flex align-items-center justify-content-center position-relative overflow-hidden">
            {/* Background Image Layers */}
            {heroImages.map((img, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${img}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        zIndex: -1
                    }}
                />
            ))}

            <div className="container position-relative" data-aos="fade-up" style={{ zIndex: 1 }}>
                <h1 className="display-2 fw-bold text-white mb-2" style={{ letterSpacing: '-2px' }}>SKE TEXTILES</h1>
                <h2 className="h1 fw-light text-white mb-4">& READYMADES</h2>

                {/* Tamil Subtitle */}
                <h3 className="hero-subtitle mb-4">(SKE துணிக்கடை)</h3>

                <p className="lead mb-5 text-white-50 mx-auto" style={{ maxWidth: '700px', fontSize: '1.25rem' }}>
                    Discover our exclusive collection of premium textiles and readymade garments that define elegance and comfort.
                </p>

                <Link to="/products" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg" style={{ fontSize: '1.1rem' }}>
                    Explore Our Collection
                </Link>
            </div>
        </header>
    );
};

export default Hero;

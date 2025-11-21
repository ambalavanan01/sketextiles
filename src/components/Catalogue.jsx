import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button, Row, Col } from 'react-bootstrap';

const Catalogue = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/assets/excel.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    // Filter out null or non-object items to prevent errors
                    const validData = data.filter(item => item && typeof item === 'object');

                    setProducts(validData);
                    setFilteredProducts(validData);

                    // Extract unique categories safely
                    const uniqueCategories = [...new Set(validData.map(item => item.category).filter(Boolean))].sort();
                    setCategories(uniqueCategories);
                } else {
                    throw new Error('Invalid data format');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading catalogue:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let result = products;

        // Filter by Category
        if (selectedCategory !== 'all') {
            result = result.filter(p => p.category && p.category.toLowerCase() === selectedCategory.toLowerCase());
        }

        // Filter by Search Query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p => {
                if (!p) return false;
                return Object.values(p).some(val =>
                    String(val || '').toLowerCase().includes(query)
                );
            });
        }

        setFilteredProducts(result);
    }, [searchQuery, selectedCategory, products]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    if (loading) return <div className="text-center py-5">Loading Catalogue...</div>;
    if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;

    // Get headers from the first product if available
    const headers = products.length > 0 ? Object.keys(products[0]) : [];

    return (
        <div className="catalogue-page py-5" style={{ backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
            <Container>
                <header className="text-center mb-5" style={{ background: 'linear-gradient(90deg, #5a8f7b, #4b7c6a)', color: 'white', padding: '2rem', borderRadius: '8px' }}>
                    <h1 className="display-4 fw-bold">SKE Textiles Catalogue</h1>
                </header>

                <div className="filter-bar mb-4 p-3 bg-white rounded shadow-sm">
                    <Row className="g-3 align-items-center justify-content-center">
                        <Col md={6}>
                            <Form.Control
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="all">All Categories</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                </div>

                <div className="table-wrapper bg-white rounded shadow-sm overflow-auto">
                    <Table hover responsive className="mb-0">
                        <thead style={{ backgroundColor: '#e9f2ef' }}>
                            <tr>
                                {headers.map((key) => (
                                    <th key={key} className="text-nowrap py-3 px-4" style={{ color: '#4b7c6a' }}>
                                        {key.replace(/_/g, ' ').toUpperCase()}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.length === 0 ? (
                                <tr>
                                    <td colSpan={headers.length} className="text-center py-4 text-muted">
                                        No products found.
                                    </td>
                                </tr>
                            ) : (
                                filteredProducts.map((product, index) => (
                                    <tr key={index}>
                                        {headers.map((key) => (
                                            <td key={key} className="py-3 px-4">
                                                {product[key]}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>

                <footer className="text-center mt-5 text-muted">
                    © {new Date().getFullYear()} SKE Textiles — Product Catalogue
                </footer>
            </Container>
        </div>
    );
};

export default Catalogue;

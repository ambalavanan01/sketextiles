import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Products from './components/Products';
import Catalogue from './components/Catalogue';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

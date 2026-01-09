import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import FeaturesPage from './pages/FeaturesPage.tsx';
import PricingPage from './pages/PricingPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-surface-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
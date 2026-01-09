
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-surface-border bg-surface-dark/80 backdrop-blur-md px-6 md:px-12 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 text-brand-500">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-black tracking-tight uppercase">RYZE AI</h2>
        </Link>

        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-brand-500' : 'text-surface-muted hover:text-brand-500'}`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`text-sm font-medium transition-colors ${isActive('/features') ? 'text-brand-500' : 'text-surface-muted hover:text-brand-500'}`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`text-sm font-medium transition-colors ${isActive('/pricing') ? 'text-brand-500' : 'text-surface-muted hover:text-brand-500'}`}
          >
            Pricing
          </Link>
          <a href="#" className="text-surface-muted hover:text-brand-500 text-sm font-medium transition-colors">Integrations</a>
        </nav>

        <div className="flex gap-4 items-center">
          <button className="hidden sm:block text-white text-sm font-bold hover:text-brand-500 transition-colors">
            Login
          </button>
          <button className="bg-brand-500 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

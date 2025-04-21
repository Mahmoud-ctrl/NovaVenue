
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' 
          : 'bg-transparent py-4 text-white'
      }`}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-bold">
          <span className="text-venue-gold">Nova</span> Venue
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-venue-gold transition-colors">Home</Link>
          <Link to="/gallery" className="hover:text-venue-gold transition-colors">Gallery</Link>
          <Link to="/packages" className="hover:text-venue-gold transition-colors">Packages</Link>
          <Link to="/about" className="hover:text-venue-gold transition-colors">About</Link>
          <Link to="/contact">
            <Button variant="outline" className="border-venue-gold text-venue-gold hover:bg-venue-gold hover:text-white">
              Book Now
            </Button>
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-venue-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          </div>

          {/* Mobile Menu Drawer */}
          <div className={`md:hidden fixed top-0 left-0 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="sticky top-0 bg-white flex justify-end p-4 border-b">
              <button onClick={() => setMobileMenuOpen(false)} className="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="px-4 py-2 flex flex-col space-y-4">
              <Link to="/" className="py-2 text-black hover:text-venue-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/gallery" className="py-2 text-black hover:text-venue-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
              <Link to="/packages" className="py-2 text-black hover:text-venue-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Packages</Link>
              <Link to="/about" className="py-2 text-black hover:text-venue-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-venue-gold text-venue-gold hover:bg-venue-gold hover:text-white">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          {mobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          )}
    </nav>
  );
};

export default Navbar;


import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2378&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Create Unforgettable Moments
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Our elegant nova venue is the perfect backdrop for weddings, corporate events, and celebrations of all kinds
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Link to="/contact">
            <Button className="bg-venue-gold hover:bg-venue-gold/90 text-white px-8 py-6">
              Book Your Event Today
            </Button>
          </Link>
          <Link to="/gallery">
            <Button variant="outline" className="border-white text-black hover:bg-white/20 px-8 py-6">
              View Gallery
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;

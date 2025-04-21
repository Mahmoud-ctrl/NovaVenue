
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VenueHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: 'Grand Ballroom',
      description: 'Our magnificent ballroom can accommodate up to 300 guests with elegant chandeliers and a stunning dance floor.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
    },
    {
      id: 2,
      title: 'Garden Terrace',
      description: 'A beautiful outdoor space perfect for ceremonies and cocktail hours with breathtaking views of the surrounding landscape.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
    },
    {
      id: 3,
      title: 'Intimate Lounge',
      description: 'A sophisticated space ideal for smaller gatherings, corporate events, or as a VIP area for larger celebrations.',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Spectacular Spaces for Your Special Moments
          </h2>
          <p className="text-venue-muted max-w-3xl mx-auto">
            Our venue offers versatile spaces that can be customized for any event, from intimate gatherings to grand celebrations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map((highlight) => (
            <div 
              key={highlight.id} 
              className="group bg-venue-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">{highlight.title}</h3>
                <p className="text-venue-muted mb-4">{highlight.description}</p>
                <Link 
                  to="/gallery" 
                  className="inline-flex items-center text-venue-gold hover:underline"
                >
                  View Details <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/packages" className="inline-block bg-venue-charcoal text-white px-8 py-3 rounded hover:bg-venue-dark transition duration-300">
            Explore Our Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VenueHighlights;

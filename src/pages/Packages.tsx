
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: "wedding",
      title: "Wedding Package",
      priceFrom: 5000,
      description: "Create your perfect wedding day with our comprehensive package designed to make your special day unforgettable.",
      features: [
        "Access to the Grand Ballroom for reception (up to 300 guests)",
        "Garden Terrace for ceremony (weather permitting)",
        "Bridal suite for preparation",
        "Tables, chairs, linens, and basic decor setup",
        "Sound system with microphone",
        "Dedicated event coordinator",
        "Cleanup and breakdown service",
        "Free parking for all guests"
      ],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
    },
    {
      id: "corporate",
      title: "Corporate Event Package",
      priceFrom: 3000,
      description: "Impress clients and colleagues with our professionally styled corporate event package.",
      features: [
        "Choice of Grand Ballroom or Intimate Lounge based on size",
        "Setup for presentations with projector and screen",
        "High-speed Wi-Fi throughout the venue",
        "Podium and sound system",
        "Tables, chairs, and linen setup",
        "Beverage station with coffee, tea, and water",
        "Technical support staff",
        "Free parking"
      ],
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
    },
    {
      id: "celebration",
      title: "Social Celebration Package",
      priceFrom: 2500,
      description: "Perfect for birthdays, anniversaries, and other special occasions with everything you need for a memorable event.",
      features: [
        "Venue space suited to your guest count (up to 150)",
        "Professional sound system",
        "Tables, chairs, and linen setup",
        "Basic decorations (customizable)",
        "Dedicated event host",
        "Access to Garden Terrace for photos",
        "Setup and cleanup service",
        "Free parking"
      ],
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  const additionalServices = [
    {
      title: "Catering Services",
      description: "Partner with our preferred caterers for a customized menu",
      price: "Varies based on selections"
    },
    {
      title: "Bar Services",
      description: "Full bar setups with professional bartenders",
      price: "Starting at $800"
    },
    {
      title: "Decor Packages",
      description: "Enhanced decorations customized to your event theme",
      price: "Starting at $500"
    },
    {
      title: "Photography",
      description: "Professional photography services for your event",
      price: "Starting at $1,200"
    },
    {
      title: "Entertainment",
      description: "DJ, live music, or other entertainment options",
      price: "Starting at $750"
    },
    {
      title: "Extended Hours",
      description: "Additional venue time beyond the standard package",
      price: "$500 per hour"
    }
  ];

  return (
    <>
      <Navbar />
        <main>
          <section className="relative bg-venue-charcoal text-white py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://img.freepik.com/free-photo/beautiful-view-restaurant-with-tables_8353-9878.jpg?t=st=1745221264~exp=1745224864~hmac=04189b5af039c011f34c894fa078a0a0bf0f15852ff3aa1d3ca70505f2f8787a&w=996" 
                alt="Event venue setup" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-venue-charcoal/60"></div>
            </div>
            
            {/* Content */}
            <div className="container-custom text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Event Packages</h1>
              <p className="max-w-2xl mx-auto text-white/80">
                Choose from our carefully crafted packages or let us create a custom solution for your special event
              </p>
            </div>
          </section>
        
        {/* Packages List */}
        <section className="section-padding bg-venue-cream">
          <div className="container-custom">
            <div className="grid gap-16">
              {packages.map((pkg, index) => (
                <div 
                  key={pkg.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  } md:flex`}
                >
                  <div className="md:w-1/2 h-64 md:h-auto">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-2">{pkg.title}</h2>
                    <p className="text-venue-gold font-semibold mb-4">Starting from ${pkg.priceFrom}</p>
                    <p className="text-venue-muted mb-6">{pkg.description}</p>
                    
                    <h3 className="font-semibold mb-3">What's Included:</h3>
                    <ul className="space-y-2 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={18} className="text-venue-gold mt-1 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact">
                      <Button className="bg-venue-charcoal hover:bg-venue-dark text-white">
                        Inquire About This Package
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Additional Services</h2>
              <p className="text-venue-muted max-w-3xl mx-auto">
                Enhance your event with our premium add-on services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-venue-cream p-6 rounded-lg">
                  <h3 className="text-xl font-playfair font-semibold mb-2">{service.title}</h3>
                  <p className="text-venue-muted mb-4">{service.description}</p>
                  <p className="font-medium">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Package CTA */}
        <section className="section-padding bg-venue-charcoal text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Need a Custom Package?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80">
              We understand that every event is unique. Our team is ready to help you create a custom package tailored to your specific needs and vision.
            </p>
            <Link to="/contact">
              <Button className="bg-venue-gold hover:bg-venue-gold/90 text-white px-8 py-6">
                Contact Us for a Custom Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Packages;

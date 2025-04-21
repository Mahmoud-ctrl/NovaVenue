
import Hero from "@/components/Hero";
import VenueHighlights from "@/components/VenueHighlights";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VenueHighlights />
        
        {/* Event Types Section */}
        <section className="section-padding bg-venue-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Unforgettable Events for Every Occasion
              </h2>
              <p className="text-venue-muted max-w-3xl mx-auto">
                Whether you're planning a wedding, corporate event, or celebration, our venue provides the perfect setting.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Wedding */}
              <div className="relative h-80 group overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                  alt="Wedding Event" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-playfair font-semibold mb-2">Weddings</h3>
                  <p className="text-white/80 mb-4">Begin your journey together in our romantic setting</p>
                  <Link to="/packages" className="text-venue-gold hover:underline inline-block">
                    View Packages
                  </Link>
                </div>
              </div>
              
              {/* Corporate */}
              <div className="relative h-80 group overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" 
                  alt="Corporate Event" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-playfair font-semibold mb-2">Corporate Events</h3>
                  <p className="text-white/80 mb-4">Impress your clients and team in our professional space</p>
                  <Link to="/packages" className="text-venue-gold hover:underline inline-block">
                    View Packages
                  </Link>
                </div>
              </div>
              
              {/* Celebrations */}
              <div className="relative h-80 group overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Birthday Celebration" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-playfair font-semibold mb-2">Celebrations</h3>
                  <p className="text-white/80 mb-4">Create lasting memories for birthdays, anniversaries & more</p>
                  <Link to="/packages" className="text-venue-gold hover:underline inline-block">
                    View Packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="relative py-20 bg-venue-charcoal text-white">
          <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}></div>
          <div className="container-custom relative text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ready to Plan Your Perfect Event?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Our expert team is ready to help you create an unforgettable experience tailored to your vision and needs.
            </p>
            <Link to="/contact">
              <Button className="bg-venue-gold hover:bg-venue-gold/90 text-white px-8 py-6 text-lg">
                Book Your Event Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;

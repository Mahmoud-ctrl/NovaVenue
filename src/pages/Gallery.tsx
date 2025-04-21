
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Gallery = () => {
  // Define gallery categories
  const categories = [
    { id: "all", name: "All Spaces" },
    { id: "ballroom", name: "Grand Ballroom" },
    { id: "garden", name: "Garden Terrace" },
    { id: "lounge", name: "Intimate Lounge" },
    { id: "events", name: "Past Events" }
  ];

  // Gallery images
  const galleryItems = [
    {
      id: 1,
      category: ["ballroom"],
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      title: "Grand Ballroom Main View"
    },
    {
      id: 2,
      category: ["ballroom"],
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1762&q=80",
      title: "Ballroom Wedding Setup"
    },
    {
      id: 3,
      category: ["garden"],
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      title: "Garden Terrace Daytime"
    },
    {
      id: 4,
      category: ["garden"],
      image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      title: "Garden Terrace Evening"
    },
    {
      id: 5,
      category: ["lounge"],
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      title: "Intimate Lounge Setup"
    },
    {
      id: 6,
      category: ["lounge"],
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      title: "Lounge Private Dining"
    },
    {
      id: 7,
      category: ["events"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      title: "Wedding Ceremony"
    },
    {
      id: 8,
      category: ["events"],
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      title: "Corporate Conference"
    },
    {
      id: 9,
      category: ["events"],
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      title: "Birthday Celebration"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<null | { id: number; image: string; title: string }>(null);

  // Filter gallery items based on selected category
  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category.includes(activeCategory));

  return (
    <>
    <div >
      <Navbar />
      </div>
      <main>
        <section className="relative bg-venue-charcoal text-white py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://img.freepik.com/premium-photo/grand-ballroom-with-view_931778-67708.jpg?w=996" 
              alt="Venue background" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-venue-charcoal/70"></div>
          </div>
          
          {/* Content */}
          <div className="container-custom text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Venue Gallery</h1>
            <p className="max-w-2xl mx-auto text-white/80">
              Explore our beautiful spaces and get inspired for your next event
            </p>
          </div>
        </section>
        
        {/* Gallery Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    activeCategory === category.id
                      ? 'bg-venue-gold text-white'
                      : 'bg-gray-100 text-venue-charcoal hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="section-padding bg-venue-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer group overflow-hidden rounded-lg shadow-md bg-white"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-playfair font-medium">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Empty state when no results */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-playfair mb-2">No images found</h3>
                <p className="text-venue-muted">Try selecting a different category</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-h-[85vh] w-auto max-w-full"
              />
              <div className="bg-white p-3 mt-2 rounded">
                <h3 className="font-playfair text-lg">{selectedImage.title}</h3>
              </div>
              <button 
                className="absolute top-4 right-4 text-white hover:text-venue-gold transition p-2"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Gallery;

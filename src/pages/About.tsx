
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const About = () => {
  const team = [
    {
      name: "Elizabeth Carter",
      role: "Venue Director",
      bio: "With over 15 years in luxury event planning, Elizabeth ensures every detail of your event exceeds expectations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Michael Reynolds",
      role: "Events Coordinator",
      bio: "Michael specializes in creating unforgettable experiences with a keen eye for detail and creative problem solving.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Sophia Lin",
      role: "Design Specialist",
      bio: "Sophia transforms our spaces with creative designs tailored to make each event unique and memorable.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
    },
    {
      name: "James Wilson",
      role: "Client Relations",
      bio: "James is dedicated to understanding your vision and ensuring a seamless experience from first inquiry to final farewell.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-venue-charcoal text-white py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://img.freepik.com/free-photo/city-night-with-vibrant-lights_23-2149836925.jpg?t=st=1745221442~exp=1745225042~hmac=2abceabfe75613e7a40a5e2d8057f87ade84f8292a8b28f1764d8f124057e4be&w=1380" 
              alt="Nova Venue venue" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-venue-charcoal/60"></div>
          </div>
          
          {/* Content */}
          <div className="container-custom text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">About Nova Venue</h1>
            <p className="max-w-2xl mx-auto text-white/80">
              Creating extraordinary events in our beautiful spaces since 2010
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
                <p className="text-venue-muted mb-4">
                  Founded in 2010, Nova Venue began with a simple vision: to create a versatile, elegant venue where people could celebrate life's most important moments in a space that feels both grand and intimate.
                </p>
                <p className="text-venue-muted mb-4">
                  What started as a beautifully restored historic building has grown into one of the region's premier event venues. Over the years, we've hosted thousands of weddings, corporate gatherings, and social celebrations, each one as unique as our clients.
                </p>
                <p className="text-venue-muted">
                  Today, our commitment remains the same – to provide exceptional service, stunning spaces, and the flexibility to make each event a true reflection of our clients' vision.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Nova Venue Venue" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-venue-gold text-white p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="font-playfair text-lg">Over 5,000 memorable events hosted</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="section-padding bg-venue-cream">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Why Choose Nova Venue</h2>
              <p className="text-venue-muted max-w-3xl mx-auto">
                We strive to make every event exceptional through our commitment to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Flexibility */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-venue-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-venue-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Flexibility</h3>
                <p className="text-venue-muted">
                  We adapt to your vision, not the other way around. Our spaces can be transformed to suit any theme or style.
                </p>
              </div>
              
              {/* Expertise */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-venue-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-venue-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Expertise</h3>
                <p className="text-venue-muted">
                  Our experienced team brings knowledge and creativity to every event, ensuring everything runs smoothly.
                </p>
              </div>
              
              {/* Quality */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-venue-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-venue-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Exceptional Quality</h3>
                <p className="text-venue-muted">
                  From our elegant spaces to our service standards, we maintain the highest quality in everything we do.
                </p>
              </div>
              
              {/* Attention to Detail */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-venue-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-venue-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Attention to Detail</h3>
                <p className="text-venue-muted">
                  We believe the small details make a big difference, and we're committed to getting every aspect just right.
                </p>
              </div>
              
              {/* Personal Touch */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-venue-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-venue-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Personal Touch</h3>
                <p className="text-venue-muted">
                  We treat each client and event with individual care, building relationships that last beyond the event day.
                </p>
              </div>
              
              {/* Trusted Partners */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-venue-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-venue-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Trusted Partners</h3>
                <p className="text-venue-muted">
                  We work with the best vendors and service providers to ensure every aspect of your event is exceptional.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Meet Our Team</h2>
              <p className="text-venue-muted max-w-3xl mx-auto">
                The dedicated professionals who bring your events to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-1">{member.name}</h3>
                  <p className="text-venue-gold mb-3">{member.role}</p>
                  <p className="text-venue-muted">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default About;

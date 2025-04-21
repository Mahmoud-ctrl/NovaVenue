
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Our wedding at Nova Venue was absolutely perfect. The venue was stunning, and the staff went above and beyond to make our day special. Every detail was taken care of!",
      author: "Sarah & Michael",
      event: "Wedding"
    },
    {
      id: 2,
      content: "We hosted our annual corporate gala here and were blown away. The space was versatile, accommodating our needs perfectly, and our guests were impressed with both the venue and service.",
      author: "John Doe",
      event: "Corporate Event"
    },
    {
      id: 3,
      content: "The most beautiful venue for our daughter's sweet sixteen! The ballroom was transformed into a magical space. We'll definitely be back for future celebrations.",
      author: "The Williams Family",
      event: "Birthday Celebration"
    }
  ];

  return (
    <section className="section-padding bg-venue-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Words from Our Guests
          </h2>
          <p className="text-venue-muted max-w-3xl mx-auto">
            Don't just take our word for it. See what clients say about their experience hosting events at our venue.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-venue-gold">★</span>
                ))}
              </div>
              <p className="italic mb-6 text-venue-charcoal">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-venue-muted">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

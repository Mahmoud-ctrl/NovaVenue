
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.eventType) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email and event type are required.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would submit to a backend here
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Inquiry Received!",
      description: "We'll get back to you within 24 hours to discuss your event.",
    });
    
    setFormSubmitted(true);
  };
  
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-venue-charcoal text-white py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://img.freepik.com/premium-photo/office-reception-desk-mockup-front-view-interior-design-234_1118535-1637.jpg?w=996" 
              alt="Nova Venue concierge desk" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-venue-charcoal/60"></div>
          </div>
          
          {/* Content */}
          <div className="container-custom text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-white/80">
              Ready to start planning your event? Get in touch with our team today.
            </p>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="section-padding bg-venue-cream">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <h2 className="text-2xl font-playfair font-bold mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="text-venue-gold mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Email Us</h3>
                        <p className="text-venue-muted">info@novavenue.com</p>
                        <p className="text-venue-muted">bookings@novavenue.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="text-venue-gold mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Call Us</h3>
                        <p className="text-venue-muted">Main: (555) 123-4567</p>
                        <p className="text-venue-muted">Events: (555) 987-6543</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="text-venue-gold mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Office Hours</h3>
                        <p className="text-venue-muted">Monday - Friday: 9AM - 7PM</p>
                        <p className="text-venue-muted">Saturday: 10AM - 6PM</p>
                        <p className="text-venue-muted">Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                  
                  <hr className="my-6 border-gray-200" />
                  
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-venue-muted mb-4">
                      123 Nova Venue<br />
                      Cityville, State 12345<br />
                      United States
                    </p>
                    <div className="bg-gray-200 h-48 rounded-lg overflow-hidden">
                    {/* Google Maps Embed */}
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00425934892556!3d40.71274684401635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s180%20Park%20Row%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2sus!4v1650396958570!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Nova Venue Location"
                    ></iframe>
                  </div>
                  </div>
                </div>
              </div>
              
              {/* Booking Form */}
              <div className="md:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-green-600">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-playfair font-bold mb-4">Thank You!</h2>
                      <p className="text-venue-muted max-w-md mx-auto mb-6">
                        We've received your inquiry and will get back to you within 24 hours to discuss your event details.
                      </p>
                      <Button 
                        onClick={() => setFormSubmitted(false)}
                        className="bg-venue-gold hover:bg-venue-gold/90 text-white"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-playfair font-bold mb-2">Book Your Event</h2>
                      <p className="text-venue-muted mb-6">
                        Fill out the form below to inquire about availability and packages for your event.
                      </p>
                      
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Name */}
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                              Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-venue-gold"
                              required
                            />
                          </div>
                          
                          {/* Email */}
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-venue-gold"
                              required
                            />
                          </div>
                          
                          {/* Phone */}
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-venue-gold"
                            />
                          </div>
                          
                          {/* Event Type */}
                          <div>
                            <label htmlFor="eventType" className="block text-sm font-medium mb-1">
                              Event Type <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="eventType"
                              name="eventType"
                              value={formData.eventType}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-venue-gold"
                              required
                            >
                              <option value="">Select an event type</option>
                              <option value="Wedding">Wedding</option>
                              <option value="Corporate Event">Corporate Event</option>
                              <option value="Birthday">Birthday</option>
                              <option value="Anniversary">Anniversary</option>
                              <option value="Gala">Gala/Fundraiser</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          
                          {/* Preferred Date */}
                          <div>
                            <label htmlFor="date" className="block text-sm font-medium mb-1">
                              Preferred Date
                            </label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-venue-gold"
                            />
                          </div>
                          
                          {/* Estimated Guests */}
                          <div>
                            <label htmlFor="guests" className="block text-sm font-medium mb-1">
                              Estimated Number of Guests
                            </label>
                            <input
                              type="number"
                              id="guests"
                              name="guests"
                              value={formData.guests}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-venue-gold"
                              min="1"
                            />
                          </div>
                          
                          {/* Message */}
                          <div className="md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                              Additional Information
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={5}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-venue-gold"
                              placeholder="Tell us more about your event, any special requirements, or questions you have."
                            ></textarea>
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <Button 
                            type="submit" 
                            className="bg-venue-gold hover:bg-venue-gold/90 text-white px-8 py-3 w-full md:w-auto"
                          >
                            Submit Inquiry
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-venue-muted max-w-3xl mx-auto">
                Find quick answers to common questions about our venue and services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-venue-cream p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-2">How far in advance should I book?</h3>
                <p className="text-venue-muted">
                  We recommend booking 6-12 months in advance for weddings and large events, especially for peak season dates (May-October). Corporate events and smaller gatherings may require less lead time.
                </p>
              </div>
              
              <div className="bg-venue-cream p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-2">Do you provide catering services?</h3>
                <p className="text-venue-muted">
                  We work with preferred catering partners who offer a range of menu options. You can choose from our list or bring in your own caterer for an additional fee.
                </p>
              </div>
              
              <div className="bg-venue-cream p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-2">What is your cancellation policy?</h3>
                <p className="text-venue-muted">
                  Deposits are non-refundable, but we offer flexible rescheduling options. Full details are provided in your contract.
                </p>
              </div>
              
              <div className="bg-venue-cream p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-2">Can I visit the venue before booking?</h3>
                <p className="text-venue-muted">
                  Absolutely! We encourage tours of our venue. Please contact us to schedule a visit with one of our event coordinators.
                </p>
              </div>
              
              <div className="bg-venue-cream p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-2">Is there parking available?</h3>
                <p className="text-venue-muted">
                  Yes, we offer complimentary parking for all guests with over 150 spaces available on-site.
                </p>
              </div>
              
              <div className="bg-venue-cream p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-semibold mb-2">Do you have accommodation options?</h3>
                <p className="text-venue-muted">
                  While we don't offer on-site accommodation, we have partnerships with several nearby hotels and can arrange special rates for your guests.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

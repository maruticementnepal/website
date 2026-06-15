import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const offices = [
    {
      title: "Head Office & Manufacturing Plant",
      address: "Hetauda Industrial Estate, Makwanpur, Nepal",
      phone: "+977-57-520100, +977-57-520101",
      email: "info@maruticement.com.np",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    },
    {
      title: "Kathmandu Regional Office",
      address: "Thapathali, Kathmandu, Nepal",
      phone: "+977-1-4234567",
      email: "kathmandu@maruticement.com.np",
      hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
    {
      title: "Eastern Regional Office",
      address: "Biratnagar, Morang, Nepal",
      phone: "+977-21-532123",
      email: "eastern@maruticement.com.np",
      hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
  ];

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#C41E1E]/40 text-sm transition-shadow";

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#111111] text-white py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C41E1E]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-4">Contact Us</p>
          <h1
            className="font-bold text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Have questions about our products or services? Our team is here to help you build a stronger future.
          </p>
        </div>
      </section>

      {/* Office Cards */}
      <section className="py-14 bg-[#faf8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded border-t-4 border-[#C41E1E] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-6 text-[#111]">{office.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-[#C41E1E] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-600 text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="text-[#C41E1E] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-600 text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="text-[#C41E1E] flex-shrink-0 mt-0.5" size={16} />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-[#C41E1E] text-sm transition-colors break-all">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="text-[#C41E1E] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-600 text-sm">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">Message Us</p>
              <h2 className="text-4xl font-bold mb-3 text-[#111]">Send Us a Message</h2>
              <div className="h-1 w-12 bg-[#C41E1E] mb-8" />
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                Fill out the form below and our team will respond to your inquiry within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#111] mb-2">
                    Full Name <span className="text-[#C41E1E]">*</span>
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#111] mb-2">
                      Email Address <span className="text-[#C41E1E]">*</span>
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#111] mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+977-..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#111] mb-2">
                    Subject <span className="text-[#C41E1E]">*</span>
                  </label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass}>
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="dealership">Dealership Opportunity</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="complaint">Complaint / Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#111] mb-2">
                    Message <span className="text-[#C41E1E]">*</span>
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className={inputClass + " resize-none"} placeholder="Tell us more about your inquiry..." />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C41E1E] text-white px-8 py-4 rounded hover:bg-[#9b1515] transition-colors inline-flex items-center justify-center space-x-2 font-bold shadow-lg shadow-red-900/20"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Map & Quick Info */}
            <div>
              <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">Head Office</p>
              <h2 className="text-4xl font-bold mb-3 text-[#111]">Visit Our Head Office</h2>
              <div className="h-1 w-12 bg-[#C41E1E] mb-8" />

              {/* Map Placeholder */}
              <div className="bg-[#faf8f8] border border-gray-100 rounded h-[380px] mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C41E1E]" />
                <div className="text-center text-gray-400">
                  <MapPin size={44} className="mx-auto mb-4 text-[#C41E1E]" />
                  <p className="text-base font-semibold text-gray-700">Interactive Map</p>
                  <p className="text-sm mt-2">Hetauda Industrial Estate, Makwanpur</p>
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="bg-[#111111] text-white p-8 rounded">
                <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Customer Service</p>
                    <p className="text-lg font-bold text-white">+977-57-520100</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Sales Inquiries</p>
                    <p className="font-bold text-[#C41E1E]">sales@maruticement.com.np</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Technical Support</p>
                    <p className="font-bold text-[#C41E1E]">technical@maruticement.com.np</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#faf8f8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-[#111]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "What is the minimum order quantity?",
                a: "We cater to orders of all sizes. Please contact our sales team for specific requirements and pricing.",
              },
              {
                q: "Do you provide technical consultation?",
                a: "Yes, our technical team provides free consultation for construction projects of all scales.",
              },
              {
                q: "How can I become an authorized dealer?",
                a: "Please fill out the dealership application form on our Dealers page or contact our business development team.",
              },
              {
                q: "What is your delivery timeframe?",
                a: "Delivery times vary by location. Typically 2-5 business days within the Kathmandu Valley.",
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded border border-gray-100 group hover:border-[#C41E1E]/30 transition-colors">
                <summary className="font-bold text-[#111] cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#C41E1E] text-lg ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

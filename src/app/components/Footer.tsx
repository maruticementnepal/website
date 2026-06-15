import { Link } from "react-router";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Red top accent bar */}
      <div className="h-1 bg-[#C41E1E]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 bg-[#C41E1E] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>MC</span>
              </div>
              <div>
                <p className="font-bold text-white leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}>Maruti Cement</p>
                <p className="text-[#C41E1E] text-xs tracking-widest uppercase">Building Dreams</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Nepal's trusted cement manufacturer, building the nation's infrastructure with quality and reliability since 1985.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-[#C41E1E] transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5 text-white uppercase text-xs tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Our Products" },
                { to: "/dealers", label: "Find Dealers" },
                { to: "/blogs", label: "News & Updates" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-[#C41E1E] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-5 text-white uppercase text-xs tracking-widest">Our Products</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["OPC 43 Grade Cement", "OPC 53 Grade Cement", "PPC Cement", "PSC Cement"].map((p) => (
                <li key={p} className="hover:text-[#C41E1E] transition-colors cursor-default">{p}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-5 text-white uppercase text-xs tracking-widest">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#C41E1E] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Hetauda Industrial Estate, Makwanpur, Nepal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#C41E1E] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+977-57-520100</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-[#C41E1E] flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@maruticement.com.np</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Maruti Cement Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Building Dreams &mdash; One Foundation at a Time</p>
        </div>
      </div>
    </footer>
  );
}

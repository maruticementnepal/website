import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/dealers", label: "Dealers" },
    { path: "/blogs", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-[#C41E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#C41E1E] rounded flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>MC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.01em" }}>
                Maruti Cement
              </span>
              <span className="text-xs text-[#C41E1E] font-medium tracking-widest uppercase">Building Dreams</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? "text-[#C41E1E] border-b-2 border-[#C41E1E]"
                    : "text-[#444] hover:text-[#C41E1E]"
                } py-2 text-sm font-medium tracking-wide transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#444] hover:text-[#C41E1E] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`${
                  isActive(link.path)
                    ? "text-[#C41E1E] bg-red-50 border-l-4 border-[#C41E1E]"
                    : "text-[#444] hover:bg-red-50 hover:text-[#C41E1E]"
                } px-4 py-3 rounded-r-lg transition-colors text-sm font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

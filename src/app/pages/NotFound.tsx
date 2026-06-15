import { Link } from "react-router";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-[#faf8f8]">
      <div className="text-center">
        <div
          className="font-bold text-[#C41E1E] mb-4 leading-none"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(6rem, 20vw, 12rem)" }}
        >
          404
        </div>
        <h2 className="text-3xl font-bold text-[#111] mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
          Sorry, the page you're looking for doesn't exist. Let's get you back to building dreams.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-[#C41E1E] text-white px-8 py-4 rounded hover:bg-[#9b1515] transition-colors font-bold shadow-lg shadow-red-900/20"
        >
          <Home size={20} />
          <span>Back to Home</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}

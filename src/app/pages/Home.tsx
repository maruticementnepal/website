import { Link } from "react-router";
import { ArrowRight, Award, Truck, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "ISO certified cement meeting international standards with rigorous testing at every stage.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Nationwide distribution network ensuring prompt and reliable service across Nepal.",
    },
    {
      icon: Shield,
      title: "Trusted Brand",
      description: "Over 38 years of excellence in cement manufacturing trusted by thousands of builders.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated technical assistance and consultation for every construction project.",
    },
  ];

  const stats = [
    { value: "2M+", label: "Tons Annual Production" },
    { value: "500+", label: "Authorized Dealers" },
    { value: "75+", label: "Districts Coverage" },
    { value: "38+", label: "Years of Excellence" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735672091116-b39f900a9548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cmlhbCUyMHBsYW50fGVufDF8fHx8MTc3MzcxNjE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cement manufacturing plant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/95 via-[#0f0f0f]/80 to-transparent" />
        </div>
        {/* Red left border accent */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#C41E1E]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 mb-6 bg-[#C41E1E]/20 border border-[#C41E1E]/40 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#C41E1E] animate-pulse" />
              <span className="text-sm text-red-300 font-medium tracking-wide">Nepal's Leading Cement Brand</span>
            </div>
            <h1
              className="font-bold mb-6 leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}
            >
              Building Dreams,<br />
              <span className="text-[#C41E1E]">One Foundation</span> at a Time.
            </h1>
            <p className="text-lg mb-10 text-gray-300 leading-relaxed max-w-xl">
              Premium cement trusted by builders, contractors, and engineers across Nepal for over three decades of excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-[#C41E1E] text-white px-8 py-4 rounded hover:bg-[#9b1515] transition-colors inline-flex items-center space-x-2 font-semibold shadow-lg shadow-red-900/30"
              >
                <span>Explore Products</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/40 text-white px-8 py-4 rounded hover:border-white hover:bg-white/10 transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#C41E1E] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="font-bold mb-1 leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                >
                  {stat.value}
                </div>
                <div className="text-red-200 text-sm font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#faf8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-xl">
            <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="text-5xl font-bold text-[#111]">Why Maruti Cement?</h2>
            <div className="mt-4 h-1 w-16 bg-[#C41E1E] rounded" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded border border-gray-100 hover:border-[#C41E1E]/30 hover:shadow-lg hover:shadow-red-50 transition-all group"
              >
                <div className="w-12 h-12 bg-[#C41E1E] rounded flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#111]">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">Our Range</p>
              <h2 className="text-5xl font-bold text-[#111]">Premium Products</h2>
            </div>
            <Link to="/products" className="inline-flex items-center space-x-2 text-[#C41E1E] font-semibold hover:underline">
              <span>View All Products</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "OPC 43 Grade", desc: "Ideal for general residential construction", tag: "Popular" },
              { name: "OPC 53 Grade", desc: "High-strength for major infrastructure", tag: "Premium" },
              { name: "PPC Cement", desc: "Eco-friendly and highly durable", tag: "Eco" },
              { name: "PSC Cement", desc: "Superior sulfate & corrosion resistance", tag: "Industrial" },
            ].map((product, index) => (
              <div key={index} className="group relative bg-[#faf8f8] border border-gray-100 p-8 rounded overflow-hidden hover:border-[#C41E1E]/40 transition-all cursor-pointer">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C41E1E] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xs font-semibold bg-[#C41E1E]/10 text-[#C41E1E] px-3 py-1 rounded-full mb-5 inline-block">
                  {product.tag}
                </span>
                <div className="w-12 h-12 bg-[#111111] rounded mb-5" />
                <h3 className="text-xl font-bold mb-2 text-[#111]">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{product.desc}</p>
                <Link to="/products" className="text-[#C41E1E] font-semibold text-sm inline-flex items-center space-x-2 group-hover:underline">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1650732011990-b6723316bff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjb25jcmV0ZSUyMGJ1aWxkaW5nJTIwbmVwYWx8ZW58MXx8fHwxNzczNzE2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#111111]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#C41E1E]/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-4">Let's Build Together</p>
          <h2
            className="font-bold mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Ready to Build with Maruti Cement?
          </h2>
          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find authorized dealers near you or contact our team for technical support and bulk orders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/dealers"
              className="bg-[#C41E1E] text-white px-8 py-4 rounded hover:bg-[#9b1515] transition-colors inline-flex items-center space-x-2 font-semibold shadow-lg"
            >
              <span>Find Dealers</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/40 text-white px-8 py-4 rounded hover:border-white hover:bg-white/10 transition-colors font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

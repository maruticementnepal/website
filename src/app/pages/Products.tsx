import { CheckCircle, Download, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Products() {
  const products = [
    {
      name: "OPC 43 Grade Cement",
      description: "Ordinary Portland Cement suitable for general construction work where high early strength is not required.",
      image: "https://images.unsplash.com/photo-1667328951055-43d66e6e87fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzM3MTYxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Popular Choice",
      features: [
        "Compressive strength: 43 N/mm² at 28 days",
        "Ideal for residential construction",
        "Cost-effective solution",
        "Consistent quality and performance",
      ],
      applications: [
        "Plastering and masonry work",
        "Non-structural concrete",
        "General civil construction",
        "Housing projects",
      ],
    },
    {
      name: "OPC 53 Grade Cement",
      description: "High strength cement designed for projects requiring superior strength and durability.",
      image: "https://images.unsplash.com/photo-1667328951055-43d66e6e87fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzM3MTYxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Premium Grade",
      features: [
        "Compressive strength: 53 N/mm² at 28 days",
        "High early strength development",
        "Superior durability",
        "Reduced construction time",
      ],
      applications: [
        "High-rise buildings and infrastructure",
        "Prestressed concrete",
        "Bridges and flyovers",
        "Industrial structures",
      ],
    },
    {
      name: "Portland Pozzolana Cement (PPC)",
      description: "Eco-friendly cement with enhanced durability and resistance to chemical attacks.",
      image: "https://images.unsplash.com/photo-1667328951055-43d66e6e87fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzM3MTYxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Eco-Friendly",
      features: [
        "Lower heat of hydration",
        "Improved workability",
        "Better resistance to sulfate attack",
        "Environmentally sustainable",
      ],
      applications: [
        "Marine structures",
        "Mass concrete works",
        "Underground construction",
        "Hydraulic structures",
      ],
    },
    {
      name: "Portland Slag Cement (PSC)",
      description: "Blended cement offering excellent resistance to aggressive environments.",
      image: "https://images.unsplash.com/photo-1667328951055-43d66e6e87fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzM3MTYxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Industrial Grade",
      features: [
        "Superior sulfate resistance",
        "Reduced permeability",
        "Long-term strength gain",
        "Cost-effective for mass concreting",
      ],
      applications: [
        "Foundations and basements",
        "Sewage treatment plants",
        "Coastal construction",
        "Dam construction",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#111111] text-white py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C41E1E]" />
        <div className="absolute right-0 top-0 w-64 h-full opacity-5">
          <div className="w-full h-full bg-[#C41E1E]" style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-4">Maruti Cement</p>
          <h1
            className="font-bold text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            Our Products
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Comprehensive range of premium cement products engineered for every construction need — from residential homes to major infrastructure projects.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-14 items-center`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <span className="text-xs font-semibold bg-[#C41E1E]/10 text-[#C41E1E] px-3 py-1 rounded-full mb-4 inline-block">
                    {product.tag}
                  </span>
                  <h2 className="text-4xl font-bold mb-4 text-[#111]">{product.name}</h2>
                  <div className="h-1 w-12 bg-[#C41E1E] mb-6" />
                  <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-base font-bold mb-4 text-[#111] uppercase tracking-wide text-sm">Key Features</h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start space-x-3">
                            <CheckCircle className="text-[#C41E1E] flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-4 text-[#111] uppercase tracking-wide text-sm">Applications</h3>
                      <ul className="space-y-3">
                        {product.applications.map((app, aIndex) => (
                          <li key={aIndex} className="flex items-start space-x-3">
                            <div className="w-4 h-4 rounded-full border-2 border-[#C41E1E] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="bg-[#C41E1E] text-white px-6 py-3 rounded hover:bg-[#9b1515] transition-colors inline-flex items-center space-x-2 font-semibold">
                    <FileText size={18} />
                    <span>Download Technical Datasheet</span>
                    <Download size={16} />
                  </button>
                </div>

                <div className={`relative h-[420px] rounded overflow-hidden shadow-xl ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C41E1E]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-[#faf8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">Our Promise</p>
            <h2 className="text-5xl font-bold text-[#111]">Quality Assurance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Raw Material Testing", desc: "Comprehensive analysis of all incoming materials before production begins." },
              { title: "In-Process Quality Control", desc: "Continuous monitoring at every stage during the manufacturing process." },
              { title: "Final Product Testing", desc: "Stringent tests before dispatch to ensure full compliance with standards." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded border border-gray-100 text-center hover:border-[#C41E1E]/30 transition-colors">
                <div className="w-14 h-14 bg-[#C41E1E] rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#111]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support CTA */}
      <section className="py-20 bg-[#C41E1E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-bold mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Need Technical Assistance?
          </h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team of experts is ready to help you choose the right product and provide technical guidance for your project.
          </p>
          <button className="bg-white text-[#C41E1E] px-8 py-4 rounded hover:bg-red-50 transition-colors font-bold">
            Contact Technical Team
          </button>
        </div>
      </section>
    </div>
  );
}

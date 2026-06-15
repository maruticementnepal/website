import { Target, Eye, Award, Users, Factory, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to maintaining the highest quality standards in every product we manufacture.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Building lasting relationships through trust, integrity, and exceptional service.",
    },
    {
      icon: Factory,
      title: "Innovation",
      description: "Continuously investing in modern technology and sustainable manufacturing practices.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Driving Nepal's development through reliable and high-performance construction solutions.",
    },
  ];

  const milestones = [
    { year: "1985", event: "Maruti Cement established at Hetauda Industrial Estate" },
    { year: "1992", event: "Achieved first ISO certification for quality management" },
    { year: "2005", event: "Expanded production capacity to 1 million tons annually" },
    { year: "2015", event: "Launched eco-friendly PPC cement line across Nepal" },
    { year: "2020", event: "Reached 2 million tons annual production capacity" },
    { year: "2026", event: "Serving 75+ districts across Nepal with 500+ dealers" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzM3MTYyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#111111]/80" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C41E1E]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-4">Our Story</p>
          <h1
            className="font-bold text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            About Maruti Cement
          </h1>
          <p className="text-gray-300 mt-4 text-lg">Building Nepal's infrastructure since 1985</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">Who We Are</p>
              <h2 className="text-5xl font-bold mb-8 text-[#111]">Our Story</h2>
              <div className="h-1 w-12 bg-[#C41E1E] mb-8" />
              <p className="text-gray-600 mb-5 leading-relaxed">
                Established in 1985 in the heart of Nepal's industrial corridor, Maruti Cement has been a cornerstone of the nation's construction industry for over three decades. What started as a modest cement manufacturing unit has grown into one of Nepal's most trusted and respected cement brands.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Our journey has been marked by unwavering commitment to quality, innovation, and customer satisfaction. From small residential projects to major infrastructure developments, our products have been integral to building modern Nepal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, with a production capacity of over 2 million tons annually and a distribution network spanning 75+ districts, we continue to set benchmarks in quality and service excellence.
              </p>
            </div>
            <div className="relative h-[500px] rounded overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873268364-15bef4162221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzM2MjUzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Maruti Cement team"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C41E1E]" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#faf8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded border-t-4 border-[#C41E1E] shadow-sm">
              <div className="w-14 h-14 bg-[#C41E1E] rounded flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-4xl font-bold mb-5 text-[#111]">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide premium quality cement products that meet international standards while supporting Nepal's infrastructure development. We strive to deliver value through innovation, reliability, and exceptional service — turning every building dream into reality.
              </p>
            </div>
            <div className="bg-[#111111] p-12 rounded border-t-4 border-[#C41E1E] shadow-sm">
              <div className="w-14 h-14 bg-[#C41E1E] rounded flex items-center justify-center mb-6">
                <Eye className="text-white" size={28} />
              </div>
              <h2 className="text-4xl font-bold mb-5 text-white">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To be Nepal's most trusted and preferred cement brand, recognized for quality excellence, sustainable practices, and contribution to nation-building. We envision a future where every major construction project in Nepal is built on the foundation of Maruti Cement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="text-5xl font-bold text-[#111]">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#faf8f8] border-2 border-[#C41E1E]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C41E1E] transition-colors">
                  <value.icon className="text-[#C41E1E] group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#111]">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">Since 1985</p>
            <h2 className="text-5xl font-bold">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#C41E1E]/30 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center mb-4 md:mb-0`}>
                    <div className="inline-block bg-[#C41E1E] px-6 py-3 rounded">
                      <span
                        className="text-2xl font-bold text-white"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-[#C41E1E] rounded-full z-10 hidden md:block ring-4 ring-[#C41E1E]/20" />
                  <div className="flex-1 bg-white/5 border border-white/10 p-6 rounded hover:border-[#C41E1E]/40 transition-colors">
                    <p className="text-gray-300">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">Certified Quality</p>
            <h2 className="text-5xl font-bold text-[#111]">Certifications & Standards</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management System" },
              { name: "ISO 14001:2015", desc: "Environmental Management" },
              { name: "Nepal Standards", desc: "NS 295:2062 Certified" },
            ].map((cert, index) => (
              <div key={index} className="bg-[#faf8f8] border border-gray-100 p-10 rounded text-center hover:border-[#C41E1E]/30 transition-colors">
                <div className="w-20 h-20 bg-[#C41E1E] rounded-full flex items-center justify-center mx-auto mb-5">
                  <Award className="text-white" size={36} />
                </div>
                <h3
                  className="text-2xl font-bold mb-2 text-[#111]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {cert.name}
                </h3>
                <p className="text-gray-500 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

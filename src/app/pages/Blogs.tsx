import { useState } from "react";
import { Link } from "react-router";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Construction Practices in Nepal",
      excerpt: "Explore how the construction industry in Nepal is embracing eco-friendly practices and sustainable building materials for a greener future.",
      image: "https://images.unsplash.com/photo-1650732011990-b6723316bff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjb25jcmV0ZSUyMGJ1aWxkaW5nJTIwbmVwYWx8ZW58MXx8fHwxNzczNzE2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "March 10, 2026",
      author: "Dr. Ramesh Sharma",
      category: "Sustainability",
    },
    {
      id: 2,
      title: "Choosing the Right Cement Grade for Your Project",
      excerpt: "A comprehensive guide to understanding different cement grades and selecting the most suitable one for various construction applications.",
      image: "https://images.unsplash.com/photo-1667328951055-43d66e6e87fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzM3MTYxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "March 5, 2026",
      author: "Eng. Prakash Thapa",
      category: "Technical",
    },
    {
      id: 3,
      title: "Quality Control in Cement Manufacturing",
      excerpt: "Inside look at the rigorous quality control measures implemented at Maruti Cement to ensure consistent product excellence.",
      image: "https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzM3MTYyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 28, 2026",
      author: "Quality Assurance Team",
      category: "Quality",
    },
    {
      id: 4,
      title: "Infrastructure Development and Nepal's Growth",
      excerpt: "How major infrastructure projects are shaping Nepal's economic development and the role of quality cement in these initiatives.",
      image: "https://images.unsplash.com/photo-1663058480199-acbc638bf21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc3MzY0MjYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 20, 2026",
      author: "Industry Insights",
      category: "Industry News",
    },
    {
      id: 5,
      title: "Best Practices for Cement Storage and Handling",
      excerpt: "Essential tips for contractors and builders on proper cement storage to maintain quality and prevent degradation on site.",
      image: "https://images.unsplash.com/photo-1667328951055-43d66e6e87fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzM3MTYxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 15, 2026",
      author: "Technical Team",
      category: "Best Practices",
    },
    {
      id: 6,
      title: "Maruti Cement's Contribution to Community Development",
      excerpt: "Our ongoing CSR initiatives focused on education, health, and infrastructure development in local communities across Nepal.",
      image: "https://images.unsplash.com/photo-1758873268364-15bef4162221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzM2MjUzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 10, 2026",
      author: "CSR Department",
      category: "Community",
    },
  ];

  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#111111] text-white py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C41E1E]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-4">Maruti Cement</p>
          <h1
            className="font-bold text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            News & Insights
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Stay updated with the latest industry news, technical articles, and insights from Maruti Cement.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded border border-gray-100 shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[420px] bg-gray-100">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#C41E1E] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wide">
                    Featured Article
                  </span>
                </div>
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-5">
                  <span className="inline-flex items-center space-x-2 text-[#C41E1E] text-sm font-semibold">
                    <Tag size={14} />
                    <span>{blogPosts[0].category}</span>
                  </span>
                  <span className="inline-flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{blogPosts[0].date}</span>
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-5 text-[#111] leading-tight">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-3 mb-8">
                  <User size={16} className="text-gray-400" />
                  <span className="text-gray-500 text-sm">{blogPosts[0].author}</span>
                </div>
                <Link
                  to={`/blogs/${blogPosts[0].id}`}
                  className="inline-flex items-center space-x-2 bg-[#C41E1E] text-white px-6 py-3 rounded hover:bg-[#9b1515] transition-colors font-semibold self-start"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#faf8f8] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-[#C41E1E] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#C41E1E] hover:text-[#C41E1E]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPosts.slice(activeCategory === "All" ? 1 : 0).map((post) => (
              <Link
                key={post.id}
                to={`/blogs/${post.id}`}
                className="bg-white rounded border border-gray-100 hover:border-[#C41E1E]/40 hover:shadow-md transition-all overflow-hidden group"
              >
                <div className="relative h-[220px] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#C41E1E] text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="inline-flex items-center space-x-1 text-gray-400 text-xs">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#111] group-hover:text-[#C41E1E] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-400 text-xs">
                      <User size={13} />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-[#C41E1E] text-xs font-semibold inline-flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C41E1E]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-4">Newsletter</p>
          <h2
            className="font-bold mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Stay Informed
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Subscribe to our newsletter for the latest updates, technical insights, and industry news from Maruti Cement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded text-[#111] focus:outline-none focus:ring-2 focus:ring-[#C41E1E] text-sm"
            />
            <button className="bg-[#C41E1E] text-white px-7 py-4 rounded hover:bg-[#9b1515] transition-colors font-semibold whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

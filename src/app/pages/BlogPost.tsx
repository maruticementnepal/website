import { useParams, Link } from "react-router";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function BlogPost() {
  const { id } = useParams();

  const post = {
    id: id,
    title: "Sustainable Construction Practices in Nepal",
    image: "https://images.unsplash.com/photo-1650732011990-b6723316bff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjb25jcmV0ZSUyMGJ1aWxkaW5nJTIwbmVwYWx8ZW58MXx8fHwxNzczNzE2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "March 10, 2026",
    author: "Dr. Ramesh Sharma",
    category: "Sustainability",
    content: `
      <p>The construction industry in Nepal is witnessing a paradigm shift towards sustainable and eco-friendly practices. As environmental concerns continue to grow globally, Nepal's construction sector is embracing green building materials and methods that reduce environmental impact while maintaining structural integrity.</p>

      <h2>The Rise of Green Construction</h2>
      <p>Over the past decade, there has been a significant increase in awareness about sustainable construction practices. Architects, engineers, and builders are now more conscious of the environmental footprint of their projects.</p>

      <h2>Eco-Friendly Cement Solutions</h2>
      <p>Portland Pozzolana Cement (PPC) has emerged as a popular choice for sustainable construction. By incorporating fly ash, PPC reduces the consumption of natural resources and lowers carbon emissions. Maruti Cement's PPC products offer the dual benefits of environmental responsibility and superior structural performance.</p>

      <h2>Key Sustainable Practices</h2>
      <ul>
        <li>Use of recycled and locally sourced materials to reduce transportation emissions</li>
        <li>Implementation of energy-efficient building designs</li>
        <li>Adoption of water conservation techniques in construction</li>
        <li>Proper waste management and recycling of construction debris</li>
        <li>Integration of renewable energy systems</li>
      </ul>

      <h2>The Role of Technology</h2>
      <p>Modern construction technology plays a crucial role in promoting sustainability. Advanced concrete mixing techniques, precision engineering, and computerized quality control systems ensure that materials are used efficiently with minimal waste.</p>

      <h2>Conclusion</h2>
      <p>Sustainable construction is not just a trend — it is a necessity for the future. By choosing eco-friendly materials like PPC cement and adopting green building practices, Nepal can build a stronger, more sustainable future. Maruti Cement remains committed to supporting this transition through innovative products and continuous improvement in our manufacturing processes.</p>
    `,
  };

  return (
    <div>
      {/* Back Button */}
      <div className="bg-[#faf8f8] border-b border-gray-100 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blogs"
            className="inline-flex items-center space-x-2 text-gray-500 hover:text-[#C41E1E] transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to News</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="inline-block bg-[#C41E1E] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wide mb-5">
              {post.category}
            </span>
            <h1
              className="font-bold mb-6 text-[#111]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.05 }}
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8">
              <div className="flex items-center space-x-2">
                <User size={16} className="text-[#C41E1E]" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-[#C41E1E]" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[480px] rounded overflow-hidden mb-12 bg-gray-100">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C41E1E]" />
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-4 mb-12 pb-8 border-b border-gray-100">
            <span className="text-gray-500 text-sm flex items-center space-x-2 font-medium">
              <Share2 size={16} />
              <span>Share:</span>
            </span>
            <button className="text-gray-400 hover:text-[#1877f2] transition-colors">
              <Facebook size={20} />
            </button>
            <button className="text-gray-400 hover:text-[#1da1f2] transition-colors">
              <Twitter size={20} />
            </button>
            <button className="text-gray-400 hover:text-[#0077b5] transition-colors">
              <Linkedin size={20} />
            </button>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[#111] prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5 prose-ul:text-gray-600 prose-li:mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-[#faf8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-3">Keep Reading</p>
          <h2 className="text-4xl font-bold mb-10 text-[#111]">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                to={`/blogs/${i + 1}`}
                className="bg-white rounded border border-gray-100 hover:border-[#C41E1E]/40 hover:shadow-md transition-all overflow-hidden group"
              >
                <div className="relative h-[200px] bg-gray-100">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1667328951055-43d66e6e87fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWdzJTIwd2FyZWhvdXNlJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzM3MTYxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Related article"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#111] group-hover:text-[#C41E1E] transition-colors leading-tight">
                    Maruti Cement Industry Insights {i}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Explore the latest trends and developments in Nepal's construction industry.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

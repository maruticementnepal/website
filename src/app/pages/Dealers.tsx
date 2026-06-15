import { useState } from "react";
import { MapPin, Phone, Mail, Search } from "lucide-react";

export default function Dealers() {
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const dealers = [
    {
      name: "Kathmandu Building Suppliers",
      district: "Kathmandu",
      address: "New Road, Kathmandu",
      phone: "+977-1-4234567",
      email: "info@kbsuppliers.com.np",
    },
    {
      name: "Pokhara Construction Materials",
      district: "Kaski",
      address: "Mahendrapul, Pokhara",
      phone: "+977-61-523456",
      email: "pokhara@maruticement.com.np",
    },
    {
      name: "Biratnagar Cement Depot",
      district: "Morang",
      address: "Traffic Chowk, Biratnagar",
      phone: "+977-21-532123",
      email: "biratnagar@maruticement.com.np",
    },
    {
      name: "Hetauda Building Center",
      district: "Makwanpur",
      address: "Industrial Area, Hetauda",
      phone: "+977-57-520200",
      email: "hetauda@maruticement.com.np",
    },
    {
      name: "Butwal Construction Hub",
      district: "Rupandehi",
      address: "Milan Chowk, Butwal",
      phone: "+977-71-412345",
      email: "butwal@maruticement.com.np",
    },
    {
      name: "Dharan Cement Store",
      district: "Sunsari",
      address: "BP Chowk, Dharan",
      phone: "+977-25-533456",
      email: "dharan@maruticement.com.np",
    },
    {
      name: "Birgunj Materials Mart",
      district: "Parsa",
      address: "Ghantaghar, Birgunj",
      phone: "+977-51-522789",
      email: "birgunj@maruticement.com.np",
    },
    {
      name: "Nepalgunj Builders Supply",
      district: "Banke",
      address: "Dhamboji Road, Nepalgunj",
      phone: "+977-81-523678",
      email: "nepalgunj@maruticement.com.np",
    },
  ];

  const districts = ["All", ...Array.from(new Set(dealers.map((d) => d.district)))];

  const filteredDealers = dealers.filter((dealer) => {
    const matchesDistrict = selectedDistrict === "All" || dealer.district === selectedDistrict;
    const matchesSearch =
      searchQuery === "" ||
      dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#111111] text-white py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C41E1E]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C41E1E] font-semibold text-sm tracking-widest uppercase mb-4">Dealer Network</p>
          <h1
            className="font-bold text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            Find Authorized Dealers
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Locate authorized Maruti Cement dealers near you across Nepal. Our extensive network ensures genuine products with the best service.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 bg-[#faf8f8] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded border border-gray-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, district, or address..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#C41E1E]/40 text-sm"
                />
              </div>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#C41E1E]/40 text-sm"
              >
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district === "All" ? "All Districts" : district}
                  </option>
                ))}
              </select>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              Showing <span className="font-semibold text-[#C41E1E]">{filteredDealers.length}</span> authorized dealer{filteredDealers.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#faf8f8] border border-gray-100 rounded h-[380px] flex items-center justify-center overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C41E1E]" />
            <div className="text-center text-gray-400">
              <MapPin size={44} className="mx-auto mb-4 text-[#C41E1E]" />
              <p className="text-base font-semibold text-gray-700">Interactive Dealer Map</p>
              <p className="text-sm mt-2">Google Maps / OpenStreetMap integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dealers List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-[#111]">Authorized Dealers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDealers.map((dealer, index) => (
              <div key={index} className="bg-white p-6 rounded border border-gray-100 hover:border-[#C41E1E]/40 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-5">
                  <h3 className="text-lg font-bold text-[#111] leading-tight">{dealer.name}</h3>
                  <span className="bg-[#C41E1E]/10 text-[#C41E1E] text-xs px-3 py-1 rounded-full font-medium flex-shrink-0 ml-2">
                    {dealer.district}
                  </span>
                </div>
                <div className="space-y-3 mb-5">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-[#C41E1E] flex-shrink-0 mt-0.5" size={15} />
                    <span className="text-gray-600 text-sm">{dealer.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-[#C41E1E] flex-shrink-0" size={15} />
                    <a href={`tel:${dealer.phone}`} className="text-gray-600 hover:text-[#C41E1E] text-sm transition-colors">
                      {dealer.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-[#C41E1E] flex-shrink-0" size={15} />
                    <a href={`mailto:${dealer.email}`} className="text-gray-600 hover:text-[#C41E1E] text-sm break-all transition-colors">
                      {dealer.email}
                    </a>
                  </div>
                </div>
                <button className="w-full bg-[#111111] text-white py-2.5 rounded hover:bg-[#C41E1E] transition-colors text-sm font-semibold">
                  Get Directions
                </button>
              </div>
            ))}
          </div>

          {filteredDealers.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="mx-auto mb-4 text-gray-300" size={48} />
              <p className="text-gray-500 text-lg">No dealers found matching your criteria.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedDistrict("All"); }}
                className="mt-4 text-[#C41E1E] underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Become a Dealer CTA */}
      <section className="py-20 bg-[#C41E1E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-bold mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Interested in Becoming a Dealer?
          </h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our network of authorized dealers and be part of Nepal's leading cement brand — Maruti Cement.
          </p>
          <button className="bg-white text-[#C41E1E] px-8 py-4 rounded hover:bg-red-50 transition-colors font-bold">
            Apply for Dealership
          </button>
        </div>
      </section>
    </div>
  );
}

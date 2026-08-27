import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin,
  Award, Factory, Leaf, Mountain, Shield, Heart,
  Users, Building2, CheckCircle, Calendar,
  Download, Zap, Facebook, Youtube, Linkedin, Twitter
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Page =
  | "home" | "about" | "timeline" | "leadership"
  | "projects" | "certificates" | "investor"
  | "csr" | "blog" | "contact" | "ipo";

// ─── Data ────────────────────────────────────────────────────────────────────

const FONT_DISPLAY = "'Rajdhani', sans-serif";
const FONT_NEPALI = "'Noto Sans Devanagari', sans-serif";
const FONT_BODY = "'Noto Sans', sans-serif";

const NAV_ITEMS: { label: string; page: Page; children?: { label: string; page: Page }[] }[] = [
  { label: "Home", page: "home" },
  {
    label: "About Us", page: "about",
    children: [
      { label: "Timeline", page: "timeline" },
      { label: "Leadership", page: "leadership" },
    ],
  },
  { label: "Our Projects", page: "projects" },
  { label: "Certificates", page: "certificates" },
  { label: "Investor Relations", page: "investor" },
  { label: "CSR Activities", page: "csr" },
  { label: "Blogs", page: "blog" },
  { label: "Contact Us", page: "contact" },
  { label: "IPO Allotment Result", page: "ipo" },
];

const FEATURES = [
  {
    Icon: Award,
    title: "ISO प्रमाणित",
    subtitle: "ISO Certified",
    desc: "ISO 9001:2015 र ISO 14001:2015 प्रमाणित उत्पादन प्रक्रिया — गुणस्तरको ग्यारेन्टी।",
  },
  {
    Icon: Zap,
    title: "रोटरी प्रविधि",
    subtitle: "Rotary Technology",
    desc: "नेपालको पहिलो निजी क्षेत्रको ग्रीनफिल्ड सिमेन्ट प्लान्ट, आधुनिक रोटरी प्रविधिमा आधारित।",
  },
  {
    Icon: Leaf,
    title: "पर्यावरण मैत्री",
    subtitle: "Eco-Friendly",
    desc: "पर्यावरणीय मानकहरू पालना गर्दै दिगो उत्पादन — हरियो नेपालको लागि।",
  },
  {
    Icon: Mountain,
    title: "आफ्नै खानी",
    subtitle: "Own Mine",
    desc: "आफ्नै चूनढुंगा खानीबाट उच्च गुणस्तरको कच्चा पदार्थ सिधै प्लान्टमा।",
  },
];

const STATS = [
  { number: "10+", label: "वर्षको अनुभव", sub: "Years of Experience" },
  { number: "50K+", label: "सन्तुष्ट ग्राहक", sub: "Happy Customers" },
  { number: "200+", label: "परियोजना पूरा", sub: "Projects Completed" },
  { number: "100+", label: "कर्मचारी", sub: "Employees" },
];

const PROJECTS = [
  { name: "CE Construction Grande Tower", location: "काठमाडौं", type: "Commercial", year: "2023", imgId: "1486325212027-8081e485255e" },
  { name: "Himal Hydropower", location: "इलाम", type: "Infrastructure", year: "2022", imgId: "1581091226825-a6a2a5aee158" },
  { name: "Classic Developers, Satdobato", location: "ललितपुर", type: "Residential", year: "2022", imgId: "1545324418-cc1a3fa10c00" },
  { name: "Vegas City", location: "भक्तपुर", type: "Commercial", year: "2021", imgId: "1503387762-592deb58ef4e" },
  { name: "Birgunj Industrial Park", location: "बीरगन्ज", type: "Industrial", year: "2021", imgId: "1504307651254-35680f356dfd" },
  { name: "Koshi Bridge Expansion", location: "सुनसरी", type: "Infrastructure", year: "2020", imgId: "1568454537842-4cc0a96f9078" },
];

const BLOGS = [
  { title: "सिमेन्ट छान्दा के हेर्ने?", titleEn: "What to Look for When Choosing Cement", date: "Aug 15, 2025", category: "Guide", excerpt: "राम्रो निर्माण सामग्री छान्नु भनेको बलियो घर बनाउनु हो। OPC र PPC बीचको भिन्नता बुझौं।", imgId: "1504307651254-35680f356dfd" },
  { title: "OPC vs PPC: कुन राम्रो?", titleEn: "OPC vs PPC: Which is Better?", date: "Jul 22, 2025", category: "Technical", excerpt: "दुई प्रकारका सिमेन्टका फाइदाबेफाइदाहरू र कहाँ कुन प्रयोग गर्ने भन्ने बुझौं।", imgId: "1581091226825-a6a2a5aee158" },
  { title: "दिगो निर्माणको प्रतिबद्धता", titleEn: "Our Commitment to Sustainable Construction", date: "Jun 10, 2025", category: "CSR", excerpt: "वातावरण संरक्षण र आधुनिक निर्माण एकसाथ — मारुती सिमेन्टको हरियो संकल्प।", imgId: "1545324418-cc1a3fa10c00" },
  { title: "भूकम्प प्रतिरोधी निर्माण", titleEn: "Earthquake-Resistant Construction Tips", date: "May 5, 2025", category: "Technical", excerpt: "नेपालको भूकम्पीय जोखिम मध्यनजर गर्दै कसरी बलियो घर बनाउने।", imgId: "1503387762-592deb58ef4e" },
  { title: "मारुती सिमेन्टको यात्रा", titleEn: "The Journey of Maruti Cements", date: "Apr 1, 2025", category: "Company", excerpt: "२०१० देखि आजसम्म — विश्वासको एक दशकको कथा।", imgId: "1486325212027-8081e485255e" },
  { title: "गुणस्तर नियन्त्रण प्रक्रिया", titleEn: "Our Quality Control Process", date: "Mar 12, 2025", category: "Technical", excerpt: "ISO मानकहरू पालना गर्दै हरेक थैलो सिमेन्टमा उत्कृष्ट गुणस्तर कसरी सुनिश्चित गर्छौं।", imgId: "1568454537842-4cc0a96f9078" },
];

const TIMELINE_EVENTS = [
  { year: "2010", title: "स्थापना", titleEn: "Foundation", desc: "मारुती सिमेन्ट्स लिमिटेडको स्थापना चन्द्रउदयपुर, सिरहामा भयो।" },
  { year: "2012", title: "उत्पादन शुरू", titleEn: "Production Begins", desc: "पहिलो ब्याच OPC सिमेन्ट उत्पादन सफलतापूर्वक सम्पन्न भयो।" },
  { year: "2015", title: "ISO प्रमाणपत्र", titleEn: "ISO 9001 Certified", desc: "ISO 9001:2015 गुणस्तर व्यवस्थापन प्रमाणपत्र प्राप्त भयो।" },
  { year: "2018", title: "विस्तार", titleEn: "Capacity Expansion", desc: "उत्पादन क्षमता दोब्बर गरी बजारमा आपूर्ति बढाइयो।" },
  { year: "2020", title: "पर्यावरण प्रमाणपत्र", titleEn: "ISO 14001 Certified", desc: "ISO 14001:2015 वातावरणीय व्यवस्थापन प्रमाणपत्र प्राप्त भयो।" },
  { year: "2025", title: "एक दशक", titleEn: "A Decade of Trust", desc: "विश्वासको एक दशक पूरा — हजारौं सन्तुष्ट ग्राहक र दुई सय भन्दा बढी परियोजना।" },
];

const LEADERSHIP = [
  { name: "Ramesh Kumar Sharma", role: "Chairman", roleNp: "अध्यक्ष", initial: "R" },
  { name: "Sunita Agarwal", role: "Chief Executive Officer", roleNp: "प्रमुख कार्यकारी अधिकृत", initial: "S" },
  { name: "Bikash Gupta", role: "Chief Financial Officer", roleNp: "मुख्य वित्त अधिकारी", initial: "B" },
  { name: "Priya Thapa", role: "Head of Operations", roleNp: "सञ्चालन प्रमुख", initial: "P" },
  { name: "Deepak Rana", role: "Chief Engineer", roleNp: "प्रमुख इन्जिनियर", initial: "D" },
  { name: "Sita Devi Jha", role: "Marketing Director", roleNp: "विपणन निर्देशक", initial: "S" },
];

const CSR_ACTIVITIES = [
  { year: "2015", title: "भूकम्प राहत", titleEn: "Earthquake Relief", desc: "२०७२ सालको भूकम्प पीडितहरूलाई सिमेन्ट र राहत सामग्री वितरण।", Icon: Heart },
  { year: "2022", title: "शिक्षा सहयोग", titleEn: "Education Support", desc: "सिरहा जिल्लाका स्थानीय विद्यालयहरूमा छात्रवृत्ति र पुस्तकालय निर्माण।", Icon: Users },
  { year: "2023", title: "वातावरण संरक्षण", titleEn: "Environmental Protection", desc: "वृक्षारोपण अभियान र कारखाना क्षेत्रको खोला संरक्षण कार्यक्रम।", Icon: Leaf },
  { year: "2024", title: "स्वास्थ्य शिविर", titleEn: "Free Health Camps", desc: "वडा स्तरमा निःशुल्क स्वास्थ्य परीक्षण र औषधि वितरण शिविर।", Icon: Shield },
];

// ─── Intro Screen ─────────────────────────────────────────────────────────────

function IntroScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3400);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#b71c1c" }}
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Logo mark */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0, rotate: -6 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.15, duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative mb-10 flex items-center justify-center"
        style={{ width: 112, height: 112 }}
      >
        <div className="absolute inset-0 border-4" style={{ borderColor: "#d4a017" }} />
        <div className="absolute inset-3 border" style={{ borderColor: "rgba(212,160,23,0.35)" }} />
        <span
          className="relative text-white text-6xl font-bold select-none"
          style={{ fontFamily: FONT_DISPLAY, lineHeight: 1 }}
        >
          M
        </span>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.65 }}
        className="text-center"
      >
        <h1
          className="text-white font-bold tracking-[0.22em] uppercase"
          style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          MARUTI
        </h1>
        <h2
          className="font-light tracking-[0.45em] uppercase"
          style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1rem, 2.5vw, 1.6rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}
        >
          CEMENTS LTD.
        </h2>
      </motion.div>

      {/* Nepali tagline */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="mt-5 text-xl tracking-wide"
        style={{ fontFamily: FONT_NEPALI, color: "#d4a017" }}
      >
        विश्वासको एक दशक
      </motion.p>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px]"
        style={{ backgroundColor: "#d4a017" }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 3.2, ease: "linear" }}
      />
    </motion.div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ currentPage, navigate }: { currentPage: Page; navigate: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (p: Page) => {
    navigate(p);
    setMobileOpen(false);
    setMobileExpanded(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const solid = scrolled || currentPage !== "home";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: solid ? "#fff" : "transparent", boxShadow: solid ? "0 2px 20px rgba(0,0,0,0.12)" : "none" }}
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button onClick={() => go("home")} className="flex items-center gap-3 flex-shrink-0">
            <div
              className="flex items-center justify-center border-2"
              style={{ width: 40, height: 40, backgroundColor: "#b71c1c", borderColor: "#d4a017" }}
            >
              <span className="text-white font-bold text-xl" style={{ fontFamily: FONT_DISPLAY }}>M</span>
            </div>
            <div className="text-left leading-tight">
              <div
                className="font-bold tracking-wider uppercase text-sm transition-colors"
                style={{ fontFamily: FONT_DISPLAY, color: solid ? "#0f1923" : "#fff" }}
              >
                Maruti Cements
              </div>
              <div className="text-[10px] tracking-widest font-semibold" style={{ color: "#d4a017" }}>
                MCL · विश्वासको एक दशक
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.page}
                className="relative"
                onMouseEnter={() => item.children && setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button
                  onClick={() => !item.children && go(item.page)}
                  className="flex items-center gap-1 px-3 py-2 text-[11px] font-semibold tracking-wide uppercase transition-colors"
                  style={{
                    fontFamily: FONT_DISPLAY,
                    color: currentPage === item.page
                      ? "#b71c1c"
                      : solid ? "#374151" : "rgba(255,255,255,0.88)",
                  }}
                >
                  {item.label}
                  {item.children && <ChevronDown size={11} />}
                </button>

                {item.children && dropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 bg-white shadow-xl min-w-[180px] py-1 z-50"
                    style={{ borderTop: "2px solid #b71c1c" }}
                  >
                    {item.children.map((c) => (
                      <button
                        key={c.page}
                        onClick={() => go(c.page)}
                        className="w-full text-left px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-white"
                        style={{ fontFamily: FONT_DISPLAY, color: "#374151" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b71c1c"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = ""; (e.currentTarget as HTMLButtonElement).style.color = "#374151"; }}
                      >
                        {c.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 transition-colors"
            style={{ color: solid ? "#0f1923" : "#fff" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t overflow-hidden"
            style={{ borderColor: "rgba(0,0,0,0.06)" }}
          >
            <div className="max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.page}>
                  <button
                    onClick={() => {
                      if (!item.children) go(item.page);
                      else setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                    }}
                    className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold uppercase tracking-wide border-b transition-colors"
                    style={{ fontFamily: FONT_DISPLAY, color: currentPage === item.page ? "#b71c1c" : "#1f2937", borderColor: "rgba(0,0,0,0.05)" }}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={16}
                        className="transition-transform"
                        style={{ transform: mobileExpanded === item.label ? "rotate(180deg)" : "none" }}
                      />
                    )}
                  </button>
                  {item.children && mobileExpanded === item.label && (
                    <div style={{ backgroundColor: "#f9f9f9" }}>
                      {item.children.map((c) => (
                        <button
                          key={c.page}
                          onClick={() => go(c.page)}
                          className="w-full text-left px-9 py-2.5 text-sm border-b transition-colors"
                          style={{ fontFamily: FONT_DISPLAY, color: "#4b5563", borderColor: "rgba(0,0,0,0.04)" }}
                        >
                          → {c.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Home: Hero ───────────────────────────────────────────────────────────────

function HeroSection({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&auto=format"
          alt="Construction site"
          className="w-full h-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(15,25,35,0.95) 0%, rgba(15,25,35,0.7) 55%, rgba(15,25,35,0.3) 100%)" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(183,28,28,0.15)", mixBlendMode: "multiply" }} />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 md:px-8 pt-28 pb-36 w-full">
        <div className="max-w-2xl xl:max-w-3xl">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ backgroundColor: "#d4a017" }} />
            <span
              className="text-xs font-semibold tracking-[0.35em] uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}
            >
              Maruti Cements Ltd. · MCL
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-bold text-white leading-[1.05] mb-5"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            Built for Generations.<br />
            <span style={{ color: "#d4a017" }}>Trusted for Excellence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="text-2xl mb-2"
            style={{ fontFamily: FONT_NEPALI, color: "rgba(255,255,255,0.82)", fontWeight: 400 }}
          >
            विश्वासको एक दशक
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-base md:text-lg mb-10 max-w-xl leading-relaxed"
            style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.62)" }}
          >
            Nepal&apos;s first private sector Greenfield Cement Plant — ISO certified, rotary technology, and a decade of building Nepal&apos;s future from Chandraudaipur, Siraha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => navigate("projects")}
              className="flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-all"
              style={{ fontFamily: FONT_DISPLAY, backgroundColor: "#b71c1c" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9b1515"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b71c1c"; }}
            >
              Our Projects <ArrowRight size={15} />
            </button>
            <button
              onClick={() => navigate("about")}
              className="flex items-center gap-2 font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-all border-2"
              style={{ fontFamily: FONT_DISPLAY, borderColor: "#d4a017", color: "#d4a017" }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.backgroundColor = "#d4a017"; b.style.color = "#0f1923"; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.backgroundColor = ""; b.style.color = "#d4a017"; }}
            >
              About Us <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0"
        style={{ backgroundColor: "rgba(183,28,28,0.92)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>{s.number}</div>
                <div className="text-xs mt-0.5" style={{ fontFamily: FONT_NEPALI, color: "rgba(255,255,255,0.75)" }}>{s.label}</div>
                <div className="text-[10px] uppercase tracking-wider mt-0.5" style={{ fontFamily: FONT_DISPLAY, color: "rgba(255,255,255,0.4)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Home: Feature Pillars ────────────────────────────────────────────────────

function FeaturePillarsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % FEATURES.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24" style={{ backgroundColor: "#0f1923" }}>
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#d4a017" }} />
            <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>
              Why Choose Us
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "#d4a017" }} />
          </div>
          <h2 className="font-bold text-white" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            हाम्रो विशेषताहरू
          </h2>
          <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: FONT_DISPLAY, letterSpacing: "0.15em" }}>OUR KEY STRENGTHS</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
          {FEATURES.map((feat, i) => {
            const Icon = feat.Icon;
            const isActive = active === i;
            return (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ y: -4 }}
                className="cursor-pointer p-8 transition-all duration-300"
                style={{
                  backgroundColor: isActive ? "#b71c1c" : "rgba(255,255,255,0.03)",
                  borderTop: isActive ? "3px solid #d4a017" : "3px solid transparent",
                }}
              >
                <div
                  className="flex items-center justify-center mb-7 border"
                  style={{ width: 48, height: 48, borderColor: isActive ? "#d4a017" : "rgba(255,255,255,0.18)" }}
                >
                  <Icon size={22} style={{ color: isActive ? "#d4a017" : "rgba(255,255,255,0.5)" }} />
                </div>
                <h3 className="font-bold text-white text-xl mb-1" style={{ fontFamily: FONT_NEPALI }}>{feat.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: FONT_DISPLAY, color: isActive ? "#d4a017" : "rgba(255,255,255,0.35)" }}>{feat.subtitle}</p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "rgba(255,255,255,0.62)" }}>{feat.desc}</p>
                <div
                  className="mt-7 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2"
                  style={{ fontFamily: FONT_DISPLAY, color: isActive ? "#d4a017" : "rgba(255,255,255,0.25)" }}
                >
                  View Detail <ArrowRight size={11} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-7">
          {FEATURES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-[3px] transition-all duration-300"
              style={{ width: active === i ? 32 : 16, backgroundColor: active === i ? "#b71c1c" : "rgba(255,255,255,0.2)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home: Products ───────────────────────────────────────────────────────────

function ProductsSection() {
  const products = [
    {
      code: "OPC",
      name: "Ordinary Portland Cement",
      nameNp: "अर्डिनरी पोर्टल्यान्ड सिमेन्ट",
      specs: ["53 Grade Strength", "IS 12269:2013 Compliant", "Rapid early strength gain"],
      accent: "#b71c1c",
      bg: "#b71c1c",
      textBg: "#0f1923",
    },
    {
      code: "PPC",
      name: "Portland Pozzolana Cement",
      nameNp: "पोर्टल्यान्ड पोज्जोलाना सिमेन्ट",
      specs: ["Eco-friendly composition", "Long-term durability", "Reduced heat of hydration"],
      accent: "#d4a017",
      bg: "#d4a017",
      textBg: "#0f1923",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#b71c1c" }} />
              <span className="text-xs font-bold tracking-[0.4em] uppercase" style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c" }}>Our Products</span>
            </div>
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "#0f1923" }}>
              उच्च गुणस्तरको<br />
              <span style={{ color: "#b71c1c" }}>सिमेन्ट</span>
            </h2>
            <p className="mb-3 leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "#4b5563" }}>
              हरेक निर्माणको आधारशिला — घर होस् वा पुल, मारुती सिमेन्टले दिन्छ विश्वसनीय बल।
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: FONT_BODY, color: "#6b7280" }}>
              Premium quality cement engineered for every foundation — from residential homes to major infrastructure projects across Nepal.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 border-l-4" style={{ borderColor: "#b71c1c", backgroundColor: "#fafafa" }}>
                <div className="text-xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c" }}>ISO 9001</div>
                <div className="text-xs mt-1" style={{ color: "#6b7280" }}>Quality Management</div>
              </div>
              <div className="p-5 border-l-4" style={{ borderColor: "#d4a017", backgroundColor: "#fafafa" }}>
                <div className="text-xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>ISO 14001</div>
                <div className="text-xs mt-1" style={{ color: "#6b7280" }}>Environmental</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((p) => (
              <motion.div
                key={p.code}
                whileHover={{ y: -8 }}
                className="border-2 transition-all duration-300 group overflow-hidden cursor-pointer"
                style={{ borderColor: "#e5e7eb" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = p.accent; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb"; }}
              >
                <div className="flex items-center justify-center py-10" style={{ backgroundColor: p.bg }}>
                  <span className="text-4xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: p.code === "OPC" ? "#fff" : "#0f1923" }}>{p.code}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-lg mb-0.5" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>{p.name}</h3>
                  <p className="text-sm mb-5" style={{ fontFamily: FONT_NEPALI, color: "#9ca3af" }}>{p.nameNp}</p>
                  <div className="space-y-2 mb-6">
                    {p.specs.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-xs" style={{ color: "#374151" }}>
                        <CheckCircle size={13} style={{ color: p.accent, flexShrink: 0 }} />
                        <span style={{ fontFamily: FONT_BODY }}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: FONT_DISPLAY, color: p.accent }}>
                    View Details <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home: About Strip ────────────────────────────────────────────────────────

function AboutStripSection({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <section className="py-24" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 z-0" style={{ borderColor: "#d4a017" }} />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format"
              alt="Maruti Cements factory"
              className="relative w-full object-cover aspect-[4/3] z-[1]"
            />
            <div
              className="absolute -bottom-6 -right-6 p-8 z-[2]"
              style={{ backgroundColor: "#b71c1c" }}
            >
              <div className="text-4xl font-bold text-white" style={{ fontFamily: FONT_DISPLAY }}>10+</div>
              <div className="text-sm text-white/70 mt-0.5">Years of Excellence</div>
              <div className="text-sm mt-1" style={{ fontFamily: FONT_NEPALI, color: "#d4a017" }}>वर्षको उत्कृष्टता</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#b71c1c" }} />
              <span className="text-xs font-bold tracking-[0.4em] uppercase" style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c" }}>About MCL</span>
            </div>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#0f1923" }}>
              नेपालको भरोसायोग्य<br />
              <span style={{ color: "#b71c1c" }}>सिमेन्ट ब्र्यान्ड</span>
            </h2>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "#4b5563" }}>
              मारुती सिमेन्ट्स लिमिटेड (MCL) नेपालको पहिलो निजी क्षेत्रको ग्रीनफिल्ड सिमेन्ट प्लान्ट हो।
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: FONT_BODY, color: "#6b7280" }}>
              Located in Chandraudaipur, Siraha, MCL operates on Rotary Technology and holds dual ISO certifications. Our culture is creative, strategic, and entrepreneurial — driving Nepal&apos;s infrastructure forward one bag at a time.
            </p>
            <button
              onClick={() => navigate("about")}
              className="flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 transition-all"
              style={{ fontFamily: FONT_DISPLAY, backgroundColor: "#b71c1c" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9b1515"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b71c1c"; }}
            >
              Learn More <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home: Projects Preview ───────────────────────────────────────────────────

function ProjectsPreviewSection({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#b71c1c" }} />
              <span className="text-xs font-bold tracking-[0.4em] uppercase" style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c" }}>Our Portfolio</span>
            </div>
            <h2 className="font-bold" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "#0f1923" }}>
              हाम्रा <span style={{ color: "#b71c1c" }}>परियोजनाहरू</span>
            </h2>
            <p className="text-sm mt-1" style={{ fontFamily: FONT_DISPLAY, color: "#9ca3af", letterSpacing: "0.1em" }}>PROJECTS BUILT ON TRUST</p>
          </div>
          <button
            onClick={() => navigate("projects")}
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide px-6 py-3 border-2 transition-all"
            style={{ fontFamily: FONT_DISPLAY, borderColor: "#b71c1c", color: "#b71c1c" }}
            onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.backgroundColor = "#b71c1c"; b.style.color = "#fff"; }}
            onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.backgroundColor = ""; b.style.color = "#b71c1c"; }}
          >
            View All Projects <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300"
              style={{ borderColor: "#f0f0f0" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#b71c1c"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#f0f0f0"; }}
            >
              <div className="relative h-52 bg-gray-200 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${proj.imgId}?w=600&h=400&fit=crop&auto=format`}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 text-white text-xs px-3 py-1 uppercase tracking-wide font-bold" style={{ backgroundColor: "#b71c1c", fontFamily: FONT_DISPLAY }}>
                  {proj.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>{proj.name}</h3>
                <div className="flex items-center gap-1.5 text-sm" style={{ color: "#6b7280" }}>
                  <MapPin size={13} />
                  <span style={{ fontFamily: FONT_NEPALI }}>{proj.location}, Nepal</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs mt-1" style={{ color: "#9ca3af" }}>
                  <Calendar size={12} />
                  <span style={{ fontFamily: FONT_DISPLAY }}>{proj.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home: Blog Preview ───────────────────────────────────────────────────────

function BlogPreviewSection({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <section className="py-24" style={{ backgroundColor: "#0f1923" }}>
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#d4a017" }} />
              <span className="text-xs font-bold tracking-[0.4em] uppercase" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>Latest</span>
            </div>
            <h2 className="font-bold text-white" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
              समाचार र <span style={{ color: "#d4a017" }}>ब्लग</span>
            </h2>
            <p className="text-sm mt-1" style={{ fontFamily: FONT_DISPLAY, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>NEWS & INSIGHTS</p>
          </div>
          <button
            onClick={() => navigate("blog")}
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide px-6 py-3 border-2 transition-all"
            style={{ fontFamily: FONT_DISPLAY, borderColor: "#d4a017", color: "#d4a017" }}
            onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.backgroundColor = "#d4a017"; b.style.color = "#0f1923"; }}
            onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.backgroundColor = ""; b.style.color = "#d4a017"; }}
          >
            View All <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOGS.slice(0, 3).map((blog, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="cursor-pointer group p-8 transition-all duration-300 border"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,160,23,0.45)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017", backgroundColor: "rgba(212,160,23,0.12)" }}>{blog.category}</span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: FONT_DISPLAY }}>{blog.date}</span>
              </div>
              <h3 className="font-bold text-xl text-white leading-tight mb-1" style={{ fontFamily: FONT_NEPALI }}>{blog.title}</h3>
              <p className="text-xs uppercase tracking-wide mb-4" style={{ fontFamily: FONT_DISPLAY, color: "rgba(255,255,255,0.3)" }}>{blog.titleEn}</p>
              <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: FONT_NEPALI, color: "rgba(255,255,255,0.55)" }}>{blog.excerpt}</p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>
                थप पढ्नुहोस् <ArrowRight size={11} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <>
      <HeroSection navigate={navigate} />
      <FeaturePillarsSection />
      <ProductsSection />
      <AboutStripSection navigate={navigate} />
      <ProjectsPreviewSection navigate={navigate} />
      <BlogPreviewSection navigate={navigate} />
    </>
  );
}

// ─── Shared: Page Hero Banner ─────────────────────────────────────────────────

function PageHero({
  title, titleNp, subtitle, dark = false,
}: {
  title: string; titleNp?: string; subtitle: string; dark?: boolean;
}) {
  return (
    <div
      className="pt-32 pb-16 px-4 md:px-8"
      style={{ backgroundColor: dark ? "#0f1923" : "#b71c1c" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {titleNp && (
            <p className="text-lg mb-1" style={{ fontFamily: FONT_NEPALI, color: "rgba(255,255,255,0.55)" }}>{titleNp}</p>
          )}
          <h1 className="font-bold text-white leading-tight mb-2" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
            {title}
          </h1>
          <p className="text-sm" style={{ fontFamily: FONT_DISPLAY, color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em" }}>{subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────

function AboutPage() {
  return (
    <>
      <PageHero title="About Us" titleNp="हाम्रोबारे" subtitle="Maruti Cements Ltd. — Nepal's First Greenfield Cement Plant" />
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-bold mb-6" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#0f1923" }}>
                हाम्रो कथा — <span style={{ color: "#b71c1c" }}>Our Story</span>
              </h2>
              <p className="leading-relaxed mb-4" style={{ fontFamily: FONT_NEPALI, color: "#4b5563" }}>
                मारुती सिमेन्ट्स लिमिटेड (MCL) नेपालको पहिलो निजी क्षेत्रको ग्रीनफिल्ड सिमेन्ट प्लान्ट हो जुन रोटरी प्रविधिमा आधारित छ, चन्द्रउदयपुर, सिरहामा अवस्थित।
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: FONT_BODY, color: "#6b7280" }}>
                Maruti Cements Ltd. (MCL) operates as the first private sector Greenfield Cement Plant in Nepal based on Rotary Technology. Our employees are the driving force behind our many achievements.
              </p>
              <p className="text-sm leading-relaxed mb-10" style={{ fontFamily: FONT_BODY, color: "#6b7280" }}>
                Our culture is creative, strategic, and entrepreneurial. We maintain a clear vision to be the dominant force in Nepal&apos;s infrastructure development while maintaining industry leadership in customer value and employee safety.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {STATS.map((s) => (
                  <div key={s.label} className="p-6 border-l-4" style={{ borderColor: "#b71c1c", backgroundColor: "#f8f8f8" }}>
                    <div className="text-3xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c" }}>{s.number}</div>
                    <div className="text-sm mt-1" style={{ fontFamily: FONT_NEPALI, color: "#6b7280" }}>{s.label}</div>
                    <div className="text-[10px] uppercase tracking-wide mt-0.5" style={{ fontFamily: FONT_DISPLAY, color: "#9ca3af" }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format" alt="Factory" className="w-full object-cover aspect-[4/3]" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format" alt="Operations" className="w-full object-cover aspect-[4/3] mt-8" />
              </div>
              <div className="p-8" style={{ backgroundColor: "#0f1923" }}>
                <div className="mb-6">
                  <h3 className="font-bold mb-2 text-lg" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>Vision / दृष्टिकोण</h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "rgba(255,255,255,0.65)" }}>
                    नेपालको पूर्वाधार विकासमा अग्रणी र प्रभावशाली शक्ति बन्नु।
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>Mission / मिशन</h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "rgba(255,255,255,0.65)" }}>
                    ग्राहक मूल्य र कर्मचारी सुरक्षामा उद्योगको नेता बन्दै दिगो नेपाल बनाउन योगदान गर्नु।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Timeline Page ────────────────────────────────────────────────────────────

function TimelinePage() {
  return (
    <>
      <PageHero title="Timeline" titleNp="समयरेखा" subtitle="Our Journey Through the Years" />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ backgroundColor: "#e5e7eb" }} />
            {TIMELINE_EVENTS.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex mb-16 pl-12 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-14" : "md:pl-14"}`}>
                  <div className="p-8 border-l-4" style={{ borderColor: i % 2 === 0 ? "#b71c1c" : "#d4a017", backgroundColor: "#f8f8f8" }}>
                    <div className="text-4xl font-bold mb-2" style={{ fontFamily: FONT_DISPLAY, color: i % 2 === 0 ? "#b71c1c" : "#d4a017" }}>
                      {ev.year}
                    </div>
                    <h3 className="font-bold text-xl mb-1" style={{ fontFamily: FONT_NEPALI, color: "#0f1923" }}>
                      {ev.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ fontFamily: FONT_DISPLAY, color: "#9ca3af" }}>{ev.titleEn}</p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "#6b7280" }}>{ev.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
                <div
                  className="absolute left-0 md:left-1/2 top-8 md:-translate-x-1/2 flex items-center justify-center"
                  style={{ width: 28, height: 28, backgroundColor: i % 2 === 0 ? "#b71c1c" : "#d4a017" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Leadership Page ──────────────────────────────────────────────────────────

function LeadershipPage() {
  return (
    <>
      <PageHero title="Leadership" titleNp="नेतृत्व" subtitle="The People Behind Maruti Cements Ltd." />
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300"
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#b71c1c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#f3f4f6"; }}
              >
                <div
                  className="flex items-center justify-center py-12"
                  style={{ background: "linear-gradient(135deg, #0f1923 0%, #b71c1c 100%)" }}
                >
                  <div
                    className="flex items-center justify-center border-2"
                    style={{ width: 80, height: 80, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.35)" }}
                  >
                    <span className="text-3xl font-bold text-white" style={{ fontFamily: FONT_DISPLAY }}>{person.initial}</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-xl" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>{person.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-wide mt-1 mb-1" style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c" }}>{person.role}</p>
                  <p className="text-sm" style={{ fontFamily: FONT_NEPALI, color: "#9ca3af" }}>{person.roleNp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Projects Page ────────────────────────────────────────────────────────────

function ProjectsPage() {
  return (
    <>
      <PageHero title="Our Projects" titleNp="हाम्रा परियोजनाहरू" subtitle="Building Nepal's Future, One Structure at a Time" />
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="border overflow-hidden cursor-pointer transition-all duration-300"
                style={{ borderColor: "#f0f0f0" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#b71c1c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#f0f0f0"; }}
              >
                <div className="relative h-52 bg-gray-200 overflow-hidden group">
                  <img
                    src={`https://images.unsplash.com/photo-${proj.imgId}?w=600&h=400&fit=crop&auto=format`}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 text-white text-xs px-3 py-1 uppercase tracking-wide font-bold" style={{ backgroundColor: "#b71c1c", fontFamily: FONT_DISPLAY }}>
                    {proj.type}
                  </div>
                  <div className="absolute top-4 right-4 text-white text-xs px-3 py-1" style={{ backgroundColor: "rgba(0,0,0,0.55)", fontFamily: FONT_DISPLAY }}>
                    {proj.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>{proj.name}</h3>
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: "#6b7280" }}>
                    <MapPin size={13} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: FONT_NEPALI }}>{proj.location}, Nepal</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Certificates Page ────────────────────────────────────────────────────────

function CertificatesPage() {
  const certs = [
    { code: "ISO 9001:2015", title: "Quality Management System", titleNp: "गुणस्तर व्यवस्थापन प्रणाली", body: "Bureau Veritas Certification", year: "2015" },
    { code: "ISO 14001:2015", title: "Environmental Management System", titleNp: "वातावरणीय व्यवस्थापन प्रणाली", body: "Bureau Veritas Certification", year: "2020" },
    { code: "NS Certified", title: "Nepal Standards Certification", titleNp: "नेपाल मानक प्रमाणपत्र", body: "Nepal Bureau of Standards & Metrology", year: "2012" },
  ];

  return (
    <>
      <PageHero title="Certificates" titleNp="प्रमाणपत्रहरू" subtitle="Our Quality, Environmental & Standards Certifications" />
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="border-2 p-10 text-center cursor-pointer transition-all duration-300 group"
                style={{ borderColor: "#e5e7eb" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#d4a017"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb"; }}
              >
                <div
                  className="mx-auto flex items-center justify-center mb-7 border-2 transition-all group-hover:border-[#d4a017]"
                  style={{ width: 80, height: 80, borderColor: "#d4a017" }}
                >
                  <Award size={36} style={{ color: "#d4a017" }} />
                </div>
                <div className="text-2xl font-bold mb-2" style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c" }}>{cert.code}</div>
                <h3 className="font-bold mb-1" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>{cert.title}</h3>
                <p className="text-sm mb-3" style={{ fontFamily: FONT_NEPALI, color: "#6b7280" }}>{cert.titleNp}</p>
                <p className="text-xs mb-1" style={{ fontFamily: FONT_BODY, color: "#9ca3af" }}>{cert.body}</p>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>Since {cert.year}</p>
              </motion.div>
            ))}
          </div>
          <div className="p-10 border-l-4" style={{ borderColor: "#b71c1c", backgroundColor: "#f8f8f8" }}>
            <h3 className="font-bold text-xl mb-3" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>
              Our Commitment to Quality / गुणस्तरप्रति हाम्रो प्रतिबद्धता
            </h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "#6b7280" }}>
              मारुती सिमेन्ट्स लिमिटेडले उत्पादनका हरेक चरणमा कडा गुणस्तर नियन्त्रण प्रक्रिया अपनाउँछ। ISO 9001:2015 र ISO 14001:2015 प्रमाणपत्रहरूले हाम्रो उत्पादन प्रक्रियाको उत्कृष्टता र पर्यावरणीय जिम्मेवारीलाई प्रमाणित गर्दछ।
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Investor Relations Page ──────────────────────────────────────────────────

function InvestorPage() {
  const docs = [
    "Annual Report 2081/82 (2024/25)",
    "Annual Report 2080/81 (2023/24)",
    "Quarterly Report Q3 FY 2081/82",
    "Audited Financial Statements 2080/81",
    "Board of Directors Report",
    "IPO Prospectus",
  ];

  return (
    <>
      <PageHero title="Investor Relations" titleNp="लगानीकर्ता सम्बन्ध" subtitle="Financial Reports, Disclosures & Shareholder Information" dark />
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-bold mb-8" style={{ fontFamily: FONT_DISPLAY, fontSize: "1.8rem", color: "#0f1923" }}>
                Financial Documents / वित्तीय कागजातहरू
              </h2>
              <div className="space-y-3">
                {docs.map((doc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-5 p-5 border cursor-pointer group transition-all duration-200"
                    style={{ borderColor: "#e5e7eb" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#b71c1c"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(183,28,28,0.08)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb"; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
                  >
                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 44, height: 44, backgroundColor: "#b71c1c" }}>
                      <Download size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>{doc}</h3>
                      <p className="text-xs mt-0.5" style={{ fontFamily: FONT_BODY, color: "#9ca3af" }}>PDF Document</p>
                    </div>
                    <ArrowRight size={16} style={{ color: "#d1d5db", flexShrink: 0 }} className="group-hover:text-[#b71c1c] transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <div className="p-8 border-t-4" style={{ borderColor: "#b71c1c", backgroundColor: "#f8f8f8" }}>
                <h3 className="font-bold text-xl mb-5" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>Shareholder Info</h3>
                <div className="space-y-4">
                  {[["Stock Symbol", "MCL"], ["Exchange", "NEPSE"], ["Sector", "Manufacturing"], ["IPO Year", "2024"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b pb-3" style={{ borderColor: "#e5e7eb" }}>
                      <span className="text-xs uppercase tracking-wide" style={{ fontFamily: FONT_DISPLAY, color: "#9ca3af" }}>{k}</span>
                      <span className="font-bold text-sm" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-6" style={{ backgroundColor: "#0f1923" }}>
                <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "rgba(255,255,255,0.65)" }}>
                  लगानी सम्बन्धी थप जानकारीको लागि:<br /><br />
                  <span style={{ color: "#d4a017" }}>info@maruticements.com</span><br />
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>977-1-5357566</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── CSR Page ─────────────────────────────────────────────────────────────────

function CSRPage() {
  return (
    <>
      <PageHero title="CSR Activities" titleNp="सामाजिक उत्तरदायित्व" subtitle="Our Commitment to Community, People & Planet" />
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {CSR_ACTIVITIES.map((act, i) => {
              const Icon = act.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-8 border transition-all duration-300"
                  style={{ borderColor: "#e5e7eb" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#b71c1c"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb"; }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 52, height: 52, backgroundColor: "#b71c1c" }}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>{act.year}</div>
                    <h3 className="font-bold text-xl mb-0.5" style={{ fontFamily: FONT_NEPALI, color: "#0f1923" }}>{act.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c" }}>{act.titleEn}</p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "#6b7280" }}>{act.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["सामुदायिक विकास", "वातावरण संरक्षण", "कर्मचारी कल्याण"].map((t, i) => (
              <div key={i} className="text-center p-8" style={{ backgroundColor: i === 1 ? "#b71c1c" : "#0f1923" }}>
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>{["50+", "10K+", "100%"][i]}</div>
                <div className="text-white font-bold" style={{ fontFamily: FONT_NEPALI }}>{t}</div>
                <div className="text-xs mt-1 uppercase tracking-wide" style={{ fontFamily: FONT_DISPLAY, color: "rgba(255,255,255,0.4)" }}>
                  {["Community Projects", "Trees Planted", "Employee Benefits"][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Blog Page ────────────────────────────────────────────────────────────────

function BlogPage() {
  return (
    <>
      <PageHero title="Blogs" titleNp="ब्लग" subtitle="Technical Insights, Company News & Industry Guides" />
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.07 }}
                whileHover={{ y: -5 }}
                className="border cursor-pointer group overflow-hidden transition-all duration-300"
                style={{ borderColor: "#f0f0f0" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#b71c1c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#f0f0f0"; }}
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${blog.imgId}?w=600&h=300&fit=crop&auto=format`}
                    alt={blog.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1"
                      style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c", backgroundColor: "rgba(183,28,28,0.08)" }}
                    >
                      {blog.category}
                    </span>
                    <span className="text-xs" style={{ fontFamily: FONT_DISPLAY, color: "#9ca3af" }}>{blog.date}</span>
                  </div>
                  <h3 className="font-bold text-xl leading-tight mb-1" style={{ fontFamily: FONT_NEPALI, color: "#0f1923" }}>{blog.title}</h3>
                  <p className="text-[10px] uppercase tracking-wide mb-4" style={{ fontFamily: FONT_DISPLAY, color: "#9ca3af" }}>{blog.titleEn}</p>
                  <p
                    className="text-sm leading-relaxed mb-5 overflow-hidden"
                    style={{ fontFamily: FONT_NEPALI, color: "#6b7280", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
                  >
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: FONT_DISPLAY, color: "#b71c1c" }}>
                    थप पढ्नुहोस् <ArrowRight size={11} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const labelStyle = { fontFamily: FONT_DISPLAY, color: "#374151", fontSize: "0.7rem", letterSpacing: "0.18em" };
  const inputStyle = { fontFamily: FONT_BODY, borderColor: "#e5e7eb", color: "#0f1923", fontSize: "0.9rem" };

  return (
    <>
      <PageHero title="Contact Us" titleNp="सम्पर्क गर्नुहोस्" subtitle="We'd Love to Hear From You" />
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-7">
              {[
                {
                  Icon: MapPin, label: "Corporate Office / कर्पोरेट कार्यालय",
                  lines: ["9th Floor, Central Business Park", "Thapathali, Kathmandu, Nepal"],
                  color: "#b71c1c",
                },
                {
                  Icon: Building2, label: "Head Office / मुख्य कार्यालय",
                  lines: ["Dharan Road, Biratnagar", "Province No. 1, Nepal"],
                  color: "#b71c1c",
                },
                {
                  Icon: Factory, label: "Factory / कारखाना",
                  lines: ["Chandraudaipur, Siraha", "Madhesh Province, Nepal"],
                  color: "#b71c1c",
                },
                {
                  Icon: Phone, label: "Phone / फोन",
                  lines: ["HO: 021-590204/205/206/207/208", "KTM: 977-1-5357566, 5367377"],
                  color: "#d4a017",
                },
                {
                  Icon: Mail, label: "Email",
                  lines: ["info@maruticements.com", "info.ktm@maruticements.com"],
                  color: "#d4a017",
                },
              ].map(({ Icon, label, lines, color }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 40, height: 40, backgroundColor: color }}>
                    <Icon size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xs uppercase tracking-widest mb-1" style={{ fontFamily: FONT_DISPLAY, color: "#9ca3af" }}>{label}</p>
                    {lines.map((l) => <p key={l} className="text-sm" style={{ fontFamily: FONT_BODY, color: "#4b5563" }}>{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 border-2 text-center"
                  style={{ borderColor: "#d4a017" }}
                >
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>सन्देश पठाइयो!</h3>
                  <p className="text-sm" style={{ fontFamily: FONT_NEPALI, color: "#6b7280" }}>हामी छिट्टै तपाईंलाई सम्पर्क गर्नेछौं।</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block mb-1.5 font-bold uppercase" style={labelStyle}>Name / नाम *</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      type="text" required
                      className="w-full border px-4 py-3 focus:outline-none transition-colors"
                      style={inputStyle}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#b71c1c"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#e5e7eb"; }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-1.5 font-bold uppercase" style={labelStyle}>Email *</label>
                      <input
                        value={form.email}
                        onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                        type="email" required
                        className="w-full border px-4 py-3 focus:outline-none transition-colors"
                        style={inputStyle}
                        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#b71c1c"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#e5e7eb"; }}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5 font-bold uppercase" style={labelStyle}>Phone / फोन</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                        type="tel"
                        className="w-full border px-4 py-3 focus:outline-none transition-colors"
                        style={inputStyle}
                        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#b71c1c"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#e5e7eb"; }}
                        placeholder="+977-..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1.5 font-bold uppercase" style={labelStyle}>Message / सन्देश *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                      required rows={6}
                      className="w-full border px-4 py-3 focus:outline-none transition-colors resize-none"
                      style={inputStyle}
                      onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#b71c1c"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#e5e7eb"; }}
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white font-bold uppercase tracking-widest py-4 transition-colors"
                    style={{ fontFamily: FONT_DISPLAY, backgroundColor: "#b71c1c" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#9b1515"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b71c1c"; }}
                  >
                    Send Message / पठाउनुहोस्
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── IPO Page ─────────────────────────────────────────────────────────────────

function IPOPage() {
  const [boid, setBoid] = useState("");
  const [citizen, setCitizen] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
    setTimeout(() => setChecked(false), 5000);
  };

  return (
    <>
      <PageHero title="IPO Allotment Result" titleNp="आईपीओ आवंटन नतिजा" subtitle="Check Your Share Allotment Status" dark />
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-bold mb-6" style={{ fontFamily: FONT_DISPLAY, fontSize: "1.9rem", color: "#0f1923" }}>
                आफ्नो आवंटन स्थिति जाँच गर्नुहोस्
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: FONT_NEPALI, color: "#6b7280" }}>
                आफ्नो BOID नम्बर र नागरिकता नम्बर प्रविष्ट गरी मारुती सिमेन्ट्स लिमिटेडको IPO आवंटन नतिजा हेर्नुहोस्।
              </p>
              {checked ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 border-l-4"
                  style={{ borderColor: "#d4a017", backgroundColor: "#fefdf5" }}
                >
                  <p className="font-bold text-lg mb-1" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>Result Checked</p>
                  <p className="text-sm" style={{ fontFamily: FONT_NEPALI, color: "#6b7280" }}>नतिजाको लागि आधिकारिक NEPSE पोर्टल वा तपाईंको DP को वेबसाइट जाँच गर्नुहोस्।</p>
                </motion.div>
              ) : (
                <form onSubmit={handleCheck} className="space-y-4">
                  <div>
                    <label className="block mb-1.5 font-bold uppercase text-[11px] tracking-widest" style={{ fontFamily: FONT_DISPLAY, color: "#374151" }}>BOID / DP Number</label>
                    <input
                      value={boid}
                      onChange={(e) => setBoid(e.target.value)}
                      required
                      className="w-full border px-4 py-3 text-sm focus:outline-none"
                      style={{ borderColor: "#e5e7eb", fontFamily: FONT_BODY }}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#b71c1c"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#e5e7eb"; }}
                      placeholder="1300000000000000"
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5 font-bold uppercase text-[11px] tracking-widest" style={{ fontFamily: FONT_DISPLAY, color: "#374151" }}>Citizenship No. / नागरिकता नम्बर</label>
                    <input
                      value={citizen}
                      onChange={(e) => setCitizen(e.target.value)}
                      required
                      className="w-full border px-4 py-3 text-sm focus:outline-none"
                      style={{ borderColor: "#e5e7eb", fontFamily: FONT_BODY }}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#b71c1c"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#e5e7eb"; }}
                      placeholder="Citizenship number"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white font-bold uppercase tracking-widest py-4"
                    style={{ fontFamily: FONT_DISPLAY, backgroundColor: "#b71c1c" }}
                  >
                    Check Result / नतिजा हेर्नुहोस्
                  </button>
                </form>
              )}
            </div>
            <div className="space-y-5">
              <div className="p-8 border-l-4" style={{ borderColor: "#d4a017", backgroundColor: "#f8f8f8" }}>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: FONT_DISPLAY, color: "#0f1923" }}>IPO Notice / सूचना</h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_NEPALI, color: "#6b7280" }}>
                  मारुती सिमेन्ट्स लिमिटेडको आरम्भिक सार्वजनिक निष्काशन (IPO) सम्बन्धी थप जानकारीको लागि हाम्रो कार्यालयमा सम्पर्क गर्नुहोस् वा NEPSE को आधिकारिक वेबसाइट हेर्नुहोस्।
                </p>
              </div>
              <div className="p-8" style={{ backgroundColor: "#0f1923" }}>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>Contact for IPO Queries</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                    <Mail size={14} style={{ color: "#d4a017", flexShrink: 0 }} />
                    <span style={{ fontFamily: FONT_BODY }}>info@maruticements.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                    <Phone size={14} style={{ color: "#d4a017", flexShrink: 0 }} />
                    <span style={{ fontFamily: FONT_BODY }}>977-1-5357566</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                    <MapPin size={14} style={{ color: "#d4a017", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: FONT_BODY }}>9th Floor, Central Business Park, Thapathali, Kathmandu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ navigate }: { navigate: (p: Page) => void }) {
  const go = (p: Page) => { navigate(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <footer style={{ backgroundColor: "#0f1923" }}>
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <button onClick={() => go("home")} className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center border-2" style={{ width: 44, height: 44, backgroundColor: "#b71c1c", borderColor: "#d4a017" }}>
                <span className="text-white font-bold text-xl" style={{ fontFamily: FONT_DISPLAY }}>M</span>
              </div>
              <div>
                <div className="font-bold tracking-wider uppercase text-sm text-white" style={{ fontFamily: FONT_DISPLAY }}>Maruti Cements</div>
                <div className="text-[10px] tracking-widest font-semibold" style={{ color: "#d4a017" }}>MCL</div>
              </div>
            </button>
            <p className="text-lg mb-1" style={{ fontFamily: FONT_NEPALI, color: "#d4a017" }}>विश्वासको एक दशक</p>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: FONT_BODY, color: "rgba(255,255,255,0.4)" }}>
              Nepal&apos;s first private sector Greenfield Cement Plant, building trust since 2010.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="flex items-center justify-center border transition-all duration-200"
                  style={{ width: 34, height: 34, borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "#d4a017"; b.style.color = "#d4a017"; }}
                  onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "rgba(255,255,255,0.15)"; b.style.color = "rgba(255,255,255,0.4)"; }}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-5" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>Our Offices</h3>
            <div className="space-y-5">
              <div>
                <p className="font-bold text-xs uppercase tracking-wide mb-2" style={{ fontFamily: FONT_DISPLAY, color: "rgba(255,255,255,0.6)" }}>Corporate Office</p>
                <div className="space-y-1.5 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  <div className="flex items-start gap-2">
                    <MapPin size={12} className="mt-0.5 flex-shrink-0" style={{ color: "#b71c1c" }} />
                    <span style={{ fontFamily: FONT_BODY }}>9th Floor, Central Business Park, Thapathali, Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={12} className="flex-shrink-0" style={{ color: "#b71c1c" }} />
                    <span style={{ fontFamily: FONT_BODY }}>977-1-5357566, 5367377</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={12} className="flex-shrink-0" style={{ color: "#b71c1c" }} />
                    <span style={{ fontFamily: FONT_BODY }}>info.ktm@maruticements.com</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-xs uppercase tracking-wide mb-2" style={{ fontFamily: FONT_DISPLAY, color: "rgba(255,255,255,0.6)" }}>Head Office</p>
                <div className="space-y-1.5 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  <div className="flex items-start gap-2">
                    <MapPin size={12} className="mt-0.5 flex-shrink-0" style={{ color: "#b71c1c" }} />
                    <span style={{ fontFamily: FONT_BODY }}>Dharan Road, Biratnagar, Nepal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={12} className="flex-shrink-0" style={{ color: "#b71c1c" }} />
                    <span style={{ fontFamily: FONT_BODY }}>021-590204/205/206/207/208</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={12} className="flex-shrink-0" style={{ color: "#b71c1c" }} />
                    <span style={{ fontFamily: FONT_BODY }}>info@maruticements.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-5" style={{ fontFamily: FONT_DISPLAY, color: "#d4a017" }}>Quick Links</h3>
            <div className="grid grid-cols-1 gap-1.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => go(item.page)}
                  className="text-left text-sm transition-colors"
                  style={{ fontFamily: FONT_DISPLAY, color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#d4a017"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)"; }}
                >
                  → {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t px-4 md:px-8 py-5" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ fontFamily: FONT_DISPLAY, color: "rgba(255,255,255,0.25)" }}>
            © 2026 Maruti Cements Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ fontFamily: FONT_NEPALI, color: "rgba(255,255,255,0.2)" }}>
            विश्वासको एक दशक — A Decade of Trust
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [introComplete, setIntroComplete] = useState(false);

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage navigate={navigate} />;
      case "about": return <AboutPage />;
      case "timeline": return <TimelinePage />;
      case "leadership": return <LeadershipPage />;
      case "projects": return <ProjectsPage />;
      case "certificates": return <CertificatesPage />;
      case "investor": return <InvestorPage />;
      case "csr": return <CSRPage />;
      case "blog": return <BlogPage />;
      case "contact": return <ContactPage />;
      case "ipo": return <IPOPage />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: FONT_BODY }}>
      <AnimatePresence>
        {!introComplete && (
          <IntroScreen key="intro" onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {introComplete && (
        <>
          <Navbar currentPage={currentPage} navigate={navigate} />
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer navigate={navigate} />
        </>
      )}
    </div>
  );
}

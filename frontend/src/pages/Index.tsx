import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ChevronDown,
  Users,
  Cpu,
  Building,
  MapPin,
  Package,
  ArrowRight,
  Settings,
} from "lucide-react";

const modules = [
  {
    name: "User Module",
    path: "/users",
    icon: Users,
    description:
      "Manage user accounts, roles, and permissions with advanced authentication",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Equipment Module",
    path: "/equipment",
    icon: Cpu,
    description:
      "Track and monitor telecom equipment with real-time status updates",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Vendor Module",
    path: "/vendors",
    icon: Package,
    description: "Streamline vendor relationships and procurement processes",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Company Module",
    path: "/company",
    icon: Building,
    description:
      "Centralized company data management and organizational structure",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Worksite Module",
    path: "/worksite",
    icon: MapPin,
    description:
      "Coordinate worksite operations and field management efficiently",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
        />
      ))}
    </div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <ParticleField />
    </div>
  );
};

const TypewriterText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

const FloatingCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 1, opacity: 1 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative"
  >
    {children}
  </motion.div>
);

const LandingPage = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const heroRef = useRef(null);
  const modulesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const modulesInView = useInView(modulesRef, { once: true, margin: "-100px" });

  const scrollToModules = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white w-full overflow-x-hidden relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: y1 }}
          className="z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              TIMS
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
              <TypewriterText
                text="Telecommunication Infrastructure Management System"
                className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              />
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={scrollToModules}
            className="mt-12 group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Modules
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              layoutId="button-bg"
            />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={scrollToModules}
          >
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Modules Section */}
      <section ref={modulesRef} className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={modulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Powerful Modules
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                animate={modulesInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                onClick={() => navigate(module.path)}
                className="group relative cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${module.gradient} p-[1px] hover:shadow-2xl transition-all duration-500`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 h-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />

                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${module.gradient} rounded-xl mb-6 shadow-lg`}
                    >
                      <module.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                      {module.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {module.description}
                    </p>

                    <motion.div
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

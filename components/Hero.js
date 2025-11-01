import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// === 3D Stars Component (for Background) ===
function Stars() {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled>
      <PointMaterial transparent color="#60a5fa" size={0.005} sizeAttenuation />
    </Points>
  );
}

// === Animated Background using Three.js ===
function AnimatedBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <Stars />
    </Canvas>
  );
}

// === Main Hero Section ===
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section id="home" className="hero-section">
      {/* 3D Animated Background */}
      <AnimatedBackground />

      {/* Animated Gradient Following Mouse */}
      <div
        className="mouse-follow-gradient"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.15), transparent 90%)`,
        }}
      />
      <div className="overlay-gradient" />

      {/* Hero Content */}
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-badge"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            🚀 Available for new opportunities
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Sheikh <span className="gradient-text">Mohin</span>
          </motion.h1>

          <motion.div
            className="hero-subtitle-container"
            variants={itemVariants}
          >
            <motion.h2
              className="hero-subtitle"
              variants={floatingVariants}
              animate="animate"
            >
              Backend Developer (NodeJS)
            </motion.h2>
            <div className="pulse-dot"></div>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Experienced Backend Developer specializing in{" "}
            <span className="highlight">Node.js</span>,{" "}
            <span className="highlight">TypeScript</span>, and{" "}
            <span className="highlight">cloud technologies</span>. I build
            robust, scalable server-side applications with modern architectures.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <div className="btn-hover-effect"></div>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              className="btn btn-outline"
              download
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(139, 92, 246, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div className="hero-links" variants={itemVariants}>
            {[
              // {
              //   name: "LinkedIn",
              //   url: "https://linkedin.com/in/your-profile",
              //   icon: "💼",
              // },
              // {
              //   name: "GitHub",
              //   url: "https://github.com/your-username",
              //   icon: "⚡",
              // },
              // {
              //   name: "Dev.to",
              //   url: "https://dev.to/your-username",
              //   icon: "📝",
              // },
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <span className="social-icon">{link.icon}</span>
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="scroll-indicator"
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="scroll-line"></div>
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
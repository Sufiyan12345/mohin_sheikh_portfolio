import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        setIsClient(true);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const quickLinks = [
        { name: 'Home', href: '#home', icon: '' },
        { name: 'About', href: '#about', icon: '' },
        { name: 'Projects', href: '#projects', icon: '' },
        { name: 'Skills', href: '#skills', icon: '' },
        { name: 'Contact', href: '#contact', icon: '' }
    ];

    const services = [
        { name: 'Web Development', href: '#services', icon: '' },
        { name: 'UI/UX Design', href: '#services', icon: '' },
        { name: 'Mobile Apps', href: '#services', icon: '' },
        { name: 'Consulting', href: '#services', icon: '' }
    ];

    const socialLinks = [
        { 
            name: 'GitHub', 
            href: 'https://github.com', 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            ),
            label: 'GitHub',
            bgColor: '#333'
        },
        { 
            name: 'LinkedIn', 
            href: 'https://linkedin.com', 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
            ),
            label: 'LinkedIn',
            bgColor: '#0077b5'
        },
        { 
            name: 'Twitter', 
            href: 'https://twitter.com', 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
            ),
            label: 'Twitter',
            bgColor: '#1da1f2'
        },
        { 
            name: 'Email', 
            href: 'mailto:sheikhmohin2k@gmail.com', 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
            ),
            label: 'Email',
            bgColor: '#ea4335'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Professional Logo Component
    const ProfessionalLogo = () => (
        <motion.div 
            className="professional-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="logo-icon">
                <svg viewBox="0 0 100 100" className="logo-svg">
                    {/* Modern abstract M shape */}
                    <path 
                        d="M20,20 L40,60 L60,30 L80,70 L80,20 L60,20 L40,50 L20,20 Z" 
                        fill="url(#gradient)"
                        className="logo-path"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="50%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="logo-text">
                <span className="logo-name">MOHIN</span>
                <span className="logo-tagline">Full Stack Developer</span>
            </div>
        </motion.div>
    );

    // Alternative Logo Option - Code Inspired
    const CodeLogo = () => (
        <motion.div 
            className="code-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="logo-icon">
                <svg viewBox="0 0 100 100" className="logo-svg">
                    {/* Code brackets style logo */}
                    <path 
                        d="M30,25 L30,75 L20,75 L20,25 L30,25 Z M40,35 L50,50 L40,65 L45,70 L60,50 L45,30 L40,35 Z M70,25 L70,75 L80,75 L80,25 L70,25 Z" 
                        fill="url(#codeGradient)"
                        className="logo-path"
                    />
                    <defs>
                        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="logo-text">
                <span className="logo-name">MOHIN.dev</span>
                <span className="logo-tagline">Building Digital Dreams</span>
            </div>
        </motion.div>
    );

    // Custom Ripple Component
    const RippleButton = ({ children, className = "", style = {}, ...props }) => {
        const createRipple = (event) => {
            const button = event.currentTarget;
            const circle = document.createElement("span");
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
            circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
            circle.classList.add("ripple");

            const ripple = button.getElementsByClassName("ripple")[0];
            if (ripple) {
                ripple.remove();
            }

            button.appendChild(circle);
        };

        return (
            <button
                className={`relative overflow-hidden ${className}`}
                style={style}
                onMouseDown={createRipple}
                {...props}
            >
                {children}
            </button>
        );
    };

    if (!isClient) {
        return (
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <span className="footer-logo-icon">⚡</span>
                                <span className="footer-logo-text">Portfolio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="footer">
            {/* Background Elements */}
            <div className="footer-background">
                <div className="footer-shape footer-shape-1"></div>
                <div className="footer-shape footer-shape-2"></div>
                <div className="footer-glow"></div>
            </div>

            <div className="footer-content">
                <motion.div
                    className="footer-main"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Brand Section with Professional Logo */}
                    <motion.div className="footer-brand" variants={itemVariants}>
                        <a href="#home" className="footer-logo-link">
                            {/* Choose one of the logos below - comment/uncomment to switch */}
                            
                            {/* Option 1: Modern Abstract Logo */}
                            <ProfessionalLogo />
                            
                            {/* Option 2: Code Inspired Logo */}
                            {/* <CodeLogo /> */}
                        </a>
                        
                        <p className="footer-description">
                            Crafting digital experiences with clean code and innovative solutions. 
                            Specializing in modern web technologies and user-centric design.
                        </p>
                        
                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <motion.div
                                    key={social.name}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <RippleButton
                                        className="social-link-footer"
                                        aria-label={social.label}
                                        style={{ backgroundColor: social.bgColor }}
                                    >
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link-inner"
                                        >
                                            {social.icon}
                                        </a>
                                    </RippleButton>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className="footer-links-group" variants={itemVariants}>
                        <h4 className="footer-heading">Navigation</h4>
                        {quickLinks.map((link) => (
                            <motion.a 
                                key={link.name} 
                                href={link.href} 
                                className="footer-link"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <span className="footer-link-icon">{link.icon}</span>
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Services */}
                    <motion.div className="footer-links-group" variants={itemVariants}>
                        <h4 className="footer-heading">Services</h4>
                        {services.map((service) => (
                            <motion.a 
                                key={service.name} 
                                href={service.href} 
                                className="footer-link"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <span className="footer-link-icon">{service.icon}</span>
                                {service.name}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div className="footer-links-group" variants={itemVariants}>
                        <h4 className="footer-heading">Get In Touch</h4>
                        <div className="footer-contact-info">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div>
                                    <div className="contact-value">sheikhmohin2k@gmail.com</div>
                                    <div className="contact-subtext">Primary contact</div>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📱</span>
                                <div>
                                    <div className="contact-value">+91 95294 68439</div>
                                    <div className="contact-subtext">Available 10AM - 7PM</div>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div>
                                    <div className="contact-value">Nagpur, Maharashtra</div>
                                    <div className="contact-subtext">440026, India</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="footer-copyright">
                        © 2024 Mohin Sheikh. All rights reserved.
                    </div>
                    <div className="footer-made-with">
                        Crafted with <span className="heart">❤️</span> using React & Next.js
                    </div>
                    <div className="footer-legal">
                        <a href="/privacy" className="legal-link">Privacy Policy</a>
                        <span className="legal-separator">•</span>
                        <a href="/terms" className="legal-link">Terms of Service</a>
                    </div>
                </motion.div>
            </div>

            {/* Back to Top Button */}
            {isClient && (
                <motion.button
                    className={`back-to-top ${isVisible ? 'visible' : ''}`}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 15l-6-6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.button>
            )}
        </footer>
    );
}
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const subject = `Portfolio Contact from ${formData.name}`;
            const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
            window.location.href = `mailto:sheikhmohin2k@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const contactInfo = [
        {
            icon: "📧",
            label: "Email",
            value: "sheikhmohin2k@gmail.com",
            link: "mailto:sheikhmohin2k@gmail.com",
            color: "#8B5CF6"
        },
        {
            icon: "📱",
            label: "Phone",
            value: "+91 95294 68439",
            link: "tel:+919529468439",
            color: "#06B6D4"
        },
        {
            icon: "📍",
            label: "Location",
            value: "Nagpur, Maharashtra - 440026",
            color: "#10B981"
        }
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/your-profile",
            icon: "💼",
            color: "#0A66C2"
        },
        {
            name: "GitHub",
            url: "https://github.com/your-username",
            icon: "⚡",
            color: "#333"
        },
        {
            name: "Dev.to",
            url: "https://dev.to/your-username",
            icon: "📝",
            color: "#0A0A0A"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/your-username",
            icon: "🐦",
            color: "#1DA1F2"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <section id="contact" className="contact-section">
            {/* Background Elements */}
            <div className="background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="floating-particles">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            '--delay': `${i * 0.5}s`,
                            '--duration': `${15 + i * 2}s`,
                            left: `${Math.random() * 100}%`,
                        }} />
                    ))}
                </div>
            </div>

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <motion.h2 style={{color:'white'}}
                        className="section-title"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                    >
                        Let's Work Together
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Ready to bring your ideas to life? Let's discuss your next project.
                    </motion.p>
                </motion.div>

                <div ref={ref} className="contact-container">
                    <motion.div
                        className="contact-content"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {/* Contact Information */}
                        <motion.div
                            className="contact-info-section"
                            variants={itemVariants}
                        >
                            <motion.h3
                                className="info-title"
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Get In Touch
                            </motion.h3>
                            
                            <motion.p
                                className="info-description"
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                I'm always open to discussing new opportunities, creative ideas, or opportunities to be part of your vision.
                            </motion.p>

                            <div className="contact-info-cards">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.link}
                                        className="contact-info-card"
                                        variants={cardVariants}
                                        whileHover="hover"
                                        style={{ '--accent-color': info.color }}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                    >
                                        <div className="contact-icon" style={{ backgroundColor: info.color }}>
                                            {info.icon}
                                        </div>
                                        <div className="contact-details">
                                            <span className="contact-label">{info.label}</span>
                                            <span className="contact-value">{info.value}</span>
                                        </div>
                                        <div className="contact-arrow">→</div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            {/* <motion.div 
                                className="social-links-section"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 1.1 }}
                            >
                                <h4 className="social-title">Follow Me</h4>
                                <div className="social-links">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            style={{ '--social-color': social.color }}
                                            whileHover={{ 
                                                scale: 1.2,
                                                y: -5 ,
                                                backgroundColor: `${social.color}20`
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                                        >
                                            <span className="social-icon">{social.icon}</span>
                                            <span className="social-name">{social.name}</span>
                                        </motion.a>
                                    ))}
                                </div> */}
                            {/* </motion.div> */}
                        </motion.div>

                        

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-section"
                            variants={itemVariants}
                        >
                            <motion.form
                                className="contact-form"
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <div className="form-header">
                                    <h3>Send Message</h3>
                                    <p>I'll get back to you within 24 hours</p>
                                </div>

                                <div className="form-group">
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder=" "
                                        />
                                        <label htmlFor="name" className="form-label">Your Name</label>
                                        <div className="input-highlight"></div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-wrapper">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder=" "
                                        />
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <div className="input-highlight"></div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-wrapper">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="form-input textarea"
                                            placeholder=" "
                                        ></textarea>
                                        <label htmlFor="message" className="form-label">Your Message</label>
                                        <div className="input-highlight"></div>
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus ? submitStatus : ''}`}
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="btn-text">
                                        {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                                    </span>
                                    <div className="btn-loader"></div>
                                    <div className="btn-success">✓</div>
                                </motion.button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        className="success-message"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        🎉 Thank you! Your message has been sent successfully.
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        className="error-message"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        ❌ Something went wrong. Please try again.
                                    </motion.div>
                                )}

                            </motion.form>
                        </motion.div>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
}
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real implementation, you would connect this to a backend service
        // For now, we'll use a mailto link as fallback
        const subject = `Contact from ${formData.name}`;
        const body = formData.message;
        window.location.href = `mailto:sheikhmohin2k@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="contact-item">
                            <strong>Email:</strong>
                            <a href="mailto:sheikhmohin2k@gmail.com">sheikhmohin2k@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <strong>Phone:</strong>
                            <a href="tel:+919529468439">+91 95294 68439</a> /
                            <a href="tel:+917378609593"> +91 73786 09593</a>
                        </div>
                        <div className="contact-item">
                            <strong>Location:</strong>
                            <span>Nagpur, Maharashtra - 440026</span>
                        </div>
                        <div className="contact-links">
                            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://dev.to/your-username" target="_blank" rel="noopener noreferrer">Dev.to</a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>

            <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .contact-info h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--dark);
        }
        
        .contact-item {
          margin-bottom: 1rem;
        }
        
        .contact-item strong {
          display: inline-block;
          width: 80px;
          color: var(--dark);
        }
        
        .contact-item a, .contact-item span {
          color: var(--secondary);
          text-decoration: none;
          margin-left: 0.5rem;
        }
        
        .contact-item a:hover {
          color: var(--primary);
        }
        
        .contact-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .contact-links a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }
        
        .contact-links a:hover {
          text-decoration: underline;
        }
        
        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--dark);
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border);
          border-radius: 0.375rem;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </section>
    );
}
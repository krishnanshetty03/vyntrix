import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import styles from './ContactForm.module.css';

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        // Add the specific Web3Forms API key from environment variables
        const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!apiKey) {
            setStatus('Error: API key is not configured.');
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Success! Your requirement has been sent.');
                form.reset();
                setTimeout(() => {
                    setStatus('');
                    onClose();
                }, 3000);
            } else {
                console.error("Error from Web3Forms", data);
                setStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('An error occurred. Please try again later.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                
                {/* Decorative top tape/notch */}
                <div className={styles.notch}></div>

                {/* Close Button */}
                <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className={styles.container}>
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            LET'S BUILD TOGETHER
                        </div>
                    </div>

                    <h2 className={styles.title}>
                        READY TO TRANSFORM<br />
                        <span className={styles.titleOutline}>YOUR BUSINESS?</span>
                    </h2>
                    
                    <p className={styles.subtitle}>
                        Get a custom pricing proposal tailored to your specific operational needs and scale.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        {/* Web3Forms required hidden field */}
                        <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ""} />
                        
                        {/* Optional: spam protection mapping */}
                        <input type="checkbox" name="botcheck" className={styles.hidden} style={{ display: 'none' }} />

                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>NAME *</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className={styles.input} 
                                placeholder="Your full name" 
                                required 
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>EMAIL *</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className={styles.input} 
                                placeholder="you@company.com" 
                                required 
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="company" className={styles.label}>COMPANY</label>
                                <input 
                                    type="text" 
                                    id="company" 
                                    name="company" 
                                    className={styles.input} 
                                    placeholder="Company name" 
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>PHONE</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    className={styles.input} 
                                    placeholder="+91 XXXXX XXXXX" 
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="requirement" className={styles.label}>REQUIREMENT *</label>
                            <textarea 
                                id="requirement" 
                                name="requirement" 
                                className={styles.textarea} 
                                placeholder="Tell us about your requirements, team size, and what solutions interest you..." 
                                required
                                rows={3}
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            <Send size={18} />
                            <span>SEND REQUIREMENT</span>
                        </button>

                        {status && (
                            <div className={styles.statusMessage}>
                                {status}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

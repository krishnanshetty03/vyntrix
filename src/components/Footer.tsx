import React from 'react';
import { Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>

                <div className={styles.contactItems}>

                    {/* Phone Contact */}
                    <div className={styles.contactBlock}>
                        <div className={styles.iconWrapper}>
                            <Phone size={20} className={styles.icon} fill="currentColor" />
                        </div>
                        <div className={styles.contactDetails}>
                            <span className={styles.label}>CALL US</span>
                            <a href="tel:+918122880841" className={styles.value}>
                                +91 8122880841
                            </a>
                        </div>
                    </div>

                    {/* Email Contact */}
                    <div className={styles.contactBlock}>
                        <div className={styles.iconWrapper}>
                            <Mail size={20} className={styles.icon} />
                        </div>
                        <div className={styles.contactDetails}>
                            <span className={styles.label}>EMAIL US</span>
                            <a href="mailto:vyntrixinnovations@gmail.com" className={styles.value}>
                                vyntrixinnovations@gmail.com
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;

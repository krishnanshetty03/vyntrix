import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoSection}>
                <div className={styles.logoIcon}>
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="26"
                            height="26"
                            rx="6"
                            stroke="#FF4D00"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M9 14L13 18L19 10"
                            stroke="#FF4D00"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <span className={styles.logoText}>Vyntrix Innovations</span>
            </div>

            <div className={styles.navLinks}>
                <a href="#services" className={styles.navLink}>Our Services</a>
                <a href="#case-study-appointment" className={styles.navLink}>Case Studies</a>
                <a href="#cta" className={styles.navLink}>Pricing</a>
            </div>

            <span className={styles.navRight}>AI Automation Studio</span>
        </nav>
    );
};

export default Navbar;

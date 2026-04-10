import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoSection}>
                <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src="/logo.png" 
                        alt="Vyntrix Logo" 
                        style={{ height: '70px', width: 'auto', objectFit: 'contain' }} 
                    />
                </a>
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

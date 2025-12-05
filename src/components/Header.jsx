import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    행복한가정의학과
                </div>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
                    <a onClick={() => scrollToSection('profile')}>의료진 소개</a>
                    <a onClick={() => scrollToSection('hours')}>진료시간</a>
                    <a onClick={() => scrollToSection('features')}>병원둘러보기</a>
                    <a onClick={() => scrollToSection('location')}>오시는 길</a>
                </nav>

                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;

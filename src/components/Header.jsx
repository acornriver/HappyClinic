import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const NAV_ITEMS = [
    { id: 'services', label: '진료과목' },
    { id: 'profile', label: '의료진 소개' },
    { id: 'hours', label: '진료시간' },
    { id: 'features', label: '병원둘러보기' },
    { id: 'location', label: '오시는 길' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <a href="#home" className={styles.logo} onClick={closeMenu}>
                    행복한가정의학과
                </a>

                <nav
                    id="main-nav"
                    className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}
                    aria-label="주요 메뉴"
                >
                    {NAV_ITEMS.map(item => (
                        <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>
                    ))}
                </nav>

                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(open => !open)}
                    aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="main-nav"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;

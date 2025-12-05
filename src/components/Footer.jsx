import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.title}>행복한가정의학과</div>
                <div className={styles.info}>
                    <span>주소: 충남 천안시 동남구 터미널9길 25</span>
                    <span>대표원장: 강기형</span> {/* Updated based on assumption or generic if unknown, using generic representative from request */}
                    <span>사업자등록번호: 301-91-18643</span>
                    <span>전화번호: 0507-1346-6575</span>
                </div>
                <div className={styles.copyright}>
                    &copy; 2025 Happy Family Medicine. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.name}>행복한가정의학과</p>
                <p className={styles.info}>
                    대표자: 강기형 | 사업자등록번호: 301-91-18643 | 충남 천안시 동남구 터미널9길 25<br />
                    Tel: 0507-1346-6575
                </p>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Happy Family Medicine. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

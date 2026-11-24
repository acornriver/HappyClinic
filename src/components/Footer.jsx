import styles from './Footer.module.css';
import { CLINIC } from '../data/clinic';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.title}>행복한가정의학과</div>
                <div className={styles.info}>
                    <span>주소: {CLINIC.address}</span>
                    <span>대표원장: 강기형</span>
                    <span>사업자등록번호: 301-91-18643</span>
                    <span>전화번호: <a href={CLINIC.tel}>{CLINIC.phone}</a></span>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} 행복한가정의학과. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

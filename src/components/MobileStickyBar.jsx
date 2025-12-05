import styles from './MobileStickyBar.module.css';
import { Phone, MapPin } from 'lucide-react';

const MobileStickyBar = () => {
    return (
        <div className={styles.stickyBar}>
            <a href="tel:0507-1346-6575" className={`${styles.button} ${styles.callBtn}`}>
                <Phone size={20} />
                전화 걸기
            </a>
            <a href="#location" className={`${styles.button} ${styles.mapBtn}`}>
                <MapPin size={20} />
                오시는 길
            </a>
        </div>
    );
};

export default MobileStickyBar;

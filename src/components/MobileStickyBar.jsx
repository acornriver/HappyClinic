import styles from './MobileStickyBar.module.css';
import { Phone, CalendarCheck, MapPin } from 'lucide-react';
import { CLINIC } from '../data/clinic';

const MobileStickyBar = () => {
    return (
        <div className={styles.stickyBar}>
            <a href={CLINIC.tel} className={`${styles.button} ${styles.callBtn}`}>
                <Phone size={20} />
                전화
            </a>
            <a
                href={CLINIC.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.bookBtn}`}
            >
                <CalendarCheck size={20} />
                예약
            </a>
            <a href="#location" className={`${styles.button} ${styles.mapBtn}`}>
                <MapPin size={20} />
                길찾기
            </a>
        </div>
    );
};

export default MobileStickyBar;

import styles from './Hours.module.css';
import { Clock } from 'lucide-react';

const Hours = () => {
    return (
        <section id="hours" className={`section ${styles.hoursSection}`}>
            <div className="container">
                <h2 className="section-title">진료 시간 안내</h2>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Clock size={40} className={styles.icon} />
                    </div>
                    <div className={styles.schedule}>
                        <div className={styles.row}>
                            <span className={styles.label}>평일 (월/화/목/금)</span>
                            <span className={styles.time}>09:00 - 18:00</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>수요일 / 토요일 (Wed / Sat)</span>
                            <span className={styles.time}>09:00 - 12:00 (오전 진료)</span>
                        </div>
                        <div className={`${styles.row} ${styles.sunday}`}>
                            <span className={styles.label}>일요일 (오후진료)</span>
                            <span className={styles.time}>15:00 - 17:30</span>
                        </div>
                        <div className={styles.lunchRow}>
                            <span className={styles.lunchLabel}>점심시간</span>
                            <span className={styles.lunchTime}>12:30 - 14:00</span>
                        </div>
                        <div className={styles.note}>
                            ※ 공휴일은 휴진입니다. (네이버 지도 공지 참조)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hours;

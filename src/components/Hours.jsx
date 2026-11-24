import { useEffect, useState } from 'react';
import styles from './Hours.module.css';
import { Clock } from 'lucide-react';
import { getOpenStatus } from '../data/clinic';

const ROWS = [
    { days: [1, 2, 4, 5], label: '평일 (월·화·목·금)', time: '09:00 - 18:00' },
    { days: [3, 6], label: '수요일 · 토요일', time: '09:00 - 12:00 (오전 진료)' },
    { days: [0], label: '일요일 (오후 진료)', time: '15:00 - 17:30', sunday: true },
];

const STATUS_TEXT = {
    open: '지금 진료 중',
    lunch: '점심시간 (14:00 진료 재개)',
    before: '진료 시작 전',
    closed: '오늘 진료 종료',
};

const Hours = () => {
    const [{ day, status, today }, setOpenStatus] = useState(() => getOpenStatus());

    // 페이지를 오래 열어 두어도 상태가 맞도록 1분마다 갱신
    useEffect(() => {
        const timer = setInterval(() => setOpenStatus(getOpenStatus()), 60 * 1000);
        return () => clearInterval(timer);
    }, []);

    const statusText = status === 'before' && today
        ? `진료 시작 전 (${today.open} 시작)`
        : STATUS_TEXT[status];

    return (
        <section id="hours" className={`section ${styles.hoursSection}`}>
            <div className="container">
                <h2 className="section-title">진료 시간 안내</h2>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Clock size={40} className={styles.icon} />
                    </div>
                    <div className={styles.statusWrapper}>
                        <span className={`${styles.status} ${styles[status]}`} aria-live="polite">
                            <span className={styles.dot} aria-hidden="true" />
                            {statusText}
                        </span>
                    </div>
                    <div className={styles.schedule}>
                        {ROWS.map(row => {
                            const isToday = row.days.includes(day);
                            return (
                                <div
                                    key={row.label}
                                    className={`${styles.row} ${row.sunday ? styles.sunday : ''} ${isToday ? styles.today : ''}`}
                                >
                                    <span className={styles.label}>
                                        {row.label}
                                        {isToday && <span className={styles.todayBadge}>오늘</span>}
                                    </span>
                                    <span className={styles.time}>{row.time}</span>
                                </div>
                            );
                        })}
                        <div className={styles.lunchRow}>
                            <span className={styles.lunchLabel}>점심시간 (평일)</span>
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

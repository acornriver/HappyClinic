import { useState, useEffect } from 'react';
import styles from './NoticePopup.module.css';
import { X } from 'lucide-react';

const NOTICE_KEY = 'happy_clinic_notice_2025_12_05'; // Unique key for this notice

const NoticePopup = () => {
    const [visible, setVisible] = useState(false);
    const [dontShowToday, setDontShowToday] = useState(false);

    useEffect(() => {
        const expiry = localStorage.getItem(NOTICE_KEY);
        const now = new Date().getTime();

        if (!expiry || now > parseInt(expiry, 10)) {
            setVisible(true);
        }
    }, []);

    const handleClose = () => {
        if (dontShowToday) {
            const expiryDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours later
            localStorage.setItem(NOTICE_KEY, expiryDate.toString());
        }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <div className={styles.header}>
                    <h3>공지사항</h3>
                    <button onClick={handleClose} className={styles.closeBtn}><X size={20} /></button>
                </div>
                <div className={styles.content}>
                    <h4>독감 예방접종 실시 중</h4>
                    <p>
                        본원은 현재 <strong>독감 예방접종 지정 의료기관</strong>입니다.<br />
                        재고 소진 시까지 접종 가능하오니,<br />
                        내원 전 문의 바랍니다.
                    </p>
                    <div className={styles.campaign}>
                        <span>접종 대상: 생후 6개월 ~ 13세 어린이, 임신부, 65세 이상 어르신</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={dontShowToday}
                            onChange={(e) => setDontShowToday(e.target.checked)}
                        />
                        오늘 하루 보지 않기
                    </label>
                    <button onClick={handleClose} className={styles.confirmBtn}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default NoticePopup;

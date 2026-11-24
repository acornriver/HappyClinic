import { useState, useEffect, useCallback } from 'react';
import styles from './NoticePopup.module.css';
import { X } from 'lucide-react';

// localStorage can throw in private mode or when site data is blocked
const safeStorage = {
    getItem: (key) => {
        try {
            return window.localStorage.getItem(key);
        } catch {
            return null;
        }
    },
    setItem: (key, value) => {
        try {
            window.localStorage.setItem(key, value);
        } catch {
            // ignore
        }
    },
};

const storageKeyFor = (id) => `happy_clinic_popup_${id}`;

const NoticePopup = () => {
    const [visible, setVisible] = useState(false);
    const [dontShowToday, setDontShowToday] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}popup.json`, { cache: 'no-cache' })
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(config => {
                if (!config.show) return;

                const now = new Date();
                if (config.startDate && new Date(config.startDate) > now) return;
                if (config.endDate && new Date(config.endDate) < now) return;

                const expiry = safeStorage.getItem(storageKeyFor(config.id));
                if (!expiry || now.getTime() > parseInt(expiry, 10)) {
                    setData(config);
                    setVisible(true);
                }
            })
            .catch(() => { /* 팝업 설정을 못 불러오면 팝업 없이 진행 */ });
    }, []);

    const handleClose = useCallback(() => {
        if (dontShowToday && data) {
            // 오늘 자정까지 숨김
            const midnight = new Date();
            midnight.setHours(24, 0, 0, 0);
            safeStorage.setItem(storageKeyFor(data.id), midnight.getTime().toString());
        }
        setVisible(false);
    }, [dontShowToday, data]);

    // ESC로 닫기 + 팝업이 떠 있는 동안 배경 스크롤 막기
    useEffect(() => {
        if (!visible) return;
        const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [visible, handleClose]);

    if (!visible || !data) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div
                className={styles.popup}
                role="dialog"
                aria-modal="true"
                aria-labelledby="notice-popup-title"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.header}>
                    <h3 id="notice-popup-title">{data.title}</h3>
                    <button onClick={handleClose} className={styles.closeBtn} aria-label="공지 닫기">
                        <X size={20} />
                    </button>
                </div>
                <div className={styles.content}>
                    <h4 className={styles.mobileTitle}>{data.title}</h4>
                    <div className={styles.messageList}>
                        {data.messages.map((msg, index) => (
                            <p key={index} className={styles.messageLine}>
                                {msg.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </p>
                        ))}
                    </div>
                    {data.highlight && (
                        <div className={styles.campaign}>
                            <span>{data.highlight}</span>
                        </div>
                    )}
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
                    <button onClick={handleClose} className={styles.confirmBtn} autoFocus>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default NoticePopup;

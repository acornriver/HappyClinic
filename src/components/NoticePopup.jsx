import { useState, useEffect } from 'react';
import styles from './NoticePopup.module.css';
import { X } from 'lucide-react';

const NoticePopup = () => {
    const [visible, setVisible] = useState(false);
    const [dontShowToday, setDontShowToday] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch popup configuration with correct base path
        const jsonPath = `${import.meta.env.BASE_URL}popup.json`;
        console.log("Fetching popup from:", jsonPath);

        fetch(jsonPath)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(config => {
                if (!config.show) return;

                // Check date range if provided
                const now = new Date();
                if (config.startDate && new Date(config.startDate) > now) return;
                if (config.endDate && new Date(config.endDate) < now) return;

                // Check local storage for "Don't show today" safely
                try {
                    const storageKey = `happy_clinic_popup_${config.id}`;
                    const expiry = localStorage.getItem(storageKey);

                    if (!expiry || now.getTime() > parseInt(expiry, 10)) {
                        setData(config);
                        setVisible(true);
                    }
                } catch (e) {
                    console.warn("LocalStorage access denied, showing popup anyway.");
                    setData(config);
                    setVisible(true);
                }
            })
            .catch(err => console.error("Failed to load popup config:", err));
    }, []);

    const handleClose = () => {
        if (dontShowToday && data) {
            try {
                const storageKey = `happy_clinic_popup_${data.id}`;
                const expiryDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
                localStorage.setItem(storageKey, expiryDate.toString());
            } catch (e) {
                console.warn("Could not save popup preference.");
            }
        }
        setVisible(false);
    };

    if (!visible || !data) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <div className={styles.header}>
                    <h3>{data.title}</h3>
                    <button onClick={handleClose} className={styles.closeBtn}><X size={20} /></button>
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
                    <button onClick={handleClose} className={styles.confirmBtn}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default NoticePopup;

import styles from './Location.module.css';
import { MapPin, Phone, Car } from 'lucide-react';
import mapImg from '../assets/img/static_naver_map.png';

const Location = () => {
    return (
        <section id="location" className="section">
            <div className="container">
                <h2 className="section-title">오시는 길</h2>
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <div className={styles.item}>
                            <div className={styles.iconBox}><MapPin /></div>
                            <div>
                                <h4>주소</h4>
                                <p>충남 천안시 동남구 터미널9길 25</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.iconBox}><Phone /></div>
                            <div>
                                <h4>전화번호</h4>
                                <p><a href="tel:0507-1346-6575">0507-1346-6575</a></p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.iconBox}><Car /></div>
                            <div>
                                <h4>주차 안내</h4>
                                <p>주차 가능 (편하게 자차로 방문하세요)</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mapContainer}>
                        {/* Clickable Image Map */}
                        <a
                            href="https://naver.me/GL8Jcuf3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mapLink}
                            title="네이버 지도에서 보기"
                        >
                            <img src={mapImg} alt="Clinic Location Map" className={styles.mapImage} />
                            <div className={styles.mapOverlay}>
                                <span className={styles.overlayBtn}>네이버 지도로 보기</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;

import styles from './Location.module.css';
import { MapPin, Phone, Car, Info } from 'lucide-react';
import mapImg from '../assets/img/static_naver_map.png';

const Location = () => {
    return (
        <section id="location" className="section">
            <div className="container">
                <h2 className="section-title">오시는 길</h2>

                <div className={styles.notice}>
                    <div className={styles.noticeTitle}>
                        <Info size={24} />
                        <span>네이버 예약 이용 안내</span>
                    </div>
                    <div className={styles.noticeContent}>
                        <p>✅ <strong>당일 예약 가능:</strong> 진료 희망 시간 <strong>3시간 전</strong>까지 예약이 가능합니다. (예: 오전에 오후 진료 예약 가능)</p>
                        <p>⚠️ <strong>초진 불가 / 재진만 가능:</strong> 병원에 처음 오시는 분은 접수대에서 현장 접수를 부탁드립니다.</p>
                    </div>
                </div>
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

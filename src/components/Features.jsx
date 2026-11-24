import styles from './Features.module.css';
import imgKiosk from '../assets/img/kiosk.webp';
import imgIV from '../assets/img/iv-clinic.webp';
import imgEquip from '../assets/img/equipment.webp';

const Features = () => {
    const featureList = [
        { title: "빠르고 편리한 접수", desc: "키오스크 시스템으로 대기시간 최소화", img: imgKiosk },
        { title: "편안한 수액 클리닉", desc: "안락한 환경에서의 피로 회복", img: imgIV },
        { title: "정밀 검사 장비", desc: "정확한 진단을 위한 최신 장비", img: imgEquip },
    ];

    return (
        <section id="features" className="section">
            <div className="container">
                <h2 className="section-title">병원 둘러보기</h2>
                <div className={styles.grid}>
                    {featureList.map((f) => (
                        <div key={f.title} className={styles.card}>
                            <div className={styles.imgWrapper}>
                                <img src={f.img} alt={f.title} loading="lazy" decoding="async" width="1200" height="900" />
                            </div>
                            <div className={styles.textWrapper}>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

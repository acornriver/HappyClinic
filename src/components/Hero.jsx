import styles from './Hero.module.css';
import bgImage from '../assets/img/KakaoTalk_Photo_2025-12-05-13-16-15 001.jpeg';

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.bgWrapper}>
                <img src={bgImage} alt="Clinic Entrance" className={styles.bgImage} />
                <div className={styles.overlay}></div>
            </div>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    우리 가족 건강 주치의,<br />
                    <span className={styles.highlight}>행복한가정의학과</span>입니다.
                </h1>
                <p className={styles.subtitle}>
                    꼼꼼한 진료와 따뜻한 마음으로<br className={styles.mobileBreak} /> 여러분의 건강을 지킵니다.
                </p>
                <a href="tel:0507-1346-6575" className={styles.ctaButton}>
                    전화 문의하기
                </a>
            </div>
        </section>
    );
};

export default Hero;

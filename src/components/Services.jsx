import styles from './Services.module.css';
import { Thermometer, HeartPulse, Baby, Droplets } from 'lucide-react';

// 진료 항목은 병원 사정에 맞게 자유롭게 추가·수정하세요.
const SERVICES = [
    {
        icon: Thermometer,
        title: '일반 진료',
        desc: '감기, 독감, 코로나 등 급성 질환을 신속검사와 함께 꼼꼼하게 진료합니다.',
    },
    {
        icon: HeartPulse,
        title: '만성질환 관리',
        desc: '고혈압, 당뇨, 고지혈증을 정기 검사와 상담으로 꾸준히 관리합니다.',
    },
    {
        icon: Baby,
        title: '영유아 검진 · 예방접종',
        desc: '영유아 건강검진과 인플루엔자 국가예방접종(지정의료기관)을 시행합니다.',
    },
    {
        icon: Droplets,
        title: '수액 클리닉',
        desc: '피로 회복과 컨디션 관리를 위한 수액을 편안한 공간에서 맞으실 수 있습니다.',
    },
];

const Services = () => (
    <section id="services" className={`section ${styles.servicesSection}`}>
        <div className="container">
            <h2 className="section-title">진료 과목</h2>
            <ul className={styles.grid}>
                {SERVICES.map((service) => (
                    <li key={service.title} className={styles.card}>
                        <div className={styles.iconBox} aria-hidden="true">
                            <service.icon size={28} />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Services;

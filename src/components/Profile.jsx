import styles from './Profile.module.css';
import profileImg from '../assets/img/profile.png';

const Profile = () => {
    const careers = [
        "충북대학교 의과대학 졸업",
        "청주한국병원 인턴, 레지던트 수료",
        "가정의학과 전문의 취득",
        "대한미용웰빙학회 정회원",
        "대한IMS학회 정회원",
        "대한비만체형의학회 정회원",
        "단국대학교 의과대학 외래교수",
        "대전지방검찰청 천안지청 의료자문위원",
        "충청남도의사회 부회장",
        "천안시의사회 부회장",
        "대한가정의학회 충남지회장",
        "충북대학교 의과대학 천안아산동문회장",
    ];

    return (
        <section id="profile" className={`section ${styles.profileSection}`}>
            <div className="container">
                <h2 className="section-title">의료진 소개</h2>
                <div className={styles.wrapper}>
                    <div className={styles.imageCol}>
                        <img src={profileImg} alt="원장님 프로필" className={styles.profileImage} />
                    </div>
                    <div className={styles.contentCol}>
                        <h3 className={styles.name}>원장 약력</h3>
                        <div className={styles.divider}></div>
                        <ul className={styles.careerList}>
                            {careers.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

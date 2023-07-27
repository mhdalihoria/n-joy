import Phone from "../../assets/svg/mobile.svg";
import HalfPhone from "../../assets/svg/half-mobile.svg";
import Car from "../../assets/svg/car.svg";
import RevCar from "../../assets/svg/reverse-car.svg";
import styles from "./HeroSection.module.css";
import { useParallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";

const HeroSection = ({ isEnglish }) => {
  const { t } = useTranslation();
  const car = useParallax({
    scale: [1, 0.4, "easeInQuad"],
    translateX: isEnglish ? [20, -100, "easeInQuad"] : [-70, 60, "easeInQuad"],
    // translateX: [-70, 60, "easeInQuad"],
    styleOuter: { position: "absolute", top: 0, left: 0, right: 0 },
  });
  return (
    <div className={styles.heroContainer} id="hero">
      <div
        className={`${styles.heroRightSection} ${
          isEnglish ? styles.txtAlignRight : styles.txtAlignLeft
        }`}
      >
        <h1 className={`${styles.heroRightTitle}`}>
          {t("HeroTitle")}
          {/* Lorem ipsum dolor */}
        </h1>
        <span>
        {t("HeroContent")}

        </span>
      </div>
      <div className={styles.heroLeftSection}>
        <img src={Phone} className={styles.phoneImg} />
        <img
          src={isEnglish ? RevCar : Car}
          className={styles.carImg}
          ref={car.ref}
        />
        <img
          src={HalfPhone}
          className={`${styles.phoneImg} ${styles.hfPhone}`}
          style={!isEnglish ? {transform: "scaleX(-1)", marginLeft: "-1.6rem"} : {}}
        />
      </div>
    </div>
  );
};

export default HeroSection;

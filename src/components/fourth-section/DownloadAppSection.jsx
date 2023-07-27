import Phone from "../../assets/svg/mobile.svg";
import Apple from "../../assets/svg/apple.svg";
import styles from "./DownloadAppSection.module.css";
import { useEffect, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";

const DownloadAppSection = ({isEnglish}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const {t} = useTranslation()
  const hidePhone = screenWidth <= 800;

  const phoneRef = useParallax({
    translateY: [50, -100, "easeInQuad"],
  });

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(useParallax);

  return (
    <div className={styles.appSectionContainer} id="download">
      <div className={styles.phoneImgContainer} ref={phoneRef.ref}>
        {!hidePhone && (
          <img src={Phone} alt="phone" className={styles.phoneImg} />
        )}
      </div>
      <div className={`${styles.contentContainer} ${isEnglish ? styles.txtAlignRight : styles.txtAlignLeft}`}>
        <h2 className={styles.contentHeader}>
          {/* Get <span style={{ color: "#1cf81a" }}>Your</span> Taxi Very Easily */}
          {t("DownloadAppTitle")}
        </h2>
        <p className={styles.contentText} style={isEnglish ? {paddingLeft: "2rem"} : {paddingRight: "2rem"}}>
          {" "}
          {/* Quasi ea laudantium accusamus dolorem odio laborum impedit perferendis */}
          {t("DownloadAppContent")}
        </p>
        <div className={styles.iconSection}>
          <img src={Apple} className={styles.icon} />
          <img src={Apple} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;

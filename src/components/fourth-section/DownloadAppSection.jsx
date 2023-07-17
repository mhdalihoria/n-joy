import Phone from "../../assets/svg/mobile.svg";
import Apple from "../../assets/svg/apple.svg";
import styles from "./DownloadAppSection.module.css";

const DownloadAppSection = () => {
  return (
    <div className={styles.appSectionContainer}>
      <div className={styles.phoneImgContainer}>
        <img src={Phone} alt="phone" className={styles.phoneImg} />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.contentHeader}>Get Your Taxi Very Easily</h2>
        <p className={styles.contentText}>
          {" "}
          Quasi ea laudantium accusamus dolorem odio laborum impedit
          perferendis eque libero, doloribus 
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

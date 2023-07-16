import styles from "./CustomFooter.module.css";
import Logo from "../../assets/svg/footer-logo.svg";
import { BsFacebook } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWidthContainer}>
        <div className={styles.footerLogoContainer}>
          <img src={Logo} alt="N-joy Logo" className={styles.footerLogo} />
        </div>
        <div className={styles.socialsContainer}>
          <div className={styles.icon}>
            <BsFacebook />
          </div>
          <div className={styles.icon}>
            <BsFacebook />
          </div>
          <div className={styles.icon}>
            <BsFacebook />
          </div>
          <div className={styles.icon}>
            <BsFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;

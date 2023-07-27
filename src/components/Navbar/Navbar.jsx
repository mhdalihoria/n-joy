import { ConfigProvider, Drawer } from "antd";
import Logo from "../../assets/svg/main-logo.svg";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { BsGlobe } from "react-icons/bs";
import NavBgImg from "../../assets/svg/nav-bg.svg";
import RevNavBgImg from "../../assets/svg/rev-nav-bg.svg";
import i18next from "i18next";

const Navbar = ({ setIsEnglish, isEnglish }) => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const windowSm = 767 <= screenWidth;

  useEffect(() => {
    // useEffect to keep track of the screen width when resized
    function updateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  if(isEnglish) {
    i18next.changeLanguage("ar")
  } else {
    i18next.changeLanguage("en")

  }

  return (
    <div className={styles.navbarContainer}>
      <div>
        {windowSm ? (
          <ul className={styles.navList}>
            <li
              onClick={() => setIsEnglish((prevEng) => !prevEng)}
              className={styles.lang}
            >
              {isEnglish ? "en" : "ar"} <BsGlobe />
            </li>
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className={styles.navLink}
              >
                Intro
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className={styles.navLink}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="screenshots"
                smooth={true}
                duration={500}
                className={styles.navLink}
              >
                App
              </Link>
            </li>
            <li>
              <Link
                to="download"
                smooth={true}
                duration={500}
                className={styles.navLink}
              >
                Download
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <button
              onClick={() => setOpen(true)}
              className={styles.navBarsIcon}
            >
              <FaBars />
            </button>
            <ConfigProvider direction={isEnglish ? "ltr" : "rtl"}>
              <Drawer
                placement={isEnglish ? "left" : "right"}
                width={500}
                onClose={onClose}
                open={open}
                className={styles.navDrawer}
              >
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className={`${styles.navLinkDrawer} ${
                    isEnglish ? styles.txtAlignLeft : styles.txtAlignRight
                  }`}
                  onClick={onClose}
                >
                  Intro
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className={`${styles.navLinkDrawer} ${
                    isEnglish ? styles.txtAlignLeft : styles.txtAlignRight
                  }`}
                  onClick={onClose}
                >
                  Services
                </Link>
                <Link
                  to="screenshots"
                  smooth={true}
                  duration={500}
                  className={`${styles.navLinkDrawer} ${
                    isEnglish ? styles.txtAlignLeft : styles.txtAlignRight
                  }`}
                  onClick={onClose}
                >
                  App
                </Link>
                <Link
                  to="download"
                  smooth={true}
                  duration={500}
                  className={`${styles.navLinkDrawer} ${
                    isEnglish ? styles.txtAlignLeft : styles.txtAlignRight
                  }`}
                  onClick={onClose}
                >
                  Download
                </Link>
                <span
                  onClick={() => {
                    setIsEnglish((prevEng) => !prevEng);
                    onClose();
                  }}
                  className={`${styles.langDrawer} ${
                    isEnglish ? styles.txtAlignLeft : styles.txtAlignRight
                  }`}
                >
                  {isEnglish ? "en" : "ar"} <BsGlobe />
                </span>
                <img src={Logo} alt="logo" className={`${styles.drawerImg} ${isEnglish ? styles.rightZero : styles.leftZero}`} />
                <img
                  src={isEnglish ? NavBgImg : RevNavBgImg}
                  alt="logo"
                  className={styles.drawerBgImg}
                />
              </Drawer>
            </ConfigProvider>
          </>
        )}
      </div>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" className={styles.logoImg} />
      </div>
    </div>
  );
};

export default Navbar;

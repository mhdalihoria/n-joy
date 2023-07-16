import { ConfigProvider, Drawer } from "antd";
import Logo from "../../assets/svg/main-logo.svg";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import {FaBars} from "react-icons/fa"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const windowSm = 767 <= screenWidth

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

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" className={styles.logoImg} />
      </div>
      <div>
        {windowSm ? (
          <ul className={styles.navList}>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        ) : (
          <>
          <button onClick={()=>setOpen(true)} className={styles.navBarsIcon}><FaBars /></button>
            <ConfigProvider direction="ltr">
            <Drawer
              placement={"right"}
              width={500}
              onClose={onClose}
              open={open}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
            </ConfigProvider>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

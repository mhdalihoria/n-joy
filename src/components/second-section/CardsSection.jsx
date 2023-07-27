import { ParallaxBanner } from "react-scroll-parallax";
import { Card, Col, Row } from "antd";
import styles from "./CardsSection.module.css";
import Plane from "../../assets/svg/plane.svg";
import Luggage from "../../assets/svg/luggage.svg";
import Way from "../../assets/svg/way.svg";
import AirPort from "../../assets/svg/airport.svg";
import Map from "../../assets/svg/map.svg";
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CardsSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { t } = useTranslation();
  const center = screenWidth >= 992;

  useLayoutEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ParallaxBanner
      layers={[{ image: Map, speed: 20 }]}
      className={styles.parallaxBanner}
      id="services"
    >
      <div className={styles.cardsSectionContainer}>
        <Row>
          <Col span={24}>
            <h1 className={styles.cardsSectionTitle}>
              {t("CardSectionTitle")}
            </h1>
          </Col>
        </Row>
        <Row
          gutter={{ xs: 4, sm: 4, md: 24, lg: 32 }}
          align={center ? "center" : ""}
        >
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card className={styles.card} hoverable style={{ width: 240 }}>
              <img src={Plane} alt="plane" />
              <p>{t("CardOneContent")}</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card className={styles.card} hoverable style={{ width: 240 }}>
              <img src={Luggage} alt="plane" />
              <p>{t("CardTwoContent")}</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            {" "}
            <Card className={styles.card} hoverable style={{ width: 240 }}>
              <img src={AirPort} alt="plane" />
              <p>{t("CardThreeContent")}</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            {" "}
            <Card className={styles.card} hoverable style={{ width: 240 }}>
              <img src={Way} alt="plane" />
              <p>{t("CardFourContent")}</p>
            </Card>
          </Col>
        </Row>
      </div>
    </ParallaxBanner>
  );
};

export default CardsSection;

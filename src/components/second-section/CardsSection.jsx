import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Card, Col, Row } from "antd";
import styles from "./CardsSection.module.css";
import Plane from "../../assets/svg/plane.svg";
import Luggage from "../../assets/svg/luggage.svg";
import Way from "../../assets/svg/way.svg";
import AirPort from "../../assets/svg/airport.svg";
import Map from "../../assets/svg/map.svg";

const CardsSection = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[{ image: Map, speed: 20 }]}
        className="aspect-[2/1]"
      >
        <div className={styles.cardsSectionContainer}>
          <Row>
            <Col span={24}>
              <Card className={styles.cardsSectionTitle}>
                Travel Anywhere Fast
              </Card>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={12} md={12} lg={8} xl={6}>
              <Card className={styles.card} hoverable style={{ width: 240 }}>
                <img src={Plane} alt="plane" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio facere rem repellat similique maiores nemo?
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={6}>
              <Card className={styles.card} hoverable style={{ width: 240 }}>
                <img src={Luggage} alt="plane" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio facere rem repellat similique maiores nemo?
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={6}>
              {" "}
              <Card className={styles.card} hoverable style={{ width: 240 }}>
                <img src={Way} alt="plane" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio facere rem repellat similique maiores nemo?
                </p>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Card className={styles.card} hoverable style={{ width: 240 }}>
                <img src={AirPort} alt="plane" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio facere rem repellat similique maiores nemo?
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default CardsSection;

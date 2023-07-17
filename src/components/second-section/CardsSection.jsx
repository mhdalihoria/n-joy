import { Card } from "antd"
import styles from "./CardsSection.module.css"
import Plane from "../../assets/svg/plane.svg"
import Luggage from "../../assets/svg/luggage.svg"
import Way from "../../assets/svg/way.svg"
import AirPort from "../../assets/svg/airport.svg"

const CardsSection = () => {
  return (
    <div className={styles.cardsSectionContainer}>
        <Card
        className={styles.card}
        hoverable
        style={{width:240}}>
            <img src={Plane} alt="plane" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere rem repellat similique maiores nemo?</p>
        </Card>
        <Card
        className={styles.card}
        hoverable
        style={{width:240}}>
            <img src={Luggage} alt="plane" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere rem repellat similique maiores nemo?</p>
        </Card>
        <Card
        className={styles.card}
        hoverable
        style={{width:240}}>
            <img src={Way} alt="plane" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere rem repellat similique maiores nemo?</p>
        </Card>
        <Card
        className={styles.card}
        hoverable
        style={{width:240}}>
            <img src={AirPort} alt="plane" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere rem repellat similique maiores nemo?</p>
        </Card>
        
    </div>
  )
}

export default CardsSection
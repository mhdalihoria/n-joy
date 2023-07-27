import CustomCarousel from "../carousel/Carousel"
import styles from "./CarouselSection.module.css"
import First from "../../assets/pic/01.jpeg"
import Second from "../../assets/pic/02.jpeg"
import Thrid from "../../assets/pic/03.jpeg"
import Fourth from "../../assets/pic/04.jpeg"
import Fifth from "../../assets/pic/05.jpeg"

const CarouselSection = () => {
  const picArr = [First, Second, Thrid, Fourth, Fifth]
  return (
    <div className={styles.carouselSectionContainer} id="screenshots">
        <CustomCarousel srcArr = {picArr}/>
    </div>
  )
}

export default CarouselSection
import CustomCarousel from "../carousel/Carousel"
import styles from "./CarouselSection.module.css"

const CarouselSection = () => {
  return (
    <div className={styles.carouselSectionContainer}>
        <CustomCarousel />
    </div>
  )
}

export default CarouselSection
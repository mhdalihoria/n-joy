import styles from "./HeroSection.module.css"

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroRightSection}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia sodalacinia sodalacinia sodalacinia sodalacinia sodales ex .</div>
        <div className={styles.heroLeftSection}></div>
    </div>
  )
}

export default HeroSection
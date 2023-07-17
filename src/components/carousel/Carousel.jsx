import { Carousel } from "antd";
import "./CarouselStyles.css";

function CustomCarousel() {

  return (
    <Carousel
      autoplay
      autoplaySpeed={1500}
      slidesToShow={3}
      slidesToScroll={1}
      arrows={false}
      draggable
      className="carousel-element"
      centerMode
      centerPadding="20px"
      dots
    >
      <div>
        <img
          src="https://raivapp.com/asset/img/slider-3.png"
          alt="profile-img"
          className="carousel-item"
          id="item-1"
        />
      </div>
      <div>
        <img
          src="https://raivapp.com/asset/img/slider-3.png"
          alt="profile-img"
          className="carousel-item"
          id="item-2"
        />
      </div>
      <div>
        <img
          src="https://raivapp.com/asset/img/slider-3.png"
          alt="profile-img"
          className="carousel-item"
          id="item-3"
        />
      </div>
      <div>
        <img
          src="https://raivapp.com/asset/img/slider-3.png"
          alt="profile-img"
          className="carousel-item"
          id="item-4"
        />
      </div>
    </Carousel>
  );
}

export default CustomCarousel;

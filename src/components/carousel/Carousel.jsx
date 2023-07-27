import { Carousel } from "antd";
import "./CarouselStyles.css";

function CustomCarousel({ srcArr }) {
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
      responsive={[
        {
          breakpoint: "787px",
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ]}
    >
      <div>
        <img
          src={srcArr[0]}
          alt="profile-img"
          className="carousel-item"
          id="item-1"
        />
      </div>
      <div style={{ display: "block" }}>
        <img
          src={srcArr[1]}
          alt="profile-img"
          className="carousel-item"
          id="item-2"
        />
      </div>
      <div>
        <img
          src={srcArr[2]}
          alt="profile-img"
          className="carousel-item"
          id="item-3"
        />
      </div>
      <div>
        <img
          src={srcArr[3]}
          alt="profile-img"
          className="carousel-item"
          id="item-4"
        />
      </div>
      <div>
        <img
          src={srcArr[4]}
          alt="profile-img"
          className="carousel-item"
          id="item-4"
        />
      </div>
    </Carousel>
  );
}

export default CustomCarousel;

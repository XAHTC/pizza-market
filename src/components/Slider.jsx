import React from 'react';

const images = [
  <img
    src="https://media.dominos.ua/slider/slide_image/2020/10/29/unicorn-vtornik--80_rus.jpg"
    alt="first slide"
  />,
  <img
    src="https://media.dominos.ua/slider/slide_image/2020/09/23/-20_slider_rus.jpg"
    alt="second slide"
  />,
  <img
    src="https://media.dominos.ua/slider/slide_image/2020/09/12/-40_1920x736-min.JPG"
    alt="third slide"
  />,
  <img
    src="https://media.dominos.ua/slider/slide_image/2019/06/20/-30_1920x736-min.JPG"
    alt="fourth slide"
  />,
  <img
    src="https://media.dominos.ua/slider/slide_image/2020/10/29/-30-wings_slider_rus.jpg"
    alt="fifth slide"
  />,
  <img
    src="https://media.dominos.ua/slider/slide_image/2020/03/16/dost_slider.jpg"
    alt="sixth slide"
  />,
  <img
    src="https://media.dominos.ua/slider/slide_image/2020/09/03/pizza-1-kg_slider.jpg"
    alt="seventh slide"
  />,
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval();
  }, []);

  const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1;
  const nextImageIndex =
    activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  return (
    <div>
      <div className="slider">
        <div className="slider-image slider-image-prev" key={prevImageIndex}>
          {images[prevImageIndex]}
        </div>
        <div className="slider-image" key={activeIndex}>
          {images[activeIndex]}
        </div>
        <div className="slider-image slider-image-next" key={nextImageIndex}>
          {images[nextImageIndex]}
        </div>
      </div>
      <ul className="slider-bullets">
        {images.map((_, index) => (
          <li
            key={index}
            className={
              activeIndex === index
                ? 'slider-bullet slider-bullet-active'
                : 'slider-bullet'
            }
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;

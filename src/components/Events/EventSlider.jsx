import React from "react";
import { Carousel } from "antd";

const EventSlider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} className="rounded-lg">
      <div>
        {/* <h3 style={contentStyle}></h3> */}
        <img
          className="w-full rounded-lg"
          src="../../public/img/card.jpg"
          alt="card image"
        />
      </div>
      <div>
        <img
          className="w-full rounded-lg"
          src="../../public/img/card 2.jpg"
          alt="card image"
        />
      </div>
      <div>
        <img
          className="w-full rounded-lg"
          src="../../public/img/card.jpg"
          alt="card image"
        />
      </div>
      <div>
        <img
          className="w-full rounded-lg"
          src="../../public/img/card 2.jpg"
          alt="card image"
        />
      </div>
    </Carousel>
  );
};

export default EventSlider;

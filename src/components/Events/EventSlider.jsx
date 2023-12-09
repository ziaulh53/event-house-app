import React from "react";
import { Carousel } from "antd";

const EventSlider = ({ images=[] }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} className="rounded-lg" autoplay>
      {JSON.parse(images)?.map((image, idx) => (
        <div key={idx}>
          <img
            className="w-full rounded-lg aspect-[16/9] object-cover"
            src={image}
            alt="card image"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default EventSlider;

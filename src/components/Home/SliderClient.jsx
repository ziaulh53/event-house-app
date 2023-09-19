import { Carousel } from "antd";

const SliderClient = () => (
  <Carousel autoplay slidesToShow={2}>
    <div className="flex justify-between">
      <h3 className="h-60 text-white bg-[#364d79] flex justify-center items-center">
        Client 1
      </h3>
    </div>
    <div>
      <h3 className="h-60 text-white bg-[#364d79] flex justify-center items-center">
        Client 2
      </h3>
    </div>
    <div>
      <h3 className="h-60 text-white bg-[#364d79] flex justify-center items-center">
        Client 3
      </h3>
    </div>
    <div>
      <h3 className="h-60 text-white bg-[#364d79] flex justify-center items-center">
        Client 4
      </h3>
    </div>
    <div>
      <h3 className="h-60 text-white bg-[#364d79] flex justify-center items-center">
        Client 5
      </h3>
    </div>
    <div>
      <h3 className="h-60 text-white bg-[#364d79] flex justify-center items-center">
        Client 6
      </h3>
    </div>
  </Carousel>
);
export default SliderClient;

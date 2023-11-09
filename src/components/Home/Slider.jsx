import { Carousel } from 'antd';

const Slider = () => (
  <Carousel autoplay>
    <div>
      <h3 className='h-[22.5rem] text-white bg-[#364d79] flex justify-center items-center'>1</h3>
    </div>
    <div>
      <h3 className='h-[22.5rem] text-white bg-[#364d79] flex justify-center items-center'>2</h3>
    </div>
    <div>
      <h3 className='h-[22.5rem] text-white bg-[#364d79] flex justify-center items-center'>3</h3>
    </div>
    <div>
      <h3 className='h-[22.5rem] text-white bg-[#364d79] flex justify-center items-center'>4</h3>
    </div>
  </Carousel>
);
export default Slider;
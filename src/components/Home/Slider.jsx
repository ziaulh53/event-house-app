import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { api, banner } from "../../api";
import { notify } from "../../utils";

const Slider = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBannerImages = async () => {
    setLoading(true);
    try {
      const res = await api.get(banner.getBanner);
      setBannerImages(res.banners);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBannerImages();
  }, []);
  return (
    <Carousel autoplay >
      {bannerImages.map((image, idx) => (
        <div key={idx}>
          <img
            className="w-full rounded-lg object-cover"
            src={image}
            alt="Hero Image"
          />
        </div>
      ))}
      {loading && <div className="aspect-[511/190] bg-slate-200"></div>}
    </Carousel>
  );
};
export default Slider;

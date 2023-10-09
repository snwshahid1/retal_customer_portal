import { FC, memo } from "react";
import SlickSlider from "src/components/SlickSlider";
import GalleryImg1 from "src/assets/images/dashboard-gallery-img.png";

const Tab4Gallery: FC<any> = ({sliderSettings, referance }) => {
  return (
    <SlickSlider
      ref={referance}
      sliderSettings={sliderSettings}
    >
      <div className="img-slide">
        <img src={GalleryImg1} alt="" />
      </div>

      <div className="img-slide">
        <img src="https://dummyimage.com/820x750/333/fff" alt="" />
      </div>
    </SlickSlider>
  )
}

export default memo(Tab4Gallery);

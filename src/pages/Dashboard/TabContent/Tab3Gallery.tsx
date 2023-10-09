import { FC, memo } from "react";
import SlickSlider from "src/components/SlickSlider";

const Tab3Gallery: FC<any> = ({sliderSettings, referance }) => {
  return (
    <SlickSlider
      ref={referance}
      sliderSettings={sliderSettings}
    >
      <div className="img-slide">
        <img src="https://dummyimage.com/820x750/222/fff" alt="" />
      </div>

      <div className="img-slide">
        <img src="https://dummyimage.com/820x750/111/fff" alt="" />
      </div>
    </SlickSlider>
  )
}

export default memo(Tab3Gallery);

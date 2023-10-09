import { FC, memo } from "react";
import SlickSlider from "src/components/SlickSlider";

const Tab2Gallery: FC<any> = ({sliderSettings, referance }) => {
  return (
    <SlickSlider
      ref={referance}
      sliderSettings={sliderSettings}
    >
      <div className="img-slide">
        <img src="https://dummyimage.com/820x750/eee/fff" alt="" />
      </div>

      <div className="img-slide">
        <img src="https://dummyimage.com/820x750/555/fff" alt="" />
      </div>
    </SlickSlider>
  )
}

export default memo(Tab2Gallery);

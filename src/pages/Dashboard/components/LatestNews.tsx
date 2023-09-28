import { FC, memo, useRef } from "react";
import { LatestNewsHolder } from "../style";
import NewsItem from "src/components/NewsItem/NewsItem";
import NewsImage1 from "src/assets/images/news-img1.png";
import NewsImage2 from "src/assets/images/news-img2.png";
import NewsImage3 from "src/assets/images/news-img3.png";
import SlickSlider from "src/components/SlickSlider";
import SlickArrows from "./SlickArrows";

const LatestNews: FC<any> = () => {
  const slider = useRef(null);

  const CarouselData = [
    {
      image: NewsImage1, 
      title: 'Retal Urban Development signs two agreements for projects within Sedra scheme.', 
      date: 'March 08, 2023', 
      link: '#',
      tag: 'Financial'
    },
    {
      image: NewsImage2, 
      title: 'Retal Urban Development signs two agreements for projects within Sedra scheme.', 
      date: 'March 08, 2023', 
      link: '#',
      tag: 'Financial'
    },
    {
      image: NewsImage3, 
      title: 'Retal Urban Development signs two agreements for projects within Sedra scheme.', 
      date: 'March 12, 2023', 
      link: '#',
      tag: 'Financial'
    },
    {
      image: NewsImage2, 
      title: 'Retal Urban Development signs.', 
      date: 'March 15, 2023', 
      link: '#',
      tag: 'Financial'
    },
  ];

  const sliderSettings = {
    draggable: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1.5,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.1,
        }
      }
    ]
  };

  return (
    <LatestNewsHolder>
      <div className="sec-title">
        <h4>Latest news</h4>
        <SlickArrows slider={slider} />
      </div>

      <div className="news-carousel">
        <SlickSlider ref={slider} sliderSettings={sliderSettings}>
          {CarouselData.map(
            ( item: any, i: number) => (
              <div key={i}>
                <NewsItem {...item} />
              </div>
            )
          )}
        </SlickSlider>
      </div>
    </LatestNewsHolder>
  )
}

export default memo(LatestNews);

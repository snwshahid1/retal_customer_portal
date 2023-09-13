import PropertyItem from "src/components/PropertyItem";
import PageTitle from "src/components/PageTitle";
import { PropertiesHolder } from "./style";

import PropertyImg1 from "src/assets/images/property-img1.png";
import PropertyImg2 from "src/assets/images/property-img2.png";
import PropertyImg3 from "src/assets/images/property-img3.png";

const Properties = () => {
  const PropertiesData = [
    {
      image: PropertyImg1,
      title: "Retal Rise",
      location: "8 Apt Retal Rise, Khobar.",
      progress: "30%",
      route: "/property/1"
    },
    {
      image: PropertyImg2,
      title: "Ayala Al Nakheel",
      location: "128 Villa Ayala Al ...",
      progress: "100%",
      route: "/property/2"
    },
    {
      image: PropertyImg3,
      title: "Ewan Sedra",
      location: "8 Villa Ewan Sedra, Riyadh.",
      progress: "100%",
      route: "/property/3"
    },
  ]

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="My Properties" subtitle="Find here all the your properties" />
      </div>
      <PropertiesHolder>
        <div className="border-bottom">
          <h4>Properties (3)</h4>
        </div>
        <div className="d-grid properties-list-wrapper">
          {PropertiesData.map(( property, i: number) => (
            <PropertyItem {...property} key={i} />
          ))}
        </div>
      </PropertiesHolder>
    </>
  )
}

export default Properties
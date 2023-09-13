import GiftItem from "src/components/GiftItem";
import PageTitle from "src/components/PageTitle"
import Searchbar from "src/components/Searchbar";
import GiftImg1 from "src/assets/icons/gift-img1.svg";
import GiftImg2 from "src/assets/icons/gift-img2.svg";
import GiftImg3 from "src/assets/icons/gift-img3.svg";
import GiftImg4 from "src/assets/icons/gift-img4.svg";
import GiftImg5 from "src/assets/icons/gift-img5.svg";

const Gitfts = () => {
  const GiftsData = [
    {
        icon: GiftImg1,
        title: "Gift Card for a SAR 20 from diet center",
        expiryDate: "Expired on may 12, 2023"
    },
    {
        icon: GiftImg2,
        title: "Gift Card for a Medium Hot Coffee from Dunkin",
        expiryDate: "Expired on may 12, 2023"
    },
    {
        icon: GiftImg3,
        title: "Gift Card for a SAR 30 from starbuks",
        expiryDate: "Expired on may 12, 2023"
    },
    {
        icon: GiftImg4,
        title: "Gift Card for a SAR 20 from KFC Restaurant",
        expiryDate: "Expired on may 12, 2023"
    },
    {
        icon: GiftImg5,
        title: "Gift Card for a Free Standard Ticket from Muvi",
        expiryDate: "Expired on may 12, 2023"
    },
    {
        icon: GiftImg1,
        title: "Gift Card for a SAR 60 from diet center ",
        expiryDate: "Expired on may 12, 2023"
    }
  ]

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="Top gifts" subtitle="Find here all the your Gifts" />
        <Searchbar placeholder="Search a gift"  />
      </div>
      <div className="flex-base-wrapper gap-10">
        {GiftsData.map(( gift, i: number) => (
          <GiftItem {...gift} key={i} />
        ))}
      </div>
    </>
  )
}

export default Gitfts
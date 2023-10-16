import { Link } from "react-router-dom";
import { HomeWrapper } from "./style";
import LogoRetal from "src/assets/images/retal-logo-white.svg";
import RetalHome from "src/assets/images/home-bg-img.png";
import { Copyright } from "src/components/Sidebar/style";
import { useTranslation } from "src/Hooks/useTranslation";
import SwitchLanguage from "src/elements/SwitchLanguage";

const Home = () => {
  
  let { translate } = useTranslation();

  // useEffect(() => {
  //   switchLanguage("en")
  // }, [])

  return (
    <HomeWrapper>
      <div className="full-page-img">
        <img src={RetalHome} alt="Retal Home" />
      </div>
      <div className="content-wrapper w-100">
        <div className="top-header">
          <div className="logo">
            <img src={LogoRetal} alt="Retal" />
          </div>
          <SwitchLanguage className="light-color" />
        </div>
        <div className="text-block">
          <h1>
          {translate("Welcome Home,")} <br /> {translate("start your journey here")}
          </h1>
          <p>
            {translate("We represent the quintessence of craftsmanship by embracing the virtues of urbanism.")}
          </p>
          <Link to="/sign-in" className="theme-btn theme-btn-white btn-lg w-100">
            {translate("Sign In")}
          </Link>
        </div>

        <Copyright>
          <p className="fs-10">
            &copy;  {translate("Retal Development. All rights reserved.")}
          </p>
        </Copyright>
      </div>
    </HomeWrapper>
  );
};

export default Home;

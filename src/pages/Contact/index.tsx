import PageTitle from "src/components/PageTitle";
import { ContactWrapper } from "./style";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <ContactWrapper>
        <div className="page-title-holder flex-base-wrapper">
          <PageTitle title="Contact" subtitle="Know more about us" />
        </div>

        <div className="white-text-box">
          <div className="d-flex flex-wrap justify-content-between contact-page-content">
            <div className="contact-text-block half-screen">
              <h3>Retal Company</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id risus sit amet dui susci cursus. Cras vitae ipsum leo.
                Suspendisse venenatis dapibus pellentesque. Suspendisse a
                ultricies suspendisse potenti.
              </p>
              <p>
                <strong>
                  968M+27C, Al Bahar, Al Khobar 34218, Arabie saoudite
                </strong>
              </p>
              <ul className="contact-us-list list-style-none p-0">
                <li>
                  <span className="icon-holder">
                    <i className="web-icon"></i>
                  </span>
                  <span className="me-1">Visit our</span>
                  <Link to="#" className="text-decoration-underline">
                    {" "}
                    website
                  </Link>
                </li>
                <li>
                  <span className="icon-holder">
                    <i className="email-icon"></i>
                  </span>
                  <Link to="mailto:info@retal.com">info@retal.com</Link>
                </li>
                <li>
                  <span className="icon-holder">
                    <i className="phone-icon"></i>
                  </span>
                  Call us at
                  <Link to="tel:+9668003030888">+966 800 303 0888</Link>
                </li>
              </ul>
            </div>

            <div className="contact-map half-screen">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3575.843616257482!2d50.2120739!3d26.3315629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e62f08476d37%3A0xd7b0c8ad9518770b!2z2YXYsdmD2LIg2LHYqtin2YQg2YTZhNij2LnZhdin2YQgfCBSZXRhbCBCdXNpbmVzcyBDZW50ZXLigI8!5e0!3m2!1sen!2s!4v1696739610747!5m2!1sen!2s"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
};

export default Contact;

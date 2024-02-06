import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mapImg from "../assets/deco/map.png";

import { iPageData, menuItemType } from "../reducer/PageModel";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faXTwitter,
  faTiktok,
  faDev,
  faStackOverflow,
  faGithub,
  faTwitch,
    faWhatsapp,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

function getCurrentYear() {
    const today  = new Date();
    return today.getFullYear();

}

export const Footer: React.FC<{ data: iPageData }> = ({ data }) => {
  function mapSocialIconFromId(socialId: string) {
    switch (socialId) {
      case "Facebook":
        return faFacebook;
      case "Instagram":
        return faInstagram;
      case "LinkedIn":
        return faLinkedin;
      case "XTwitter":
        return faXTwitter;
      case "Youtube":
        return faYoutube;
      case "Tiktok":
            return faTiktok;
        case "Dev":
            return faDev;
        case "StackOverflow":
            return faStackOverflow;
        case "Github": 
            return faGithub
        case 'Twitch':
            return faTwitch;
        case 'Whatsapp':
            return faWhatsapp;
        default:
            return faGoogle;

    }
  }

  return (
    <footer className="mil-dark-bg">
      <img src={mapImg} alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content mil-p-120-90">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 mil-mb-30">
              <img
                src={`${import.meta.env.VITE_API_URL}${
                  data.metaData.logoUrl
                }`}
                alt=""
                className="mil-logo mil-mb-30"
                style={{ width: "140px" }}
              />

              <p className="mil-light-soft mil-mb-30">
                {data.footerSection.orionBrief}
              </p>

              <a
                href={data.footerSection.playstoreButton.url}
                className="mil-app-btn mil-mb-5"
              >
                <i className="fab fa-google-play"></i>
                <div className="mil-app-text">
                  <span className="mil-accent mil-text-sm">
                    {data.footerSection.playstoreButton.label}
                  </span>
                  <div className="mil-h6">
                    {data.footerSection.playstoreButton.storeName}
                  </div>
                </div>
              </a>

              <a
                href={data.footerSection.appstoreButton.url}
                className="mil-app-btn mil-mb-5"
              >
                <i className="fab fa-google-play"></i>
                <div className="mil-app-text">
                  <span className="mil-accent mil-text-sm">
                    {data.footerSection.appstoreButton.label}
                  </span>
                  <div className="mil-h6">
                    {data.footerSection.appstoreButton.storeName}
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-7 mil-mt-60-adapt">
              <div className="row">
                <div className="col-lg-7 mil-mb-30">
                  <h3 className="mil-light mil-up-font mil-mb-30">
                    {data.footerSection.joinTitle.leftText}
                    <span className="mil-accent">
                      {data.footerSection.joinTitle.centerText}
                    </span>{" "}
                    {data.footerSection.joinTitle.rightText}
                  </h3>
                  <p className="mil-light-soft">
                    {data.footerSection.joinDescription}
                  </p>
                </div>
                <div className="col-lg-5 mil-mb-30">
                  <form>
                    <input
                      className="mil-rounded-input mil-text-center mil-mb-5"
                      type="text"
                      placeholder={data.footerSection.emailInputPlaceholder}
                    />
                    <button className="mil-button mil-accent-bg mil-fw">
                      <span>{data.footerSection.joinButton.label}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mil-divider mil-light"></div>

        <div className="mil-footer-links">
                  <ul className="mil-social mil-light">
                      {
                          data.footerSection.socialList.map((i: menuItemType, n: number) => (
                              <li className="mil-adapt-links" key={n}>
                                  <a href={i.url}>{i.text }</a>
                                <a href={i.url}><FontAwesomeIcon icon={ mapSocialIconFromId(i.text)}/></a>
            </li>

))
                      }

          </ul>
                  <ul className="mil-additional-links mil-light">
                      {
                          
                          data.footerSection.termsconditionList.map((i: menuItemType, n: number) => (
                              <li key={n}>
                                  <a href={ i.url}>{i.text }</a>
            </li>))
                      }

            
          </ul>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
                  <p className="mil-text-sm mil-light">© {data.footerSection.copyrightAuthor} {getCurrentYear() }</p>
                  <p className="mil-text-sm mil-light">{ data.footerSection.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

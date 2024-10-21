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
import { useState } from "react";
import api from "../api/api";


function getCurrentYear() {
  const today = new Date();
  return today.getFullYear();

}



export const Footer: React.FC<{ data: iPageData }> = ({ data }) => {


  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

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

  async function onSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(document.getElementById('formContactFooter') as HTMLFormElement);
    setError('');
    try {

      setShowLoading(true);
      const res = await api.post(`/api/sendemail`, {
        name: "Amigo(a)",
        email: formData.get("email"),
        phone: "No ingresado",
        message: formData.get("message"),
        template_id: "d-59e677f1fe0b4aeea317fb1d9ea97cdd"
      });
      if (!res.data.error) {
        setShowLoading(false);
        setIsSent(true);
      } else {
        setError(res.data.error)
      }

    }
    catch (e) {
      console.log(e);
      setIsSent(false);
      setError('Error')
    }

  }

  return (
    <footer className="mil-dark-bg">
      <img src={mapImg} alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content">
          <div className="row justify-content-between align-items-center">


            <div className="col-xl-12 mil-mt-60-adapt" >
              <div className="col-lg-12 mil-mb-30 mil-text-center">
                <h3 className="mil-light mil-up-font mil-mb-10">
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
              <form onSubmit={onSubmit} id="formContactFooter">
                <div className="row">
                  <div className="col-lg-4 mil-mb-30">

                    <input
                      className="mil-rounded-input mil-text-center mil-mb-5"
                      type="email"
                      name="email"
                      required
                      placeholder={data.footerSection.emailInputPlaceholder}
                    />

                  </div>

                  <div className="col-lg-4 mil-mb-30">
                    <input
                      className="mil-rounded-input mil-text-center mil-mb-5"
                      type="text"
                      name="message"
                      required
                      placeholder={data.footerSection.messageInputPlaceholder}
                    />
                  </div>
                  <div className="col-lg-4 mil-mb-30">

                    {!isSent && <button className="mil-button mil-accent-bg mil-fw" disabled={!isSent && showLoading}>
                      {showLoading ? <div className="spinner"></div>
                        : <span>{data.footerSection.joinButton.label}</span>}
                    </button>}

                  </div>
                  {isSent && !error && <div className="alert-success" style={{ display: "block" }}><h5>{data.contactSection.messageSentOk}</h5></div>}
                  {!!error && <div className="alert-error" style={{ display: "block" }}><h5>{data.contactSection.messageSentError}</h5></div>}


                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mil-divider mil-light"></div>

        <div className="mil-footer-links">
          <ul className="mil-social mil-light">
            {
              data.footerSection.socialList.map((i: menuItemType, n: number) => (
                <li className="mil-adapt-links" key={n}>
                  <a href={i.url}>{i.text}</a>
                  <a href={i.url}><FontAwesomeIcon icon={mapSocialIconFromId(i.text)} /></a>
                </li>

              ))
            }

          </ul>
          <ul className="mil-additional-links mil-light">
            {

              data.footerSection.termsconditionList.map((i: menuItemType, n: number) => (
                <li key={n}>
                  <a href={i.url}>{i.text}</a>
                </li>))
            }


          </ul>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">© {data.footerSection.copyrightAuthor} {getCurrentYear()}</p>
          <p className="mil-text-sm mil-light">{data.footerSection.copyright} {data.footerSection.copyrightAuthor}, {data.footerSection.orionBrief} </p>
        </div>
      </div>
    </footer>
  );
};

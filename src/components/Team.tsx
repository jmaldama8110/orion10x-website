import { useLoaderData } from "react-router-dom";
import mapImg from "../assets/deco/map.png";
import icon05 from "../assets/icons/md/5.svg";
import icon6l from "../assets/icons/md/6l.svg";
import {
  teamMemberType,
  valueParagraphType,
} from "../reducer/PageModel";


export const AboutTeamAndCompany = () => {

  const { pageData }: any = useLoaderData();

  return (
    <>
    <div style={ { height: "100px", background: "gray"}}></div>
      <div className="mil-wrapper" id="about">
        <div className="mil-banner-sm mil-deep-bg">
          <img src={mapImg} alt="background" className="mil-background-image" />
          <div
            className="mil-deco mil-deco-accent"
            style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
          ></div>
          <div className="mil-banner-content">
            <div className="container mil-relative">
              <ul className="mil-breadcrumbs mil-mb-30">
                <li>
                  <a href={pageData.teamCompanySection.pageBreadcrum.url}>
                    {pageData.teamCompanySection.pageBreadcrum.textLeft}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {pageData.teamCompanySection.pageBreadcrum.sectionName}
                  </a>
                </li>
              </ul>
              <h2 className="mil-uppercase">
                {pageData.teamCompanySection.headingText}
              </h2>
            </div>
          </div>
        </div>

        <section className="mil-team mil-p-120-60">
          <div className="container">
            <h3 className="mil-text-center mil-mb-120">
              {pageData.teamCompanySection.subtitle.leftText}{" "}
              <span className="mil-accent">
                {pageData.teamCompanySection.subtitle.centerText}
              </span>
              {pageData.teamCompanySection.subtitle.rightText}
            </h3>
            <div className="row">
              {pageData.teamCompanySection.team.map(
                (i: teamMemberType, n: number) => (
                  <div className="col-sm-6 col-lg-4" key={n}>
                    <a className="mil-team-card mil-mb-60">
                      <div className="mil-image-frame mil-mb-30">
                        <img
                          src={`${i.selfiUrl}`}
                          alt="Team member"
                        />
                        <div className="mil-team-circle"></div>
                      </div>
                      <h4 className="mil-mb-10">{i.name}</h4>
                      <p>{i.position}</p>
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="mil-divider"></div>
        </div>

        <section className="mil-icon-boxes mil-p-120-60">
          <div className="container">
            <div className="row align-items-center justify-content-between mil-mb-90">
              <div className="col-xl-6">
                <h2>
                  {pageData.teamCompanySection.valuesTitle.textLeft}
                  <span className="mil-accent">
                    {pageData.teamCompanySection.valuesTitle.textRight}
                  </span>
                </h2>
              </div>
              <div className="col-xl-5">
                <p>{pageData.teamCompanySection.valuesDescription}</p>
              </div>
            </div>
            <div className="row">
              {pageData.teamCompanySection.valuesParagraphs.map(
                (i: valueParagraphType, n: number) => (
                  <div className="col-md-6 col-xl-3" key={n}>
                    <div className="mil-icon-box mil-center mil-mb-60">
                      <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                        <img src={icon05} alt="icon" />
                      </div>
                      <h5 className="mil-mb-20">
                        <span className="mil-accent">{`0${n + 1}`}</span>&nbsp;{" "}
                        {i.title}
                      </h5>
                      <p>{i.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="call-to-action mil-gradient-bg mil-p-120-0">
          <div
            className="mil-deco mil-deco-accent"
            style={{ top: "0", left: "15%" }}
          ></div>
          <div className="container mil-text-center">
            <div className="mil-cta-frame">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
                <img src={icon6l} alt="icon" />
              </div>
              <p className="mil-light mil-mb-30">
                {pageData.teamCompanySection.ctaSubtitle}
              </p>
              <h2 className="mil-light mil-mb-30">
                {pageData.teamCompanySection.ctaTitle.leftText}{" "}
                <span className="mil-accent">
                  {" "}
                  {pageData.teamCompanySection.ctaTitle.centerText}
                </span>{" "}
                {pageData.teamCompanySection.ctaTitle.rightText}
              </h2>
              <p className="mil-light-soft mil-mb-60">
                {pageData.teamCompanySection.ctaDescription}
              </p>
              <a className="mil-button mil-border mil-light">
                <span>{pageData.teamCompanySection.ctaButton.label}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

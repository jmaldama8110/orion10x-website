import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import decoMap from '../assets/deco/map.png';
import { faArrowLeft, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CaseStudyType } from '../reducer/PageModel';
import { useLoaderData } from 'react-router-dom';

export const CaseStudies = () => {

  const { pageData }: any = useLoaderData();

  return (
    <>
      <div style={{ height: "100px", background: "gray" }}></div>
      <div id='case-studies'>
        <div className="mil-banner-sm mil-deep-bg">
          <img
            src={decoMap}
            alt="background"
            className="mil-background-image"
          />
          <div
            className="mil-deco mil-deco-accent"
            style={{ top: " 47%", right: "10%", transform: "rotate(90deg)" }}
          ></div>
          <div className="mil-banner-content">
            <div className="container mil-relative">
              <ul className="mil-breadcrumbs mil-mb-30">
                <li>
                  <a href={pageData.caseStudiesSection.pageBreadcrum.url}>{pageData.caseStudiesSection.pageBreadcrum.textLeft}</a>
                </li>
                <li>
                  <a href="portfolio.html">{pageData.caseStudiesSection.pageBreadcrum.sectionName}</a>
                </li>
              </ul>
              <h2 className="mil-uppercase">{pageData.caseStudiesSection.headingText}</h2>
            </div>
          </div>
        </div>

        <section className="mil-p-120-120">
          <div className="container">
            {
              pageData.caseStudiesSection.cases.map((i: CaseStudyType, n: number) => (
                <div className={n % 2 ? "row justify-content-between align-items-center" :
                  "row flex-sm-row-reverse justify-content-between align-items-center"} key={n}>
                  <div className="col-xl-6 mil-mb-60">
                    <div className="mil-project-cover">
                      <img src={`${i.imageUrl}`} alt="Project" />
                    </div>
                  </div>

                  <div className="col-xl-5 mil-mb-60">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                      {i.subtitle}
                    </span>
                    <h3 className="mil-mb-30">{i.title}</h3>
                    <a href={i.buttonUrl} className="mil-button-with-label" target='_blank'>
                      <div className="mil-button mil-border mil-icon-button">
                        <span>
                          <i><FontAwesomeIcon icon={faPlus} /></i>
                        </span>
                      </div>
                      <span className="mil-dark">{i.buttonLabel}</span>
                    </a>
                  </div>
                </div>

              ))
            }


            <div className="mil-divider mil-mb-60"></div>

            <div className="mil-pagination mil-hidden-arrows">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-blog-prev">
                  <i><FontAwesomeIcon icon={faArrowLeft} /></i>
                  <span className="mil-h6">Prev</span>
                </div>
              </div>
              <ul className="mil-pagination-numbers">
                <li className="mil-active">
                  <a href="portfolio.html">1</a>
                </li>
                <li>
                  <a href="portfolio.html">2</a>
                </li>
                <li>
                  <a href="portfolio.html">3</a>
                </li>
              </ul>
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-next mil-blog-next">
                  <span className="mil-h6">Next</span>
                  <i><FontAwesomeIcon icon={faArrowRight} /></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

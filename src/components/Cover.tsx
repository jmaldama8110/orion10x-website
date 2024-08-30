// import axios from "axios";
import { iPageData } from "../reducer/PageModel";


export const Cover: React.FC<{ data: iPageData }> = ({ data }) => {

  async function onCallToActionClick() {
    const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement;
    const demoVideoEl: HTMLIFrameElement = document.getElementById("demo-video-element") as HTMLIFrameElement;


    if (demoVideoEl.src != data.metaData.demoVideoUrl) {
      demoVideoEl.src = data.metaData.demoVideoUrl
    }
    modal.showModal();
  }

  return (
    <div className="cover">
      <div
        className="mil-banner-content"
        style={{ position: "absolute", top: "12rem" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8">
              <span className="mil-suptitle mil-mb-60">
                <span className="mil-light">
                  {data.introSection.twoColorTitle.textLeft}
                </span>{" "}
                <span className="mil-accent">
                  {data.introSection.twoColorTitle.textRight}
                </span>
              </span>
              <h1 className="mil-mb-60">
                <span className="mil-uppercase mil-light">
                  {data.introSection.largeTitle}
                </span>{" "}
                <span className="mil-font-3 mil-accent">
                  {data.introSection.subTitle}
                </span>
              </h1>
              <div className="mil-flex-hori-center">
                <div>
                  <a
                    className="mil-button mil-border mil-light"
                    onClick={onCallToActionClick}
                    style={{ marginRight: "1rem" }}
                  >
                    <span>{data.introSection.button.label}</span>
                  </a>
                </div>
                <p className="mil-button-descr mil-light-soft"
                  style={{ marginTop: "0.7rem" }}>
                  {" "}
                  {data.introSection.ctaDescription}
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-illustration-1">
                <div className="mil-item mil-item-1">
                  <div className="mil-plus">
                    <div className="mil-hover-window">
                      <div className="mil-window-content">
                        <h5 className="mil-dark mil-mb-15">
                          {data.introSection.floatingWords[0].title}
                        </h5>
                        <div className="mil-divider mil-divider-left mil-mb-15"></div>
                        <p className="mil-text-sm">
                          {data.introSection.floatingWords[0].description}
                        </p>
                      </div>
                    </div>
                    <div className="mil-item-hover">
                      <div className="mil-plus-icon">+</div>
                      <h6 className="mil-light">
                        {data.introSection.floatingWords[0].label}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="mil-item mil-item-2">
                  <div className="mil-plus">
                    <div className="mil-hover-window">
                      <div className="mil-window-content">
                        <h5 className="mil-dark mil-mb-15">
                          {data.introSection.floatingWords[1].title}
                        </h5>
                        <div className="mil-divider mil-divider-left mil-mb-15"></div>
                        <p className="mil-text-sm">
                          {data.introSection.floatingWords[1].description}
                        </p>
                      </div>
                    </div>
                    <div className="mil-item-hover">
                      <div className="mil-plus-icon">+</div>
                      <h6 className="mil-light">
                        {data.introSection.floatingWords[1].label}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="mil-item mil-item-3">
                  <div className="mil-plus">
                    <div className="mil-hover-window">
                      <div className="mil-window-content">
                        <h5 className="mil-dark mil-mb-15">
                          {data.introSection.floatingWords[2].title}
                        </h5>
                        <div className="mil-divider mil-divider-left mil-mb-15"></div>
                        <p className="mil-text-sm">
                          {data.introSection.floatingWords[2].description}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="mil-item-hover">
                      <div className="mil-plus-icon">+</div>
                      <h6 className="mil-light">
                        {data.introSection.floatingWords[2].label}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

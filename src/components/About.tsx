import icon01 from "../assets/icons/sm/1.svg";
import icon02 from "../assets/icons/sm/2.svg";
import icon03 from "../assets/icons/sm/3.svg";
import icon04 from "../assets/icons/sm/4.svg";

export function About() {
  return (
    <section className="mil-how-it-works mil-deep-bg mil-p-120-90">
      <div className="mil-deco" style={{ top: "0", right: "20%" }}></div>
      <div
        className="mil-deco"
        style={{ bottom: 0, left: "30%", transform: "rotate(180deg)" }}
      ></div>
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Descubre quienes somos
        </span>
        <h2 className="mil-mb-90">
          ¿Cómo podemos <span className="mil-accent">Colaborar</span> Contigo?
        </h2>
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="mil-mb-60">
              <div className="mil-icon-box-head mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src={icon01} alt="icon" />
                </div>
                <h5>Imagina Grandes Cosas</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="mil-mb-60">
              <div className="mil-icon-box-head mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src={icon02} alt="icon" />
                </div>
                <h5>Empieza con Poco</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="mil-mb-60">
              <div className="mil-icon-box-head mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src={icon03} alt="icon" />
                </div>
                <h5>Crea Rapidamente</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="mil-mb-60">
              <div className="mil-icon-box-head mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src={icon04} alt="icon" />
                </div>
                <h5>Crecimiento Exponencial</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6">
            <a href="#." className="mil-link mil-mb-30">
              <span>Saber más</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <a href="#." className="mil-button mil-border mil-mb-30">
                <span>¿Cómo trabajamos?</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

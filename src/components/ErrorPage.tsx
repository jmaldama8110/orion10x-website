import { Link } from 'react-router-dom';
import imgMap from '../assets/deco/map.png';

export const ErrorPage = () => {
    return (
        
        <div className="mil-dark-bg mil-add-page">
            <div className="mil-deco mil-deco-accent" style={{ top: "40vh", right: "10%", transform: "rotate(90deg)" }}></div>
            <img src={imgMap} alt="background" className="mil-map-bg" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4">

                        <div className="mil-text-center mil-mb-30">
                            <h5 className="mil-light">Ooops!</h5>
                            <h1 className="mil-light mil-404-number">404</h1>
                            <h5 className="mil-light">Sitio <span className="mil-accent">no</span> existe</h5>
                        </div>

                    </div>
                    <div className="col-xl-4">

                        <div className="mil-404-text">
                            <p className="mil-light-soft mil-mb-30">Al parecer esta dirección ya no existe, envianos un email para apoyarte.</p>
                            <Link to="/" className="mil-button mil-border mil-light" ><span>Volver al Inicio</span></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
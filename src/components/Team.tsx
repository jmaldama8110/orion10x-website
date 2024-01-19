
import mapImg from '../assets/deco/map.png'; 
import jaimeSefi from '../assets/faces/jaime-selfi.jpeg';
import jmSefi from '../assets/faces/jm-selfi.jpg';
import fabianSefi from '../assets/faces/fabian-selfi.jpeg';
import icon05 from '../assets/icons/md/5.svg';
import icon6l from '../assets/icons/md/6l.svg';

export function Team() {
    
    return (

        <div className="mil-wrapper">

        <div className="mil-banner-sm mil-deep-bg">
            <img src={mapImg} alt="background" className="mil-background-image"/>
            <div className="mil-deco mil-deco-accent" style={{top: "47%", right: "10%", transform: "rotate(90deg)"}}></div>
            <div className="mil-banner-content">
                <div className="container mil-relative">
                    <ul className="mil-breadcrumbs mil-mb-30">
                        <li><a href="home-1.html">Inicio</a></li>
                        <li><a href="team.html">Equipo</a></li>
                    </ul>
                    <h2 className="mil-uppercase">Nuestro Equipo</h2>
                </div>
            </div>
            </div>
            
        <section className="mil-team mil-p-120-60">
            <div className="container">
                <h3 className="mil-text-center mil-mb-120">It is a long established fact that a <span className="mil-accent">reader will be distracted</span> by the readable content.</h3>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">

                        <a href="team-single.html" className="mil-team-card mil-mb-60">
                            <div className="mil-image-frame mil-mb-30">
                                <img src={jaimeSefi} alt="Team member"/>
                                <div className="mil-team-circle"></div>
                            </div>
                            <h4 className="mil-mb-10">Jaime Leonardo Lara</h4>
                            <p>Especialista PMP</p>
                        </a>

                    </div>
                    <div className="col-sm-6 col-lg-4">

                        <a href="team-single.html" className="mil-team-card mil-mb-60">
                            <div className="mil-image-frame mil-mb-30">
                                <img src={jmSefi} alt="Team member"/>
                                <div className="mil-team-circle"></div>
                            </div>
                            <h4 className="mil-mb-10">Jose Manuel Gomez</h4>
                            <p>Director de IT</p>
                        </a>

                    </div>
                    <div className="col-sm-6 col-lg-4">

                        <a href="team-single.html" className="mil-team-card mil-mb-60 mil-mb-30">
                            <div className="mil-image-frame mil-mb-30">
                                <img src={fabianSefi} alt="Team member"/>
                                <div className="mil-team-circle"></div>
                            </div>
                            <h4 className="mil-mb-10">Marco Fabian Arreola</h4>
                            <p>Director de Operaciones</p>
                        </a>

                    </div>

                   

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

                        <h2>Valores que <span className="mil-accent">Nos Guian</span></h2>

                    </div>
                    <div className="col-xl-5">

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xl-3">

                        <div className="mil-icon-box mil-center mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <img src={icon05} alt="icon"/>
                            </div>
                            <h5 className="mil-mb-20"><span className="mil-accent">01.</span>&nbsp; Productivity</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                        </div>

                    </div>
                    <div className="col-md-6 col-xl-3">

                        <div className="mil-icon-box mil-center mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <img src={icon05} alt="icon"/>
                            </div>
                            <h5 className="mil-mb-20"><span className="mil-accent">02.</span>&nbsp; Transparency</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                        </div>

                    </div>
                    <div className="col-md-6 col-xl-3">

                        <div className="mil-icon-box mil-center mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <img src={icon05} alt="icon"/>
                            </div>
                            <h5 className="mil-mb-20"><span className="mil-accent">03.</span>&nbsp; Personality</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                        </div>

                    </div>
                    <div className="col-md-6 col-xl-3">

                        <div className="mil-icon-box mil-center mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <img src={icon05} alt="icon"/>
                            </div>
                            <h5 className="mil-mb-20"><span className="mil-accent">04.</span>&nbsp; Volition</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        
    
        <section className="call-to-action mil-gradient-bg mil-p-120-0">
            <div className="mil-deco mil-deco-accent" style={{ top: '0', left:'15%'}}></div>
            <div className="container mil-text-center">
                <div className="mil-cta-frame">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
                        <img src={icon6l} alt="icon" />
                    </div>
                    <p className="mil-light mil-mb-30">Leadership Team</p>
                    <h2 className="mil-light mil-mb-30">Let’s <span className="mil-accent">Open the World</span> of IT to You</h2>
                    <p className="mil-light-soft mil-mb-60">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <a href="#." className="mil-button mil-border mil-light"><span>Book an Appointment</span></a>
                </div>
            </div>
        </section>
        


    </div>
    );
}
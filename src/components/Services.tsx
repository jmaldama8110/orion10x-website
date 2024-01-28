
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import decoMap from '../assets/deco/map.png';
import icon01 from '../assets/icons/md/1.svg';
import icon02 from '../assets/icons/md/2.svg';
import icon03 from '../assets/icons/md/3.svg';
import icon04 from '../assets/icons/md/4.svg';
import icon05 from '../assets/icons/md/5.svg';
import icon06 from '../assets/icons/md/6.svg';

import iconSm01 from '../assets/icons/sm/1.svg';
import iconSm02 from '../assets/icons/sm/2.svg';
import iconSm03 from '../assets/icons/sm/3.svg';
import iconSm04 from '../assets/icons/sm/4.svg';
import iconSm05 from '../assets/icons/sm/5.svg';
import iconSm06 from '../assets/icons/sm/6.svg';
import iconSm07 from '../assets/icons/sm/7.svg';
import iconSm08 from '../assets/icons/sm/8.svg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Services = () => {
    return (
        <div id="services">

            <div className="mil-banner-sm mil-deep-bg">
                <img src={decoMap} alt="background" className="mil-background-image" />
                    <div className="mil-deco mil-deco-accent" style={{top: "47%", right: "10%", transform: "rotate(90deg)"}}></div>
                    <div className="mil-banner-content">
                        <div className="container mil-relative">
                            <ul className="mil-breadcrumbs mil-mb-30">
                                <li><a href="home-1.html">Home</a></li>
                                <li><a href="service-1.html">Service</a></li>
                            </ul>
                            <h2 className="mil-uppercase">SaaS development services</h2>
                        </div>
                    </div>
            </div>

            <section className="mil-p-120-90">
                <div className="mil-deco" style={{bottom: "0", right: "25%", transform: "rotate(180deg)"}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="mil-hori-box mil-mb-30">
                                <div className="mil-mr-30">
                                    <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                                        <img src={icon01} alt="icon"/>
                                    </div>
                                </div>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu quis ipsum suspendisse ultrices gravida.</h5>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-button mil-border mil-mb-30"><span>Get in Touch</span></a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="mil-divider"></div>
            </div>

            <section className="mil-p-120-90">
                <div className="mil-deco" style={{bottom: "0", right: "35%", transform: "rotate(180deg)"}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mil-mb-90">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Services and Solutions</span>
                            <h2 className="mil-mb-30">Our SaaS Development Services Let You Win Big</h2>
                            <p className="mil-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-xl-4">

                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-circle mil-mb-30">
                                    <span>01</span>
                                </div>
                                <h4 className="mil-mb-15">SaaS Development Consulting</h4>
                                <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.</p>
                            </div>

                        </div>
                        <div className="col-xl-4">

                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-lines mil-mb-30">
                                    <span>02</span>
                                </div>
                                <h4 className="mil-mb-15">SaaS Design and Prototyping</h4>
                                <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.</p>
                            </div>

                        </div>
                        <div className="col-xl-4">

                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-mb-30">
                                    <span>03</span>
                                </div>
                                <h4 className="mil-mb-15">End-to-End SaaS Development</h4>
                                <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.</p>
                            </div>

                        </div>
                        <div className="col-xl-4">

                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-mb-30">
                                    <span>04</span>
                                </div>
                                <h4 className="mil-mb-15">Migration to SaaS</h4>
                                <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.</p>
                            </div>

                        </div>
                        <div className="col-xl-4">

                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-circle mil-mb-30">
                                    <span>05</span>
                                </div>
                                <h4 className="mil-mb-15">Third Party Integrations</h4>
                                <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.</p>
                            </div>

                        </div>
                        <div className="col-xl-4">

                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-lines mil-mb-30">
                                    <span>06</span>
                                </div>
                                <h4 className="mil-mb-15">SaaS Support and Maintenance</h4>
                                <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.</p>
                            </div>

                        </div>

                    </div>
                    
                    
                    {/* <div className="row align-items-center">
                        <div className="col-md-6 col-xl-6">

                            <a href="#." className="mil-button mil-border mil-mb-30"><span>Tell us about your project</span></a>

                        </div>
                        <div className="col-md-6 col-xl-6">

                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-link mil-mb-30"><span>See More</span><i><FontAwesomeIcon icon={faArrowRight} /></i></a>
                            </div>

                        </div>
                    </div> */}
                    
                    
                </div>
            </section>
            {/* <div className="container">
                <div className="mil-divider"></div>
            </div> */}
            {/* <section className="mil-p-120-0">
                <div className="container">

                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Safeguard Modern</span>
                        <h2>Ready To Take The Next Step?</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">

                            <div className="mil-hover-card mil-mb-30">
                                <h4 className="mil-mb-30">Get a Live Demo</h4>
                                <p className="mil-mb-30">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on.</p>
                                <a href="#." className="mil-link"><span>Request a Free Demo</span><i><FontAwesomeIcon icon={faArrowRight} /></i></a>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-hover-card mil-mb-30">
                                <h4 className="mil-mb-30">Start Now</h4>
                                <p className="mil-mb-30">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on.</p>
                                <a href="#." className="mil-link"><span>Get In Touch</span><i><FontAwesomeIcon icon={faArrowRight}/></i></a>
                            </div>

                        </div>
                    </div>

                </div>
            </section> */}
            
            
            {/* <section className="mil-services mil-p-120-90">
                <div className="mil-deco" style={{bottom: "0", right: "40%", transform: "rotate(180deg)"}}></div>
                <div className="container">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">High Quality and Performance</span>
                    <h2 className="mil-mb-90">Our Approach To <span className="mil-accent">SaaS Software</span> Development</h2>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src={icon01} alt="icon"/>
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30"><span className="mil-accent">01</span> Tech Stack Choice</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src={icon02} alt="icon"/>
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30"><span className="mil-accent">02</span> Multi Tenant Architecture</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src={icon03} alt="icon"/>
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30"><span className="mil-accent">03</span> External Services Integration</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src={icon04} alt="icon"/>
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30"><span className="mil-accent">04</span> Scalability On Demand</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src={icon05} alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30"><span className="mil-accent">05</span> Security Audit</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src={icon06} alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30"><span className="mil-accent">06</span> Smooth Deployment</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-6">

                            <a href="#." className="mil-button mil-border mil-mb-30"><span>Talk To Our SaaS Experts</span></a>

                        </div>
                        <div className="col-md-6 col-xl-6">

                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-link mil-mb-30"><span>See More</span><i><FontAwesomeIcon icon={faArrowRight} /></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}

            <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{top: "0", left: "5%",}}></div>
                <div className="container">
                    <div className="mil-text-center mil-mb-90">
                        <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">Always The Best</span>
                        <h2 className="mil-light mil-mb-30">Types Of <span className="mil-accent">SaaS Applications</span> We Deliver</h2>
                        <p className="mil-light-soft">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src={ iconSm06} alt="icon" />
                                </div>
                                <p className="mil-light">CRMs Platforms</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src={iconSm02} alt="icon" />
                                </div>
                                <p className="mil-light">ERPs Platforms</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src={iconSm07} alt="icon" />
                                </div>
                                <p className="mil-light">Marketing Software</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src={iconSm03} alt="icon" />
                                </div>
                                <p className="mil-light">Project Management Systems</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src={iconSm05} alt="icon" />
                                </div>
                                <p className="mil-light">Accounting Systems</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src= {iconSm01} alt="icon" />
                                </div>
                                <p className="mil-light">Document Auto. Solutions</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src= {iconSm04} alt="icon" />
                                </div>
                                <p className="mil-light">Cybersecurity Platforms</p>
                            </div>

                        </div>
                        <div className="col-lg-3">

                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src={ iconSm08} alt="icon" />
                                </div>
                                <p className="mil-light">HR/HRM Software</p>
                            </div>

                        </div>
                    </div>
                    <div className="mil-text-center">
                        <a href="#." className="mil-button mil-border mil-light mil-mb-30"><span>Talk To Our SaaS Experts</span></a>
                    </div>
                </div>
            </section>

        </div>);
};

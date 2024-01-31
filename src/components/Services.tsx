

import decoMap from '../assets/deco/map.png';
import icon01 from '../assets/icons/md/1.svg';

import { IconListItem, iPageData, valueParagraphType } from '../reducer/PageModel';


export const Services: React.FC<{ data: iPageData }> = ({ data })=> {
    return (
        <div id="services">

            <div className="mil-banner-sm mil-deep-bg">
                <img src={decoMap} alt="background" className="mil-background-image" />
                    <div className="mil-deco mil-deco-accent" style={{top: "47%", right: "10%", transform: "rotate(90deg)"}}></div>
                    <div className="mil-banner-content">
                        <div className="container mil-relative">
                            <ul className="mil-breadcrumbs mil-mb-30">
                            <li><a href={data.servicesSection.pageBreadcrumb.url}>{ data.servicesSection.pageBreadcrumb.textLeft}</a></li>
                            <li><a href="service-1.html">{ data.servicesSection.pageBreadcrumb.sectionName}</a></li>
                            </ul>
                        <h2 className="mil-uppercase">{ data.servicesSection.headingTitle}</h2>
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
                                <h5>{ data.servicesSection.ctaDescription}</h5>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mil-adaptive-right">
                                <a href="#." className="mil-button mil-border mil-mb-30"><span>{ data.servicesSection.ctaButton.label}</span></a>
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
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{data.servicesSection.subtitle }</span>
                            <h2 className="mil-mb-30">{ data.servicesSection.headingSubtitle}</h2>
                            <p className="mil-dark">{data.servicesSection.subtitleDescription }</p>
                        </div>
                    </div>
                    <div className="row mil-mb-30-adapt">
                    {
                            data.servicesSection.paragraphs.map((i: valueParagraphType,n:number) => (
                        <div className="col-xl-4" key={n}>
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-circle mil-mb-30">
                                            <span>{`0${(n+1)}`}</span>
                                </div>
                                    <h4 className="mil-mb-15">{ i.title}</h4>
                                    <p>{i.description }</p>
                            </div>
                        </div>

))        
                    }


                    </div>
                    
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
                        <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">{ data.servicesSection.footNote }</span>
                        <h2 className="mil-light mil-mb-30">{data.servicesSection.footNoteHeading.leftText} <span className="mil-accent">{data.servicesSection.footNoteHeading.centerText}</span> {data.servicesSection.footNoteHeading.rightText }</h2>
                        <p className="mil-light-soft">{ data.servicesSection.footNoteDescription}</p>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        
                        {
                            data.servicesSection.footNoteIconList.map((i: IconListItem,n:number) => (
                        <div className="col-lg-3" key={n}>
                            <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                    <img src={`${import.meta.env.VITE_API_URL}${i.iconImg}`} alt="icon" />
                                </div>
                                <p className="mil-light">{ i.label}</p>
                            </div>
                        </div>
                                
                            ))
                        }

                    </div>
                    <div className="mil-text-center">
                        <a href="#." className="mil-button mil-border mil-light mil-mb-30"><span>{ data.servicesSection.footNoteCta.label}</span></a>
                    </div>
                </div>
            </section>

        </div>);
};

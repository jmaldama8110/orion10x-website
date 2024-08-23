

import { useLoaderData } from 'react-router-dom';
import decoMap from '../assets/deco/map.png';
import icon01 from '../assets/icons/md/1.svg';

import { IconListItem, valueParagraphType } from '../reducer/PageModel';

export const Services = () => {

    const { pageData }: any = useLoaderData();
    return (
        <>
            <div style={{ height: "100px", background: "gray" }}></div>

            <div id="services">

                <div className="mil-banner-sm mil-deep-bg">
                    <img src={decoMap} alt="background" className="mil-background-image" />
                    <div className="mil-deco mil-deco-accent" style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}></div>
                    <div className="mil-banner-content">
                        <div className="container mil-relative">
                            <ul className="mil-breadcrumbs mil-mb-30">
                                <li><a href={pageData.servicesSection.pageBreadcrumb.url}>{pageData.servicesSection.pageBreadcrumb.textLeft}</a></li>
                                <li><a href="service-1.html">{pageData.servicesSection.pageBreadcrumb.sectionName}</a></li>
                            </ul>
                            <h2 className="mil-uppercase">{pageData.servicesSection.headingTitle}</h2>
                        </div>
                    </div>
                </div>

                <section className="mil-p-120-90">
                    <div className="mil-deco" style={{ bottom: "0", right: "25%", transform: "rotate(180deg)" }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mil-hori-box mil-mb-30">
                                    <div className="mil-mr-30">
                                        <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                                            <img src={icon01} alt="icon" />
                                        </div>
                                    </div>
                                    <h5>{pageData.servicesSection.ctaDescription}</h5>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mil-adaptive-right">
                                    <a href="#." className="mil-button mil-border mil-mb-30"><span>{pageData.servicesSection.ctaButton.label}</span></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="mil-divider"></div>
                </div>

                <section className="mil-p-120-90">
                    <div className="mil-deco" style={{ bottom: "0", right: "35%", transform: "rotate(180deg)" }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mil-mb-90">
                                <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{pageData.servicesSection.subtitle}</span>
                                <h2 className="mil-mb-30">{pageData.servicesSection.headingSubtitle}</h2>
                                <p className="mil-dark">{pageData.servicesSection.subtitleDescription}</p>
                            </div>
                        </div>
                        <div className="row mil-mb-30-adapt">
                            {
                                pageData.servicesSection.paragraphs.map((i: valueParagraphType, n: number) => (
                                    <div className="col-xl-4" key={n}>
                                        <div className="mil-mb-60">
                                            <div className="mil-number-icon mil-circle mil-mb-30">
                                                <span>{`0${(n + 1)}`}</span>
                                            </div>
                                            <h4 className="mil-mb-15">{i.title}</h4>
                                            <p>{i.description}</p>
                                        </div>
                                    </div>

                                ))
                            }


                        </div>

                    </div>
                </section>



                <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
                    <div className="mil-deco mil-deco-accent" style={{ top: "0", left: "5%", }}></div>
                    <div className="container">
                        <div className="mil-text-center mil-mb-90">
                            <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">{pageData.servicesSection.footNote}</span>
                            <h2 className="mil-light mil-mb-30">{pageData.servicesSection.footNoteHeading.leftText} <span className="mil-accent">{pageData.servicesSection.footNoteHeading.centerText}</span> {pageData.servicesSection.footNoteHeading.rightText}</h2>
                            <p className="mil-light-soft">{pageData.servicesSection.footNoteDescription}</p>
                        </div>
                        <div className="row mil-mb-30-adapt">

                            {
                                pageData.servicesSection.footNoteIconList.map((i: IconListItem, n: number) => (
                                    <div className="col-lg-3" key={n}>
                                        <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                                            <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                                                <img src={`${i.iconImg}`} alt="icon" />
                                            </div>
                                            <p className="mil-light">{i.label}</p>
                                        </div>
                                    </div>

                                ))
                            }

                        </div>
                        <div className="mil-text-center">
                            <a href="#." className="mil-button mil-border mil-light mil-mb-30"><span>{pageData.servicesSection.footNoteCta.label}</span></a>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

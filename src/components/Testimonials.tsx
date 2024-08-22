import icon07 from '../assets/icons/md/7.svg'
import face01 from '../assets/faces/fabian-selfi.jpeg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {  faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { iPageData, TestimonialEntryType } from '../reducer/PageModel';

export const Testimonials: React.FC<{ data: iPageData }> = ({ data }) => {


    return (
        <>

            <section className="mil-reviews mil-p-120-120">
                <div className="container">
                    <h2 className="mil-mb-30">Testimonios de <span className="mil-accent">nuestros clientes</span></h2>
                    <div className="swiper-container mil-revi-slider-2">

                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            speed={2500}
                            autoplay={{ delay: 1000, waitForTransition: true }}
                            allowTouchMove={true}
                            slidesPerView={2}
                        >
                            {
                                data.testimonialSection.testimonialsList.map( (rev:TestimonialEntryType, num) => (
                                    <SwiperSlide key={num}>

                                    <div className="mil-review mil-text-center">
                                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <img src={icon07} alt="icon" />
                                        </div>
                                        <p className="mil-mb-30">{rev.quote}</p>
                                        <div className="mil-stars mil-mb-30">
                                            <ul>
                                                <li><FontAwesomeIcon icon={faStar} size='1x' color="orange"/></li>
                                                <li><FontAwesomeIcon icon={faStar} size='1x' color="orange"/></li>
                                                <li><FontAwesomeIcon icon={faStar} size='1x' color="orange"/></li>
                                                <li><FontAwesomeIcon icon={faStar} size='1x' color="orange"/></li>
                                                <li><FontAwesomeIcon icon={faStar} size='1x' color="orange"/></li>
                                            </ul>
                                        </div>
                                        <div className="mil-author">
                                            <img src={rev.selfiUrl} alt="Customer" />
                                            <div className="mil-name">
                                                <h6>{rev.displayName}</h6>
                                                <span className="mil-text-sm">{rev.position}</span>
                                            </div>
                                        </div>
                                    </div>
    
    
                                </SwiperSlide>
                                ))

                            }

                        </Swiper>

                    </div>
                </div>
            </section>

            <section className="call-to-action mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, left: "15%" }}></div>
                <div className="container mil-text-center">
                    <div className="mil-cta-frame">
                            <FontAwesomeIcon  icon={faGooglePlusSquare} size='4x' color="white"/>
                            <br/>
                        <p className="mil-light mil-mb-30">+100 calificacione positivas en Google</p>
                        <h2 className="mil-light mil-mb-30"><span className="mil-accent">Visita</span> Nuestro Canal</h2>
                        <p className="mil-light-soft mil-mb-60">It is a long established fact that a reader will be distracted by the readable content <br /> of a page when looking at its layout.</p>
                        <a href="https://www.youtube.com/@Orion-10x" className="mil-button-with-label " style={{marginBottom: "2rem"}}>
                            <div className="mil-button mil-border mil-icon-button mil-light"><span><FontAwesomeIcon icon={faPlay} size="2x" /></span></div><span className="mil-light">Ver Videos</span>
                        </a>
                    </div>
                </div>
            </section>
        </>

    );
}
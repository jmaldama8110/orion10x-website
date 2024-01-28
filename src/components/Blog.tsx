import jmSelfi from '../assets/faces/jm-selfi.jpg';
import blog01 from '../assets/blog/1.jpg';
import blog02 from '../assets/blog/2.jpg';
import blog03 from '../assets/blog/3.jpg';
import blog04 from '../assets/blog/4.jpg';
import blog05 from '../assets/blog/5.jpg';
import blog06 from '../assets/blog/6.jpg';
import decoMap from '../assets/deco/map.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Blog = () => {
    return (

    <div id="blog">
        
        <div className="mil-banner-sm mil-deep-bg">
            <img src={decoMap} alt="background" className="mil-background-image" />
            <div className="mil-deco mil-deco-accent" style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}></div>
            <div className="mil-banner-content">
                <div className="container mil-relative">
                    <ul className="mil-breadcrumbs mil-mb-30">
                        <li><a href="home-2.html">Home</a></li>
                        <li><a href="careers.html">Blog</a></li>
                    </ul>
                    <h2 className="mil-uppercase">Our Blog</h2>
                </div>
            </div>
        </div>
        
        <section className="mil-blog mil-p-120-0">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-8 col-xl-8 mil-mb-120">

                        <a href="publication.html" className="mil-card mil-mb-60">
                            <div className="mil-cover-frame">
                                <img src={blog01} alt="project" />
                            </div>
                            <div className="mil-description">
                                <div className="mil-card-title">
                                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                                        <li>Management</li>
                                        <li>29 Oct. 2023</li>
                                    </ul>
                                    <h4>Easy & Most Powerful Server Platform.</h4>
                                </div>
                                <div className="mil-card-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                        </a>

                        <a href="publication.html" className="mil-card mil-mb-60">
                            <div className="mil-cover-frame">
                                <img src={blog02} alt="project" />
                            </div>
                            <div className="mil-description">
                                <div className="mil-card-title">
                                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                                        <li>Management</li>
                                        <li>29 Oct. 2023</li>
                                    </ul>
                                    <h4>Easy & Most Powerful Server Platform.</h4>
                                </div>
                                <div className="mil-card-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                        </a>

                        <a href="publication.html" className="mil-card mil-mb-60">
                            <div className="mil-cover-frame">
                                <img src={blog03} alt="project" />
                            </div>
                            <div className="mil-description">
                                <div className="mil-card-title">
                                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                                        <li>Management</li>
                                        <li>29 Oct. 2023</li>
                                    </ul>
                                    <h4>Easy & Most Powerful Server Platform.</h4>
                                </div>
                                <div className="mil-card-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                        </a>

                        <div className="mil-divider mil-mb-60"></div>

                        <div className="mil-pagination mil-hidden-arrows">
                            <div className="mil-slider-nav">
                                <div className="mil-slider-btn-prev mil-blog-prev"><i><FontAwesomeIcon icon={ faArrowLeft} /></i><span className="mil-h6">Prev</span></div>
                            </div>
                            <ul className="mil-pagination-numbers">
                                <li className="mil-active"><a href="#.">1</a></li>
                                <li><a href="#.">2</a></li>
                                <li><a href="#.">3</a></li>
                            </ul>
                            <div className="mil-slider-nav">
                                <div className="mil-slider-btn-next mil-blog-next"><span className="mil-h6">Next</span><i><FontAwesomeIcon icon={ faArrowRight} /></i></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-xl-3 mil-mb-120">

                        <div className="mil-mb-60">
                            <h5 className="mil-list-title mil-mb-30">About Orion Digital</h5>
                            <p className="mil-mb-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                            <a href="team-single.html" className="mil-post-sm mil-mb-15">
                                <div className="mil-cover-frame"><img src={jmSelfi} alt="cover"/></div>
                                <div className="mil-description">
                                    <h4 className="mil-font-3 mil-accent">Jane Meldrum</h4>
                                    <p className="mil-text-sm">CEO & Co-Founder</p>
                                </div>
                            </a>
                        </div>
                        <div className="mil-divider mil-mb-60"></div>
                        <form className="mil-sidebar-input-frame mil-mb-60">
                            <input type="text" className="mil-sidebar-input" placeholder="Search here..." />
                                <button type="submit"><i><FontAwesomeIcon icon={ faSearch} /></i></button>
                        </form>
                        <div className="mil-divider mil-mb-60"></div>
                        <div className="mil-mb-60">
                            <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
                            <a href="publication.html" className="mil-post-sm mil-mb-15">
                                <div className="mil-cover-frame"><img src={blog06} alt="cover"/> </div>
                                <div className="mil-description">
                                    <h6>The World’s Fastest 2 Qubit Qate</h6>
                                </div>
                            </a>
                            <a href="publication.html" className="mil-post-sm mil-mb-15">
                                <div className="mil-cover-frame"><img src={blog05} alt="cover" /></div>
                                <div className="mil-description">
                                    <h6>Build Your Money Machine, Take Control</h6>
                                </div>
                            </a>
                            <a href="publication.html" className="mil-post-sm mil-mb-15">
                                <div className="mil-cover-frame"><img src={blog04} alt="cover"/></div>
                                <div className="mil-description">
                                    <h6>Android App For Shaving Products Drive</h6>
                                </div>
                            </a>
                            <a href="publication.html" className="mil-post-sm mil-mb-15">
                                <div className="mil-cover-frame"><img src={blog03} alt="cover"/></div>
                                <div className="mil-description">
                                    <h6>Positioning Your Self As a Pro Consultant</h6>
                                </div>
                            </a>
                        </div>
                        <div className="mil-divider mil-mb-60"></div>
                        <div className="mil-mb-60">
                            <h5 className="mil-list-title mil-mb-30">Categories</h5>
                            <ul className="mil-hover-link-list">
                                <li>
                                    <a href="#.">Business</a>
                                </li>
                                <li>
                                    <a href="#.">Design</a>
                                </li>
                                <li>
                                    <a href="#.">Development</a>
                                </li>
                                <li>
                                    <a href="#.">Management</a>
                                </li>
                                <li>
                                    <a href="#.">Software</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mil-divider mil-mb-60"></div>
                        <div className="mil-mb-60">
                            <h5 className="mil-list-title mil-mb-30">Tags</h5>
                            <ul className="mil-tags">
                                <li><a href="#.">Business</a></li>
                                <li><a href="#.">Design</a></li>
                                <li><a href="#.">General</a></li>
                                <li><a href="#.">Development</a></li>
                                <li><a href="#.">Learning</a></li>
                            </ul>
                        </div>
                        <div className="mil-divider mil-mb-60"></div>
                        <div className="mil-mb-60">
                            <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
                            <form className="mil-sidebar-input-frame">
                                <input type="text" className="mil-sidebar-input" placeholder="Your email address"/>
                                    <button type="submit"><i><FontAwesomeIcon icon={ faArrowRight} /></i></button>
                            </form>
                        </div>
                        <div className="mil-divider mil-mb-60"></div>
                        <h5 className="mil-list-title mil-mb-30">Contact us</h5>
                        <p className="mil-mb-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <a href="contact.html" className="mil-link"><span>Send</span><i><FontAwesomeIcon icon={ faArrowRight} /></i></a>

                    </div>
                </div>
            </div>
            
            
        </section>            

    </div>
    );
}
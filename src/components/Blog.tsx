import decoMap from '../assets/deco/map.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BlogEntryType, IconListItem } from '../reducer/PageModel';
import { useLoaderData } from 'react-router-dom';

export const Blog = () => {

    const { pageData }: any = useLoaderData();
    return (
        <>
        <div style={{ height: "100px", background: "gray" }}></div>
        <div id="blog">

            <div className="mil-banner-sm mil-deep-bg">
                <img src={decoMap} alt="background" className="mil-background-image" />
                <div className="mil-deco mil-deco-accent" style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">
                        <ul className="mil-breadcrumbs mil-mb-30">
                            <li><a href={pageData.blogSection.pageBreadcrumb.url}>{pageData.blogSection.pageBreadcrumb.textLeft}</a></li>
                            <li><a href="careers.html">{pageData.blogSection.pageBreadcrumb.sectionName}</a></li>
                        </ul>
                        <h2 className="mil-uppercase">{pageData.blogSection.headingTitle}</h2>
                    </div>
                </div>
            </div>

            <section className="mil-blog mil-p-120-0">
                <div className="container">

                    <div className="row justify-content-between">

                        <div className="col-lg-8 col-xl-8 mil-mb-120">
                            {
                                pageData.blogSection.entries.map((i: BlogEntryType, n: number) => (
                                    <a href="publication.html" className="mil-card mil-mb-60" key={n}>
                                        <div className="mil-cover-frame">
                                            <img src={`${i.imageUrl}`} alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <ul className="mil-dot-list mil-text-sm mil-mb-15">
                                                    <li>{i.category}</li>
                                                    <li>{i.dateIssued}</li>
                                                </ul>
                                                <h4>{i.title}</h4>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>{i.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            <div className="mil-divider mil-mb-60"></div>

                            <div className="mil-pagination mil-hidden-arrows">
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-prev mil-blog-prev"><i><FontAwesomeIcon icon={faArrowLeft} /></i><span className="mil-h6">Prev</span></div>
                                </div>
                                <ul className="mil-pagination-numbers">
                                    <li className="mil-active"><a href="#.">1</a></li>
                                    <li><a href="#.">2</a></li>
                                    <li><a href="#.">3</a></li>
                                </ul>
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-btn-next mil-blog-next"><span className="mil-h6">Next</span><i><FontAwesomeIcon icon={faArrowRight} /></i></div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-xl-3 mil-mb-120">

                            <div className="mil-mb-60">
                                <h5 className="mil-list-title mil-mb-30">{pageData.blogSection.noteTitle}</h5>
                                <p className="mil-mb-30">{pageData.blogSection.noteDescription}</p>
                                <a href="team-single.html" className="mil-post-sm mil-mb-15">
                                    <div className="mil-cover-frame"><img src={`${pageData.blogSection.noteSelfi}`} alt="cover" /></div>
                                    <div className="mil-description">
                                        <h4 className="mil-font-3 mil-accent">{pageData.blogSection.noteName}</h4>
                                        <p className="mil-text-sm">{pageData.blogSection.notePosition}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mil-divider mil-mb-60"></div>
                            <form className="mil-sidebar-input-frame mil-mb-60">
                                <input type="text" className="mil-sidebar-input" placeholder={pageData.blogSection.searchInputPlaceholder} />
                                <button type="submit"><i><FontAwesomeIcon icon={faSearch} /></i></button>
                            </form>
                            <div className="mil-divider mil-mb-60"></div>

                            <div className="mil-mb-60">
                                <h5 className="mil-list-title mil-mb-30">{pageData.blogSection.recentPostTitle}</h5>
                                {
                                    pageData.blogSection.entries.map((i: BlogEntryType, n: number) => (

                                        <a href="publication.html" className="mil-post-sm mil-mb-15" key={n}>
                                            <div className="mil-cover-frame"><img src={`${i.imageUrl}`} alt="cover" /> </div>
                                            <div className="mil-description">
                                                <h6>{i.title}</h6>
                                            </div>
                                        </a>

                                    ))
                                }

                            </div>

                            <div className="mil-divider mil-mb-60"></div>
                            <div className="mil-mb-60">
                                <h5 className="mil-list-title mil-mb-30">{pageData.blogSection.bulletListTitle}</h5>
                                <ul className="mil-hover-link-list">
                                    {
                                        pageData.blogSection.bullets.map((i: IconListItem, n: number) => (
                                            <li key={n}>
                                                <a href="#.">{i.label}</a>
                                            </li>))
                                    }

                                </ul>
                            </div>
                            <div className="mil-divider mil-mb-60"></div>
                            <div className="mil-mb-60">
                                <h5 className="mil-list-title mil-mb-30">{pageData.blogSection.tagsTitle}</h5>
                                <ul className="mil-tags">
                                    {pageData.blogSection.tagList.map((i: IconListItem, n: number) => (
                                        <li key={n}><a href="#.">{i.label}</a></li>
                                    ))}

                                </ul>
                            </div>
                            <div className="mil-divider mil-mb-60"></div>
                            <div className="mil-mb-60">
                                <h5 className="mil-list-title mil-mb-30">{pageData.blogSection.newsletterTitle}</h5>
                                <form className="mil-sidebar-input-frame">
                                    <input type="text" className="mil-sidebar-input" placeholder={pageData.blogSection.emailInputPlaceholder} />
                                    <button type="submit"><i><FontAwesomeIcon icon={faArrowRight} /></i></button>
                                </form>
                            </div>
                            <div className="mil-divider mil-mb-60"></div>
                            <h5 className="mil-list-title mil-mb-30">{pageData.blogSection.contactUsTitle}</h5>
                            <p className="mil-mb-30">{pageData.blogSection.contactUsDescription}</p>
                            <a href='#contact' className="mil-link"><span>{pageData.blogSection.contactUsButton.label}</span><i><FontAwesomeIcon icon={faArrowRight} /></i></a>

                        </div>
                    </div>
                </div>


            </section>

        </div>
        </>
    );
}
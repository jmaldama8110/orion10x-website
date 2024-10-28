import img5 from '../../../assets/blog/5.jpg';
import face01 from '../../../assets/faces/1.jpg';
import face02 from '../../../assets/faces/2.jpg';
import face03 from '../../../assets/faces/3.jpg';
import face04 from '../../../assets/faces/4.jpg';
import face05 from '../../../assets/faces/5.jpg';
import blog01 from '../../../assets/blog/1.jpg';
import blog02 from '../../../assets/blog/2.jpg';
import blog03 from '../../../assets/blog/3.jpg';
import blog04 from '../../../assets/blog/4.jpg';
import blog05 from '../../../assets/blog/5.jpg';
import blog06 from '../../../assets/blog/6.jpg';
import topbackgroundImg from "../../../assets/temp/pagos-opciones-mexico.jpg";
import api from '../../../api/api';
import { useLoaderData } from 'react-router-dom';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export async function loader({ params }: any) {
    const publicationEl: any = await getPublicationData(params.publicationId);
    return { publicationEl, publicationId: params.publicationId };
}

async function getPublicationData(id: number) {

    const qs = `/api/publications/${id}`;
    try {
        const response = await api.get(qs);
        return response.data.data.attributes;
    }
    catch (e) {
        console.log(e);
        throw new Error("oh algo salió mal!");
    }
}

export const Publication = () => {

    const { publicationEl }: any = useLoaderData();
    return (
        <>
            <div className="mil-wrapper">
                <div className="mil-banner-sm-2 mil-deep-bg">
                    <img src={publicationEl.backgroundImage} className="mil-background-image" style={{ objectPosition: "center" }} alt="Publication cover" />
                    <div className="mil-overlay"></div>
                </div>
            </div>
            <section className="mil-blog mil-p-120-0">
                <div className="container">
                    <div className="row justify-content-between">

                        <div className="col-lg-8 col-xl-8 mil-mb-120">

                            <span className="mil-suptitle mil-accent mil-mb-30">{publicationEl.subtitle}</span>
                            <h3 className="mil-up-font mil-mb-30">{publicationEl.title}</h3>
                            <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
                                <li className="mil-post-author"><img src={publicationEl.authorAvatar} alt="Author" /><span>{publicationEl.author}</span></li>
                                <li>{publicationEl.datePublished}</li>
                                <li>{publicationEl.readTime}</li>
                            </ul>
                            <div className="mil-divider mil-mb-60"></div>
                            <iframe className="yt-element"
                                    src={publicationEl.youtubeUrl}
                                    title={publicationEl.title} 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen>
                            </iframe>
                            <p className="mil-mb-60"></p>
                            <BlocksRenderer
                                content={publicationEl.intro}
                                blocks={{
                                    quote: ({ children }) => <blockquote cite="google.com" className="mil-mb-60">
                                        <p className="mil-text-lg mil-mb-20">{children}</p>
                                        <span className="mil-h4 mil-font-3 mil-accent">- {publicationEl.author}</span>
                                    </blockquote>
                                }} />

                            <BlocksRenderer 
                                content={publicationEl.content}
                                blocks={{
                                    quote: ({ children }) => <blockquote cite="google.com" className="mil-mb-60">
                                        <p className="mil-text-lg mil-mb-20">{children}</p>
                                        <span className="mil-h4 mil-font-3 mil-accent">- {publicationEl.author}</span>
                                    </blockquote>
                                }}
                            />
                            <BlocksRenderer content={publicationEl.conclusion} />


                            <p className='mil-mb-60'></p>

                            <ul className="mil-tags mil-mb-60">
                                <li className="mil-h6">Palabras clave:&nbsp;&nbsp; </li>
                                {
                                publicationEl.tags.split(",").map( (i:string,n:number) => (
                                    <li key={n}><a href="#.">{i}</a></li>
                                ))
                                }
                                
                            </ul>



                            <div className="mil-divider mil-mb-60"></div>

                            {/* <h5 className="mil-mb-30">Was this article helpful?</h5>
                            <a href="#." className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-15"><span>Yes, it was fine!</span></a>
                            <a href="#." className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-60"><span>No, or there was something off</span></a>

                            <div className="mil-divider mil-mb-60"></div>

                            <h3 className="mil-mb-60">Comments - <span className="mil-accent">02</span></h3>

                            <ul className="mil-comments-frame">
                                <li className="mil-comment">
                                    <div className="mil-comment-top-panel">
                                        <div className="mil-left">
                                            <img src={face01} alt="user avatar" />
                                            <div>
                                                <h5>Ponnappa Priya</h5>
                                                <p className="mil-text-sm">September 23, 2020</p>
                                            </div>
                                        </div>
                                        <a href="#reply" className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"><span>Reply</span></a>
                                    </div>
                                    <p className="mil-comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim minus rerum officiis sit quos non, nulla alias labore sapiente quasi ut exercitationem aperiam beatae magni sunt corporis ducimus? Ipsum, asperiores.</p>
                                    <ul className="mil-sub-comments">
                                        <li className="mil-comment">
                                            <div className="mil-comment-top-panel">
                                                <div className="mil-left">
                                                    <img src={face03} alt="user avatar" />
                                                    <div>
                                                        <h5>Tamzyn French</h5>
                                                        <p className="mil-text-sm">September 23, 2020</p>
                                                    </div>
                                                </div>
                                                <a href="#reply" className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"><span>Reply</span></a>
                                            </div>
                                            <p className="mil-comment-text">We realised we really wanted to catch a glimpse of what went on behind the scenes of the companies we looked up to.</p>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mil-comment">
                                    <div className="mil-comment-top-panel">
                                        <div className="mil-left">
                                            <img src={face03} alt="user avatar" />
                                            <div>
                                                <h5>Paul Freeman</h5>
                                                <p className="mil-text-sm">September 23, 2020</p>
                                            </div>
                                        </div>
                                        <a href="#reply" className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"><span>Reply</span></a>
                                    </div>
                                    <p className="mil-comment-text">Dolor sit amet, consectetur adipisicing elit. Veritatis minus at aliquid dolorem quis, alias impedit eveniet, omnis quisquam eaque, maxime aliquam repudiandae laborum mollitia iure vel, ab illum voluptatem. Possimus eaque magnam facere voluptatum ipsam optio, porro qui veritatis nostrum itaque, tempora, vitae quam aliquid voluptate amet! Pariatur libero blanditiis nesciunt quibusdam itaque voluptates iure tempore facilis dolorem aut.</p>
                                </li>
                            </ul>

                            <div className="mil-divider mil-mb-60" id="reply"></div>

                            <h3 className="mil-mb-60">Leave a Reply</h3>

                            <form>
                                <div className="row">
                                    <div className="col-lg-6">

                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6 mil-dark"><span>Name</span><span className="mil-accent">Required</span></label>
                                            <input type="text" placeholder="Enter Your Name Here" />
                                        </div>

                                    </div>
                                    <div className="col-lg-6">

                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6"><span>Email Adress</span><span className="mil-accent">Required</span></label>
                                            <input type="email" placeholder="Your Email" />
                                        </div>

                                    </div>
                                    <div className="col-lg-12">

                                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                                            <label className="mil-h6"><span>Message</span><span className="mil-accent">Required</span></label>
                                            <textarea placeholder="Your Message" className="mil-shortened"></textarea>
                                        </div>

                                    </div>
                                    <div className="col-lg-12">

                                        <div className="mil-input-frame mil-dark-input mil-mb-60">
                                            <label className="mil-h6"><span>Website</span><span className="mil-dark-soft">Optional</span></label>
                                            <input type="text" placeholder="mydomain.com" />
                                        </div>

                                    </div>
                                    <div className="col-12">

                                        <div className="mil-checbox-frame mil-dark-input mil-mb-60">
                                            <input className="mil-checkbox" id="checkbox-1" type="checkbox" value="value" />
                                            <label htmlFor="checkbox-1" className="mil-text-sm">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>

                                        <button className="mil-button mil-border mil-fw"><span>Post Comment</span></button>

                                    </div>
                                </div>
                            </form> */}

                        </div>




                    </div>
                </div>
            </section>
        </>


    );
}
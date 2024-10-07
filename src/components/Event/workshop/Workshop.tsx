
import { Form, redirect, useLoaderData } from "react-router-dom";
import api from "../../../api/api";
import { useEffect } from "react";
import { calculateNextEventDate, calculateTimeDifference } from "../../../utils/dateDiff";

import icon07 from '../../../assets/icons/md/7.svg';
import icon01 from '../../../assets/icons/sm/12.svg';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faQuestionCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";




interface iUpdates {
    fullname: string
    email: string;
    eventDate: string;
    contentId: number;
}
export async function loader({ params }: any) {
    const webinarElement: any = await getLandingData(params.landingId);
    await registerFbEvent();
    return { webinarElement: { ...webinarElement, landingId: params.landingId } };
}

async function registerFbEvent() {
    try {
        const fbUrl = import.meta.env.VITE_FACEBOOK_URL;
        const fbPixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
        const fbToken = import.meta.env.VITE_FACEBOOK_TOKEN;

        const qs = `${fbUrl}/${fbPixelId}/events?access_token=${fbToken}`
        const resFbApi = await api.post(qs, {
            "data": [
                {
                    "event_name": "ViewContent",
                    "event_time": Math.trunc(Date.now() / 1000),
                    "action_source": "website",
                    "user_data": {
                        "em": [
                            "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"
                        ],
                        "ph": [null],
                        "ct": [null],
                        "fn": [null],
                        "ln": [null],
                        "ge": [null],
                        "fb_login_id": null
                    }
                }
            ]
        })
    }
    catch (e) {
        console.log('Facebook api error', e)
    }
}
export async function action({ request }: any) {
    const formData = await request.formData();
    const updates: any = Object.fromEntries(formData);
    const url = await registerUser(updates);

    if (!url)
        throw new Error('No fue posible el registro')
    return redirect(url);

}

async function getLandingData(id: number) {

    const str = [
        `filters[id][$eq]=${id}&`,
        "populate[0]=heroSection.statsList&",
        "populate[1]=heroSection.title&",
        "populate[2]=benefitsSection.benefitsList&",
        "populate[3]=benefitsSection.title&",
        "populate[4]=testimonialSection.testimonialsList&",
        "populate[5]=faqSection.title&",
        "populate[6]=faqSection.paragraphTitle&",
        "populate[7]=faqSection.faqList&",
        "populate[8]=painAgitationSection.title&",
        "populate[9]=painAgitationSection.paragrap01&",
        "populate[10]=painAgitationSection.paragrap02&",
        "populate[11]=painAgitationSection.paragrap03&",
        "populate[12]=painAgitationSection.paragrap04",
    ];
    const qs = `/api/landpages?${str.join("")}`;
    try {
        const response = await api.get(qs);
        const attributes = response.data.data[0].attributes;
        console.log(attributes);
        return attributes;
    }
    catch (e) {
        throw new Error("oh algo salió mal!");
    }
}
async function registerUser(updates: iUpdates) {
    const qs = `/api/auth/local/register`;
    const username = updates.email
    const fullname = updates.fullname
    const email = updates.email
    const contentId = updates.contentId
    const endDate = updates.eventDate
    const password = import.meta.env.VITE_DEFAULT_PASS

    try {
        const response = await api.post(qs, { username, email, password, fullname });
        console.log("User created!");
        api.defaults.headers.common["Authorization"] = `Bearer ${response.data.jwt}`;
        const eventRes = await api.post('/api/events',
            {
                data: {
                    contentId: contentId,
                    datetime: endDate,
                    fullname: updates.fullname,
                    email: updates.email
                }
            });
        return (`/preview/${response.data.jwt}/${eventRes.data.data.id}`)

    }
    catch (e: any) {
        try {
            /// intento por medio del Correo
            const qs = "/api/auth/local"
            const response = await api.post(qs, {
                identifier: email,
                password
            });
            // aqui logramos obtener el token para proceder al sitio /preview
            api.defaults.headers.common["Authorization"] = `Bearer ${response.data.jwt}`;
            const eventRes = await api.post('/api/events',
                {
                    data: {
                        contentId: contentId,
                        datetime: endDate,
                        fullname: updates.fullname,
                        email: updates.email
                    }
                });

            return (`/preview/${response.data.jwt}/${eventRes.data.data.id}`)

        }
        catch (err) {
            console.log(err);
            console.log('Error when submitting');
        }
    }
}

export const Workshop = () => {

    const { webinarElement }: any = useLoaderData();
    /// valores no cambian, por tanto pueden ir aqui
    const currentTime = new Date();
    const proposedDate = calculateNextEventDate(currentTime, webinarElement.everyMinute);

    useEffect(() => {
        let idInterval = setInterval(() => {
            const difference = calculateTimeDifference(new Date().toISOString(), proposedDate.toISOString());
            if (!difference.days && !difference.hours && !difference.minutes && !difference.seconds) {
                clearInterval(idInterval);
                // window.location.reload();
            }
            const labelTime: HTMLElement | null = document.getElementById("calculated-schedule");
            if (labelTime) {
                const daysText = difference.days >= 0 ? `${difference.days} Día(s), ` : '0 Día(s)';
                const hoursText = difference.hours >= 0 ? `${difference.hours} Hora(s) y ` : "0 Hora(s)";
                const minutesText = difference.minutes >= 0 ? `${difference.minutes}` : `0`
                const secsText = difference.seconds >= 0 ? `${difference.seconds}` : `0`

                labelTime.innerText = `${daysText}${hoursText}${minutesText}:${secsText} mins`;

            }
            const labelScheduleDate: HTMLElement | null = document.getElementById("calculated-schedule-date");
            if (labelScheduleDate) {
                labelScheduleDate.innerText = `${proposedDate.toLocaleDateString("es-MX", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}`
            }
            const labelScheduleTime: HTMLElement | null = document.getElementById("calculated-schedule-time");
            if (labelScheduleTime) {
                labelScheduleTime.innerText = `${proposedDate.toTimeString()}`
            }

        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    }, [])

    function onGoTop() {
        document.getElementById("section-workshoppage-top-element")!.scrollIntoView();
    }

    return (
        <>
            <section className="mil-about mil-deep-bg mil-p-120-0" id="section-workshoppage-top-element">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="mil-mb-60 mil-text-center">
                            <h1>{webinarElement.heroSection.title.leftText}<span className="mil-accent">{webinarElement.heroSection.title.centerText}</span>{webinarElement.heroSection.title.rightText}</h1>
                            <h2 className="mil-mb-20">{webinarElement.heroSection.subtitle}</h2>


                            <Form id="formEvent" method="post">

                                <div className="mil-input-frame mil-dark-input mil-mb-30">
                                    <input type="text" name="fullname" required placeholder="Tu nombre" />
                                </div>

                                <div className="mil-input-frame mil-dark-input mil-mb-30">
                                    <input type="email" name="email" required placeholder="Correo eletrónico" />
                                </div>
                                <input hidden type='text' placeholder="Fecha y hora" name="eventDate" defaultValue={proposedDate.toISOString()}></input>
                                <input hidden type='text' placeholder="Id contenido" name='contentId' defaultValue={webinarElement.contentId}></input>

                                <button type="submit" className="mil-button mil-border mil-fw mil-mb-20"><span>{webinarElement.heroSection.ctaDescription}</span></button>
                                <p className="mil-text-sm mil-mb-30">{webinarElement.heroSection.ctaNote}</p>

                            </Form>


                            <div className="row">
                                {webinarElement.heroSection.statsList.map((i: any) => (
                                    <div className="col-xl-6" key={i.id}>
                                        <div className="">
                                            <h2>{i.count}</h2>
                                            <div className="mil-divider mil-divider-left mil-mb-20"></div>
                                            <p>{i.description}</p>
                                        </div>

                                    </div>
                                ))
                                }

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section >
                <div className="container mil-text-center">
                    <div className="align-items-center justify-content-between">

                        <h4 className="mil-mb-60 mil-mt-60">{webinarElement.whatLearnTitle}</h4>
                        <ul className="mil-check-icon-list mil-mb-60">
                            {webinarElement.benefit01 && <li className="mil-mb-30">
                                <img src={icon01} alt="icon" />
                                <span className="mil-dark">{webinarElement.benefit01}</span>
                            </li>}
                            {webinarElement.benefit02 && <li className="mil-mb-30">
                                <img src={icon01} alt="icon" />
                                <span className="mil-dark">{webinarElement.benefit02}</span>
                            </li>}
                            {webinarElement.benefit03 && <li className="mil-mb-30">
                                <img src={icon01} alt="icon" />
                                <span className="mil-dark">{webinarElement.benefit03}</span>
                            </li>}
                            {webinarElement.benefit04 && <li className="mil-mb-30">
                                <img src={icon01} alt="icon" />
                                <span className="mil-dark">{webinarElement.benefit04}</span>
                            </li>}
                            {webinarElement.benefit05 && <li className="mil-mb-30">
                                <img src={icon01} alt="icon" />
                                <span className="mil-dark">{webinarElement.benefit05}</span>
                            </li>}
                            {webinarElement.benefit06 && <li className="mil-mb-30">
                                <img src={icon01} alt="icon" />
                                <span className="mil-dark">{webinarElement.benefit06}</span>
                            </li>}

                        </ul>
                        <div className="mil-divider mil-mb-60"></div>
                    </div>
                </div>
            </section>


            {/* <section className="call-to-action mil-gradient-bg mil-p-120-0">
                <div className="mil-deco mil-deco-accent" style={{ top: 0, left: "15%" }}></div>
                <div className="container mil-text-center">
                    <div className="mil-cta-frame">
                        <FontAwesomeIcon icon={faGooglePlusSquare} size='4x' color="white" />
                        <br />
                        <p className="mil-light mil-mb-30">+100 calificacione positivas en Google</p>
                        <h2 className="mil-light mil-mb-30"><span className="mil-accent">Visita</span> Nuestro Canal</h2>
                        <a href="https://www.youtube.com/@Orion-10x" className="mil-button-with-label " style={{ marginBottom: "2rem" }}>
                            <div className="mil-button mil-border mil-icon-button mil-light"><span><FontAwesomeIcon icon={faPlay} size="2x" /></span></div><span className="mil-light">Ver Videos</span>
                        </a>
                    </div>
                </div>
            </section> */}

            <section className="mil-deep-bg mil-p-120-60">
                <div className="mil-deco" style={{ top: "0", right: "15%" }}></div>
                <div className="container">
                    <div className="row justify-content-between align-items-center">

                        <div className="col-lg-5 mil-mb-60" >

                            <div className="video-container_1_1">
                                <video
                                    controls
                                    id="pain-agitate-video"
                                    className="video-js"
                                    style={{ width: "100%", height: "100%" }}
                                    preload="auto"
                                    data-setup={{}} >
                                    <source src={webinarElement.painAgitationSection.videoUrl}>
                                    </source>
                                </video>
                            </div>
                        </div>
                        <div className="col-lg-6 mil-mb-60">

                            {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-20">{webinarElement.painAgitationSection.subjectBullet}</span> */}
                            <h3 className="mil-mb-20">{webinarElement.painAgitationSection.title.textLeft} <span className="mil-accent">{webinarElement.painAgitationSection.title.textRight}</span></h3>

                            <h4 className="mil-mb-20">{webinarElement.painAgitationSection.paragrap01.leftText} <span className="mil-accent">{webinarElement.painAgitationSection.paragrap01.centerText}</span> {webinarElement.painAgitationSection.paragrap01.rightText}</h4>

                            <h5 className="mil-mb-20">
                                {webinarElement.painAgitationSection.paragrap02.leftText} <span className="mil-accent">{webinarElement.painAgitationSection.paragrap02.centerText} </span>
                                {webinarElement.painAgitationSection.paragrap02.rightText}

                            </h5>
                            <p className="mil-mb-20">
                                {webinarElement.painAgitationSection.paragrap03.leftText}
                                {webinarElement.painAgitationSection.paragrap03.centerText}
                                {webinarElement.painAgitationSection.paragrap03.rightText}
                            </p>

                            <p>
                                {webinarElement.painAgitationSection.paragrap04.leftText} <span className="mil-accent">{webinarElement.painAgitationSection.paragrap04.centerText} </span>
                                {webinarElement.painAgitationSection.paragrap04.rightText}
                            </p>


                        </div>
                    </div>
                </div>
            </section>



            <section className="mil-services mil-p-120-90">
                <div className="mil-deco" style={{ top: "0", right: "20%" }}></div>
                <div className="container">
                    <h2 className="mil-mb-30">{webinarElement.benefitsSection.title.textLeft}<span className="mil-accent"> {webinarElement.benefitsSection.title.textRight}</span></h2>

                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            {
                                webinarElement.benefitsSection.benefitsList.filter((w: any, n: number) => n % 2 == 0)
                                    .map((x: any, position: number) => (
                                        <div key={position}>
                                            <div className="mil-divider mil-divider-left"></div>
                                            <div className="mil-service-item">
                                                <div className="mil-service-icon">
                                                    <div className="mil-icon-frame mil-icon-frame-md">
                                                        <img src={x.iconUrl} alt="icon" />
                                                    </div>
                                                </div>
                                                <div className="mil-service-text">
                                                    <h5 className="mil-mb-30"><span className="mil-accent">0{position + 1}</span>{x.title}</h5>
                                                    <p>  {x.description}</p>
                                                </div>
                                            </div>

                                        </div>
                                    ))

                            }
                        </div>

                        <div className="col-lg-6 col-xl-6">
                            {
                                webinarElement.benefitsSection.benefitsList.filter((w: any, n: number) => n % 2 == 1)
                                    .map((x: any, position: number) => (
                                        <div key={position}>
                                            <div className="mil-divider mil-divider-left"></div>
                                            <div className="mil-service-item">
                                                <div className="mil-service-icon">
                                                    <div className="mil-icon-frame mil-icon-frame-md">
                                                        <img src={x.iconUrl} alt="icon" />
                                                    </div>
                                                </div>
                                                <div className="mil-service-text">
                                                    <h5 className="mil-mb-30"><span className="mil-accent">0{position + webinarElement.benefitsSection.benefitsList.length - 1}</span>{x.title}</h5>
                                                    <p>  {x.description}</p>
                                                </div>
                                            </div>

                                        </div>
                                    ))

                            }
                        </div>



                    </div>
                </div>
            </section>
            <div style={{ textAlign: "center" }} >
                <a className="mil-button mil-border mil-mb-30" style={{ width: "400px" }} onClick={onGoTop}><span>{webinarElement.heroSection.ctaDescription}</span></a>
            </div>

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
                                webinarElement.testimonialSection.testimonialsList.map((rev: any, num: number) => (
                                    <SwiperSlide key={num}>

                                        <div className="mil-review mil-text-center">
                                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                                <img src={icon07} alt="icon" />
                                            </div>
                                            <p className="mil-mb-30">{rev.quote}</p>
                                            <div className="mil-stars mil-mb-30">
                                                <ul>
                                                    <li><FontAwesomeIcon icon={faStar} size='1x' color="orange" /></li>
                                                    <li><FontAwesomeIcon icon={faStar} size='1x' color="orange" /></li>
                                                    <li><FontAwesomeIcon icon={faStar} size='1x' color="orange" /></li>
                                                    <li><FontAwesomeIcon icon={faStar} size='1x' color="orange" /></li>
                                                    <li><FontAwesomeIcon icon={faStar} size='1x' color="orange" /></li>
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
            <div style={{ textAlign: "center" }} >
                <a className="mil-button mil-border mil-mb-30" style={{ width: "400px" }} onClick={onGoTop}><span>{webinarElement.heroSection.ctaDescription}</span></a>
            </div>

            <section className="mil-faqs mil-p-0-120">

                <div className="mil-deco" style={{ bottom: "0", left: "10%", transform: "rotate(180deg)" }}></div>
                <div className="container">

                    <div className="mil-tabs">

                        <h2>{webinarElement.faqSection.title.textLeft} <span className="mil-accent">{webinarElement.faqSection.title.textRight}</span></h2>
                        <div className="mil-tab" style={{ display: "block" }}>

                            <div className="row justify-content-between">

                                <div className="col-lg-4">
                                    <h3 className="mil-up-font mil-mb-30"><span className="mil-accent">{webinarElement.faqSection.paragraphTitle.textLeft} </span>{webinarElement.faqSection.paragraphTitle.textRight}</h3>
                                    <p className="mil-mb-60">{webinarElement.faqSection.description}</p>
                                </div>


                                <div className="col-lg-7">

                                    <ul className="accordion-jm">
                                        {
                                            webinarElement.faqSection.faqList.map((faq: any, n: number) => (
                                                <li key={n}>
                                                    <label htmlFor={`accordion-${n}`}><div><FontAwesomeIcon icon={faQuestionCircle} /> {faq.question}</div> <span>&#x3e;</span></label>
                                                    <input type="radio" name="accordion" id={`accordion-${n}`}></input>
                                                    <div className="detailed-content">
                                                        <p>
                                                            {faq.description}
                                                        </p>
                                                        {!!faq.videoUrl &&

                                                            <div className="video-container_1_1">
                                                                <video
                                                                    controls
                                                                    className="video-js"
                                                                    style={{ width: "100%", height: "500px" }}
                                                                    preload="auto"
                                                                    data-setup={{}} >
                                                                    <source src={faq.videoUrl}>
                                                                    </source>
                                                                </video>
                                                            </div>
                                                        }
                                                    </div>
                                                </li>
                                            ))
                                        }

                                    </ul>

                                </div>
                            </div>

                        </div>


                    </div>


                </div>

            </section>


        </>
    );
}
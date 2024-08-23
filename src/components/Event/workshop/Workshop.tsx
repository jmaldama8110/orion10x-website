
import { Form, redirect, useLoaderData } from "react-router-dom";
import api from "../../../api/api";
import imgBackgroundMain from '../../../assets/photo/13.jpg';
import { TwoColorTitle } from "../TwoColorTitle";
import { useEffect } from "react";
import { calculateNextEventDate, calculateTimeDifference } from "../../../utils/dateDiff";
import iconSm12 from "../../../assets/icons/sm/12.svg";
import iconFace1 from "../../../assets/faces/jm-selfi.jpg"
import iconFace2 from "../../../assets/faces/fabian-selfi.jpeg"
import iconFace3 from "../../../assets/faces/jaime-selfi.jpeg"


interface iUpdates {
    fullname: string
    email: string;
    eventDate: string;
    contentId: number;
}
export async function loader({ params }: any) {
    const webinarElement: any = await getLandingData(params.landingId);
    return { webinarElement: { ...webinarElement, landingId: params.landingId } };
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
    const str = `filters[id][$eq]=${id}`;
    const qs = `/api/landpages?${str}`;
    try {
        const response = await api.get(qs);
        const attributes = response.data.data[0].attributes;
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
    const proposedDate = calculateNextEventDate(currentTime, 5);

    useEffect(() => {
        let idInterval = setInterval(() => {
            const difference = calculateTimeDifference(new Date().toISOString(), proposedDate.toISOString());
            if (!difference.days && !difference.hours && !difference.minutes && !difference.seconds)
                clearInterval(idInterval);
            const labelTime: HTMLElement | null = document.getElementById("calculated-schedule");
            if (labelTime) {
                const daysText = difference.days ? `${difference.days} Día(s), ` : '';
                const hoursText = difference.hours ? `${difference.hours} Hora(s) y ` : "   ";
                const minutesText = `${difference.minutes}:${difference.seconds} mins`
                labelTime.innerText = `${daysText}${hoursText}${minutesText}`
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

    return (
        <div className="mil-wrapper">


            <div className="mil-banner-sm-3">
                <img src={imgBackgroundMain} className="mil-background-image" style={{ objectPosition: "center" }} data-swiper-parallax="-100" data-swiper-parallax-scale="1.1" alt="image" />
                <div className="mil-overlay"></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">

                        <div className="row justify-content-between">
                            <div className="col-xl-6">

                                <span className="mil-suptitle mil-light mil-suptitle-2 mil-mb-30">{webinarElement.subTitle}</span>
                                <TwoColorTitle title={webinarElement.title} />

                                <div className="mil-mb-20">
                                    <h3 className="mil-light">Inicia en: <span id="calculated-schedule" style={{ color: "red" }}></span></h3>
                                </div>
                                <ul className="mil-simple-list mil-mb-50">
                                    <li><span className="mil-light" id="calculated-schedule-date"></span></li>
                                    <li><span className="mil-light" id="calculated-schedule-time"></span></li>
                                </ul >

                                <p className="mil-light-soft mil-mb-120">{webinarElement.teacherDescription}</p>

                            </div>
                            <div className="col-xl-5 mil-relative">

                                <Form id="formEvent" method="post" className="mil-event-form">
                                    <h4 className="mil-mb-60 mil-text-center">Aparta tu lugar!</h4>

                                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                                        <label className="mil-h6 mil-dark"><span>Nombre completo</span></label>
                                        <input type="text" name="fullname" required placeholder="Juan Díaz" />
                                    </div>

                                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                                        <label className="mil-h6 mil-dark"><span>Correo electrónico</span></label>
                                        <input type="email" name="email" required placeholder="hola@sitio.com" />
                                    </div>
                                    <input hidden type='text' placeholder="Fecha y hora" name="eventDate" defaultValue={proposedDate.toISOString()}></input>
                                    <input hidden type='text' placeholder="Id contenido" name='contentId' defaultValue={webinarElement.contentId}></input>


                                    <button type="submit" className="mil-button mil-border mil-fw"><span>Reservar Ahora!</span></button>

                                </Form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mil-banner-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">

                            <h6>Digital <span className="mil-accent">Transformation</span> Services & Why It Matters Webinar</h6>

                        </div>
                    </div>
                </div>
            </div>
            <section className="mil-p-120-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <h4 className="mil-mb-30">{webinarElement.whatLearnTitle}</h4>

                            <ul className="mil-check-icon-list mil-mb-60">
                                <li className="mil-mb-30">
                                    <img src={iconSm12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit01}</span>
                                </li>
                                <li className="mil-mb-30">
                                    <img src={iconSm12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit02}</span>
                                </li>

                                <li className="mil-mb-30">
                                    <img src={iconSm12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit03}</span>
                                </li>
                                <li className="mil-mb-30">
                                    <img src={iconSm12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit04}</span>
                                </li>
                                <li className="mil-mb-30">
                                    <img src={iconSm12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit05}</span>
                                </li>
                                <li className="mil-mb-30">
                                    <img src={iconSm12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit06}</span>
                                </li>


                            </ul>

                            <div className="mil-divider mil-mb-60"></div>

                            <h4 className="mil-mb-60">{webinarElement.whoWithLearnTitle}</h4>

                            <div className="row mil-mb-30">

                               { ( 
                                webinarElement.teacherName.split(",").find( (x:string) => x === 'fabian') ) === 'fabian' && <div className="col-xl-6">
                                    <a href="team-single.html" className="mil-post-sm mil-top-text mil-mb-30">
                                        <div className="mil-cover-frame"><img src={iconFace2} alt="cover" /></div>
                                        <div className="mil-description">
                                            <h5 className="mil-mb-10">Fabian Arreola</h5>
                                            <p className="mil-text-sm">Director de Operaciones <br />Orion 10x</p>
                                        </div>
                                    </a>
                                </div>}

                                { ( 
                                webinarElement.teacherName.split(",").find( (x:string) => x === 'jm') ) === 'jm' && <div className="col-xl-6">
                                    <a className="mil-post-sm mil-top-text mil-mb-30">
                                        <div className="mil-cover-frame"><img src={iconFace1} alt="cover" /></div>
                                        <div className="mil-description">
                                            <h5 className="mil-mb-10">José Manuel Gómez</h5>
                                            <p className="mil-text-sm">Director de IT <br />Orion 10x</p>
                                        </div>
                                    </a>
                                </div>}
                                { ( 
                                webinarElement.teacherName.split(",").find( (x:string) => x === 'jaime') ) === 'jaime' && <div className="col-xl-6">
                                    <a className="mil-post-sm mil-top-text mil-mb-30">
                                        <div className="mil-cover-frame"><img src={iconFace3} alt="cover" /></div>
                                        <div className="mil-description">
                                            <h5 className="mil-mb-10">Jaime Lara</h5>
                                            <p className="mil-text-sm">Especialista PMP <br />Orion 10x</p>
                                        </div>
                                    </a>
                                </div>}

                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
import imgIcon12 from '../../../assets/icons/sm/12.svg';
import { useLoaderData, Form } from 'react-router-dom';
import { CountDownComponent } from '../CountDown';
import api from '../../../api/api';

interface iUpdates {
    phone: string;
    email: string
    fullname: string
    company: string
    username: string
    eventId: number;
}

export async function action({ request }: any) {

    const formData = await request.formData();
    const updates: any = Object.fromEntries(formData);
    
    toggleSpinner('cta_button_event');
    setTimeout(async () => {
        await registerUser(updates);
        onOpenModal();
    }, 2000)

    return null;


}



async function onOpenModal() {
    const modal: HTMLDialogElement = document.getElementById("modal-event") as HTMLDialogElement;
    modal.showModal();
}

export async function loader({ params }: any) {
    const webinarElement: any = await getLandingData(params.landingId);
    return { webinarElement: { ...webinarElement, landingId: params.landingId } };
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
    const qs = `/api/workshops?${str.join("")}`;
    try {
        const response = await api.get(qs);
        const attributes = response.data.data[0].attributes
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
    const eventId = updates.eventId
    const password = import.meta.env.VITE_DEFAULT_PASS

    try {
        const response = await api.post(qs, { username, email, password, fullname });
        console.log("User created!");
        api.defaults.headers.common["Authorization"] = `Bearer ${response.data.jwt}`;
        const eventRes = await api.post('/api/events',
            {
                data: {
                    eventId: eventId,
                    fullname: updates.fullname,
                    email: updates.email,
                    company: updates.company,
                    phone: updates.phone,
                    datetime: new Date().toISOString()
                }
            });
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
                        eventId: eventId,
                        fullname: updates.fullname,
                        email: updates.email,
                        company: updates.company,
                        phone: updates.phone,
                        datetime: new Date().toISOString()
                    }
                });
            
            // return (`/preview/${response.data.jwt}/${eventRes.data.data.id}`)

        }
        catch (err) {
            console.log(err);
            console.log('Error when submitting');
        }
    }
}


function toggleSpinner(id: string) {
    const el = document.getElementById(id);
    if (el) {
        if (el.firstElementChild) {
            if (el.firstElementChild.nodeName === "SPAN") {
                const divEl = document.createElement("div");
                divEl.classList.toggle("spinner")
                el.replaceChild(divEl, el.firstElementChild);
            }

        }

    }
}

export const Event = () => {

    const { webinarElement }: any = useLoaderData();

    return (
        <div className="mil-wrapper">

            <dialog className="modal" id="modal-event">
                <h3 className="mil-text-center mil-mb-20 mil-mt-20">¡Muchas Gracias por tu interés en nuestro taller! 🙌🏻</h3>
                <p className='mil-mb-20'>Estamos procesando tu solicitud!. Nos pondremos en contacto contigo para confirmar tu registro!</p>
                <p className='mil-mb-20'>- Equipo de Orion10x</p>
                <button className="mil-button mil-border mil-fw mil-mt-20" onClick={ ()=>{ window.location.replace('/')}}><span>Salir!</span></button>
            </dialog>

            <div className="mil-banner-sm-3">
                <img src={webinarElement.backgroundImage} className="mil-background-image" style={{ objectPosition: "center" }} data-swiper-parallax="-100" data-swiper-parallax-scale="1.1" alt="image" />
                <div className="mil-overlay"></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">

                        <div className="row justify-content-between">
                            <div className="col-xl-6">

                                <h2 className="mil-light mil-mb-60">{webinarElement.heroSection.title.leftText} <span className="mil-accent">{webinarElement.heroSection.title.centerText}</span> {webinarElement.heroSection.title.rightText}</h2>
                                {webinarElement.workshopDate &&
                                    <CountDownComponent eventDate={new Date(webinarElement.workshopDate)} location={webinarElement.workshopLocation} />
                                }

                                <p className="mil-light-soft mil-mb-120">{webinarElement.teacherDescription}</p>

                            </div>
                            <div className="col-xl-5 mil-relative">

                                <Form id="formEvent" method="post" className="mil-event-form">
                                    <h4 className="mil-mb-60 mil-text-center">{webinarElement.heroSection.subtitle}</h4>

                                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                                        <label className="mil-h6 mil-dark"><span>Nombre y apellidos</span></label>
                                        <input type="text" name="fullname" required placeholder="Nombre y Apellido" />
                                    </div>

                                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                                        <label className="mil-h6 mil-dark"><span>Empresa o negocio</span></label>
                                        <input type="text" name="company" required placeholder="Tu empresa" />
                                    </div>

                                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                                        <label className="mil-h6 mil-dark"><span>Whatsapp</span></label>
                                        <input type="text" name="phone" placeholder="999-233-8665" required />
                                    </div>

                                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                                        <label className="mil-h6 mil-dark"><span>Correo electrónico</span></label>
                                        <input type="email" name="email" required placeholder="micorreo@ejemplo.com" />
                                    </div>
                                    <input hidden type='text' placeholder="Id contenido" name='eventId' defaultValue={webinarElement.landingId}></input>


                                    <div className="mil-checbox-frame mil-dark-input mil-mb-30">
                                        <input className="mil-checkbox" id="checkbox-1" type="checkbox" name="agree" value="1" required />
                                        <label htmlFor="checkbox-1" className="mil-text-sm">{webinarElement.heroSection.ctaNote} <span className="mil-accent"></span></label>
                                    </div>
                                    <button type="submit" className="mil-button mil-border mil-fw" id="cta_button_event"><span>{webinarElement.heroSection.ctaDescription}</span></button>

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
                            <h6>{webinarElement.heroSection.title.leftText} <span className="mil-accent">{webinarElement.heroSection.title.centerText}</span> {webinarElement.heroSection.title.rightText}</h6>
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
                                {webinarElement.benefit01 && <li className="mil-mb-30">
                                    <img src={imgIcon12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit01}</span>
                                </li>}
                                {webinarElement.benefit02 && <li className="mil-mb-30">
                                    <img src={imgIcon12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit02}</span>
                                </li>}
                                {webinarElement.benefit03 && <li className="mil-mb-30">
                                    <img src={imgIcon12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit03}</span>
                                </li>}
                                {webinarElement.benefit04 && <li className="mil-mb-30">
                                    <img src={imgIcon12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit04}</span>
                                </li>}
                                {webinarElement.benefit05 && <li className="mil-mb-30">
                                    <img src={imgIcon12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit05}</span>
                                </li>}
                                {webinarElement.benefit06 && <li className="mil-mb-30">
                                    <img src={imgIcon12} alt="icon" />
                                    <span className="mil-dark">{webinarElement.benefit06}</span>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
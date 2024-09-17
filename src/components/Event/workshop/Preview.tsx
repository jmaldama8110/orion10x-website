import { redirect, useLoaderData } from "react-router-dom";
import api from "../../../api/api";
import { useEffect, useRef, useState } from "react";
import { calculateNextEventDate, calculateTimeDifference } from "../../../utils/dateDiff";


export interface iContent {
    title: string
    introVideoUrl: string
    mainVideoUrl: string
    eventDate: Date
}

export async function loader({ params }: any) {
    const previewInfo: iContent = await getDataFromApi(params.token, params.eventId);
    //// damos un tiempo vida apartir del inicio del evento
    const timeDiff = new Date().getTime() - new Date(previewInfo.eventDate).getTime()
    //// 2 hours of in miliseconds 1 seg = 1000ms 60s * 60min * 2hours 
    if (timeDiff > 7200000) {
        throw new Error('Ooops al parecer este evento ya vencio!')
    }

    return { previewInfo };
}

async function getDataFromApi(token: string, id: number) {

    try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const eventData = await api.get(`/api/events/${id}`)

        const str = [
            `filters[id][$eq]=${eventData.data.data.attributes.contentId}&`,
            "populate[0]=ctaTitle&",
            "populate[1]=ctaFinalMessage&",
            "populate[2]=plans.itemsList"];
        const qs = `/api/contents?${str.join("")}`;
        const contentData = await api.get(qs);

        const attributes: iContent = contentData.data.data[0].attributes;
        
        return { ...attributes, eventDate: eventData.data.data.attributes.datetime,token,eventId:id };
    }
    catch (e) {
        throw new Error("oh algo salió mal!");
    }

}

export const Preview = () => {
    const { previewInfo }: any = useLoaderData();
    const timer = useRef(0);

    const [eventStart, setEventStart] = useState(false);
    const [eventEnded, setEventEnded] = useState(false);


    useEffect(() => {

        if (previewInfo.eventDate) {

            /// when loader, checks wether events has started already
            const timeDiff = new Date().getTime() - new Date(previewInfo.eventDate).getTime()
            if (timeDiff > 0) {
                setEventStart(true);
            }

            const endDate = calculateNextEventDate(new Date(previewInfo.eventDate), 1);
            timer.current = setInterval(() => {
                const difference = calculateTimeDifference(new Date().toISOString(), endDate.toISOString());
                if (!difference.days && !difference.hours && !difference.minutes && !difference.seconds) {
                    clearInterval(timer.current);
                    setEventStart(true);
                }
                const labelTime: HTMLElement | null = document.getElementById("calculated-schedule");

                if (labelTime) {
                    const daysText = difference.days ? `${difference.days} Día(s), ` : '';
                    const hoursText = difference.hours ? `${difference.hours} Hora(s) y ` : "   ";
                    const minutesText = `${difference.minutes}:${difference.seconds} mins`
                    labelTime.innerText = `${daysText}${hoursText}${minutesText}`
                }


            }, 1000)


        }
        return () => {
            console.log('Killed timer: ', timer.current)
            clearInterval(timer.current)
        }
    }, []);

    function onPhoneInput(e: any) {
        
        const buttonEL: HTMLButtonElement = document.getElementById("dialog-cta-button") as HTMLButtonElement;
        buttonEL.disabled = true;

        const re = new RegExp(/(\d{0,3})(\d{0,3})(\d{0,4})/)
        var x = e.target.value.replace(/\D/g, '').match(re);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        
        if (e.target.value.length == 14) {
            buttonEL.disabled = false;
        }


    }
    async function onCtaClick(e: any) {

        toggleSpinner(e.target.id);

        setTimeout(() => {
            onOpenModal();
        }, 1000)
    }

    function toggleSpinner(id: string) {
        const buttonElId = `previewctaoffer_${id.split("_")[1]}`
        const el = document.getElementById(buttonElId);
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

    useEffect(() => {
        let counter = 0;
        if (eventStart) {
            setInterval(() => {
                counter = counter + 1;
                if (counter == previewInfo.duration) {
                    setEventEnded(true);
                }
            }, 300)
        }
    }, [eventStart])

    async function onOpenModal() {
        const modal: HTMLDialogElement = document.getElementById("modal-preview") as HTMLDialogElement;
        modal.showModal();
    }

    async function onCtaDialog(){
            try {
                api.defaults.headers.common["Authorization"] = `Bearer ${previewInfo.token}`;
                const inputPhoneEl: HTMLInputElement = document.getElementById("input_phone_cta") as HTMLInputElement;

                const res = await api.put(`/api/events/${previewInfo.eventId}`, {
                    data:{
                        phone: inputPhoneEl.value
                    }
                });
                setEventEnded(false)
            }
            catch (e) {
                console.log(e);
                throw new Error('Mil disculpas, se presento un error!')
            }
    }

    return (
        <>

            <div className="view">

                {!eventStart &&
                    <div className="viewcontent">

                        <div className="video-container mil-mt-60">
                            <iframe
                                src={previewInfo.introVideoUrl}
                                allow="autoplay;fullscreen; picture-in-picture; clipboard-write"
                                style={{ width: "100%", height: "100%" }} title="final_jaime">
                            </iframe>
                            <script src="https://player.vimeo.com/api/player.js"></script>
                        </div>

                        <div className="width-400 mil-mt-60">

                            <h4>{previewInfo.title}</h4>
                            <p>Inicia en: <span id="calculated-schedule" className="mil-accent"></span></p>
                            <p>{previewInfo ? (new Date(previewInfo.eventDate)).toLocaleDateString("es-MX", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }) : ''} </p>
                            <p>
                                {(new Date(previewInfo.eventDate)).toTimeString()}
                            </p>

                        </div>

                    </div>}
                {eventStart &&
                    <>
                        <h2 className="mil-text-center">{previewInfo.title}</h2>
                        <div className="viewcontent">
                            <div className="video-container">
                                <iframe
                                    src={previewInfo.mainVideoUrl}
                                    allow="autoplay;fullscreen; picture-in-picture; clipboard-write"
                                    style={{ width: "100%", height: "100%" }} title="final_jaime">
                                </iframe>
                                <script src="https://player.vimeo.com/api/player.js"></script>
                            </div>

                        </div>

                    </>

                }


            </div>

            {
                <section className="mil-prices mil-p-120-0">
                    <div className="container">
                        <h3 className="mil-text-center mil-mb-60 mil-mt-30 cta-border">{previewInfo.ctaTitle.leftText} <span className="mil-accent">{previewInfo.ctaTitle.centerText} </span>{previewInfo.ctaTitle.rightText}</h3>

                        <div className="row">
                            {
                                previewInfo.plans.map((plan: any, pos: number) =>
                                (

                                    <div className="col-xl-4" key={pos}>

                                        <div className="mil-hover-card mil-price-card mil-mb-30">
                                            <p className="mil-mb-15">{plan.title}</p>
                                            <h2>{plan.name}</h2>
                                            <div className="mil-plan-price mil-mb-15">
                                                <h3 className="mil-accent">{plan.price}</h3><span>{plan.frequency}</span>
                                            </div>
                                            <p className="mil-text-sm mil-mb-60">{plan.priceNote}</p>
                                            <button className="mil-button mil-border mil-fw mil-mb-60" id={`previewctaoffer_${pos}-${plan.name}`} onClick={onCtaClick}>
                                                <span id={`previewspan_${pos}-${plan.name}`} onClick={onCtaClick}>{plan.ctaText}</span>
                                            </button>

                                            <ul className="mil-check-list">
                                                {
                                                    plan.itemsList.map((i: any, n: number) => (
                                                        <li key={n} className={i.strike ? "mil-empty" : ""}>{i.description}</li>
                                                    ))
                                                }

                                            </ul>
                                        </div>

                                    </div>

                                )
                                )

                            }



                            <div className="col-lx-12 mil-p-90-60">
                                <h3 className="mil-text-center">{previewInfo.ctaFinalMessage.leftText}<span className="mil-accent"> {previewInfo.ctaFinalMessage.centerText}</span> {previewInfo.ctaFinalMessage.rightText}</h3>
                                <p className="mil-text-center">{previewInfo.ctaFinalText}</p>
                            </div>

                        </div>
                    </div>
                    <dialog className="modal" id="modal-preview">
                        <form id="formEvent" className="mil-event-form" method="dialog" >
                            <h4 className="mil-mb-60 mil-text-center">¿Cómo te podemos contactar?</h4>

                            <div className="mil-input-frame mil-dark-input mil-mb-30">
                                <label className="mil-h6 mil-dark"><span>Teléfono de contacto</span></label>
                                <input type="text" name="fullname" required placeholder="(999)-999-99-99" onChange={onPhoneInput} id="input_phone_cta"/>
                            </div>

                            <div className="mil-input-frame mil-dark-input mil-mb-30">
                                <label className="mil-h6 mil-dark"><span>Indica un horario</span></label>
                                <select>
                                    <option>Mañana</option>
                                    <option>Tarde</option>
                                </select>
                            </div>

                            <button className="mil-button mil-border mil-fw" id="dialog-cta-button" onClick={onCtaDialog}><span>Quiero que llamen!</span></button>

                        </form>
                    </dialog>
                </section>}
        </>


    );
}
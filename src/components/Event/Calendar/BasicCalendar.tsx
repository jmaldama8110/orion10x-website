import Calendar from "./Calendar";
import moment from "moment";
import './Calendar.css';
import { Form, redirect, useLoaderData } from "react-router-dom";
import api from "../../../api/api";

// AL HACER CLICK, QUE HACER?
// CONFIRMAR CON UN DIALOGO?
// MOSTAR UN MODAL CON UN FORMULARIO
// PARA LLENAR Y ENVIAR LA SOLICITUD.
// PINTAR EL ELEMENTO PARA MARCAR QUE YA
// ESTA AGENDADO
// GENERAR UNA ENTRADA EN EL API CON EL USUARIO
// PINTAR LOS HORARIOS QUE YA ESTAN OCUPADOS
// OMITIR LO DÍAS INHABILES

export async function action() {
    const formData = new FormData(document.getElementById('formBookingCall') as HTMLFormElement);
    
    const ctaButton = document.getElementById("dialog-cta-button") as HTMLButtonElement;
    const buttonLabel = document.getElementById("span-cta-label") as HTMLButtonElement;
    const spinner = document.getElementById("spinner") as HTMLButtonElement;
    const divSuccessMessage = document.getElementById("success-alert-message") as HTMLDivElement

    buttonLabel.classList.toggle("show-hide");
    spinner.classList.toggle("show-hide");

    try {
        
        const res = await api.post(`/api/sendemail`, {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            template_id: "d-59e677f1fe0b4aeea317fb1d9ea97cdd"
        });
        ctaButton.classList.toggle("show-hide");
        divSuccessMessage.classList.toggle("show-hide");

        if (!res.data.error) {
            const modalEl: HTMLDialogElement = document.getElementById('booking-modal') as HTMLDialogElement;
            // modalEl.close();            
        }
        
    }
    catch (e) {
        console.log(e);
    }
    return null;
}
export async function loader() {

    const dataWeeks = [
        "", // Dom 0
        "10,11,12,13",//Lun 1 
        "10,11,12",//Mar 2
        "10,11,12,13,14",//Mie 3
        "10,11,12,13,15,16",//Jue 4
        "10,11,12,13,15,16",//Vie 5
        "",//Sab 6
    ]
    const weeksAhead = 2;
    const minTime = "2024-10-10T10:00:00"
    const maxTime = "2024-10-10T18:00:00"

    const hoy = moment().toDate();

    /// obtener el array de los horarios permitidos
    // console.log(dataWeeks[ hoy.getDay()].split(','));

    let startsFrom = moment(moment(hoy).add('1', 'hours').format('YYYY-MM-DDTHH:00:00'))

    const eventsCalendar = []
    let ends = 0;
    while (ends < weeksAhead * 24 * 7 && ends < 1000) {

        const newTime = moment(startsFrom).add('1', 'hours');
        startsFrom = newTime;
        ends++;
        /// days available per week day

        const hourToSearch = newTime.toDate().getHours().toString();
        // dataWeeks[ newTime.getDay()].split(',') 
        //get the array of permited days of the week day

        const hourFound = dataWeeks[newTime.toDate().getDay()].split(',')
            .find((h: string) => h === hourToSearch)
        if (hourFound) {
            eventsCalendar.push(
                {
                    start: startsFrom.toDate(),
                    end: moment(moment(startsFrom).add("1", "hours")).toDate(),
                    title: "Libre",
                    data: {
                        eventId: `event${ends}`
                    }

                }

            );
        }
    }

    return { events: { eventsCalendar, minTime, maxTime } };
}

export function BookAppointment() {

    const { events }: any = useLoaderData();

    /*
    1. Loader calcula y genera los eventos con fecha y hora disponibles
    2. components, parte del Big Calendar para elegir cuales elementos se renderizan
        y la data que se les asigna a cada uno
    */
    const components = {
        event: (props: any) => {
            const eventId = props?.event?.data.eventId;
            return (
                <div className="event-calendar-av" onClick={onMakeAppointment} id={`${eventId}`}>
                </div>
            );

        }
    }

    const onMakeAppointment = (e: any) => {
        const eventId = e.target.id;
        if (eventId) {
            const data = events.eventsCalendar.find((ev: any) => ev.data.eventId == eventId);
            if (data) {
                const modalEl: HTMLDialogElement = document.getElementById('booking-modal') as HTMLDialogElement;
                const displayDate: HTMLHeadingElement = document.getElementById('selected-date-display') as HTMLHeadingElement
                displayDate.textContent = `Cita: ${moment(data.start).toDate().toLocaleString()}`;
                const inputDate: HTMLInputElement = document.getElementById('date-info-input') as HTMLInputElement;
                inputDate.value = `Cita: ${moment(data.start).toDate().toLocaleString()}`

                modalEl.showModal();

            }
        }
    }
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



    return (
        <>
            {/* <div style={{ height: "100px", background: "black" }}></div> */}
            <div style={{ height: "60vh", maxWidth: "750px", width: "100%", margin: "2rem auto" }}>
                <Calendar
                    events={events.eventsCalendar}
                    defaultView={"week"}
                    views={["week"]}
                    components={components}
                    min={moment(events.minTime).toDate()}
                    max={moment(events.maxTime).toDate()}
                />
            </div>
            <div className="legend">
                <div className="square"></div>
                <p>Horarios diponibles</p>
            </div>

            <dialog className="booking-modal" id='booking-modal'>

                <Form id="formBookingCall" className="mil-event-form" method="post">
                    <h5 className="mil-mb-20 mil-text-center" id='selected-date-display'></h5>

                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                        <label className="mil-dark"><span>Teléfono de contacto</span></label>
                        <input type="text" name="phone" required placeholder="(999)-999-99-99" onChange={onPhoneInput} id="input_phone_cta" />
                    </div>
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                        <input type="text" name="name" required placeholder="Proporciona tu nombre" />
                    </div>
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                        <input type="email" name="email" required id="email" placeholder="Un email"/>
                    </div>
                    <input type="text" hidden name='message' id='date-info-input'></input>
                    
                    <div className="show-hide" id="success-alert-message">
                            <div className="alert-success" style={{ display: "block" }}><h5>Se ha generado tu Cita</h5></div>
                            <a className="mil-button mil-border mil-fw" href="/"> <span>Volver al inicio</span></a>
                    </div>
                    

                    <button className="mil-button mil-border mil-fw" id="dialog-cta-button">
                        <span id='span-cta-label'>Agendar esta llamada!</span>
                        <div className='spinner show-hide' id="spinner"></div>
                    </button>
                    
                    

                </Form>

            </dialog>

        </>
    );
}
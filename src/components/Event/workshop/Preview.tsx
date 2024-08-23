import { useLoaderData } from "react-router-dom";
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

    const timeDiff = calculateTimeDifference(new Date().toISOString(), new Date(previewInfo.eventDate).toISOString());
    if (timeDiff.seconds < 0) {
        throw new Error('Este evento ya vencio!')
    }
    return { previewInfo };
}

async function getDataFromApi(token: string, id: number) {

    try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const eventData = await api.get(`/api/events/${id}`)
        const contentData = await api.get(`/api/contents/${eventData.data.data.attributes.contentId}`);
        const attributes: iContent = contentData.data.data.attributes;
        return { ...attributes, eventDate: eventData.data.data.attributes.datetime };
    }
    catch (e) {
        throw new Error("oh algo salió mal!");
    }

}

export const Preview = () => {
    const { previewInfo }: any = useLoaderData();
    const timer = useRef(0);

    const [eventStart, setEventStart] = useState(false);

    useEffect(() => {
        console.log('timer id: ', timer.current)
        if (previewInfo.eventDate) {
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
    }, [])

    return (

        <div className="view">

            {!eventStart &&
                <div className="viewcontent">

                    <div className="video-container_1_1">
                        <iframe
                            src={previewInfo.introVideoUrl}
                            allow="autoplay;fullscreen; picture-in-picture; clipboard-write"
                            style={{ width: "100%", height: "100%" }} title="final_jaime">
                        </iframe>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>

                    <div className="width-400">

                        <h4>{previewInfo.title}</h4>
                        <p>Inicia en: <span id="calculated-schedule"></span></p>
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
                <div className="viewcontent">
                    <div className="video-container">
                        <iframe
                            src={previewInfo.mainVideoUrl}
                            allow="autoplay;fullscreen; picture-in-picture; clipboard-write"
                            style={{ width: "100%", height: "100%" }} title="final_jaime">
                        </iframe>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>

                    {/* <div className="videocontainer">
                        <video width={"100%"} height={"auto"} autoPlay>
                            <source src={videoMain}></source>
                        </video>
                    </div> */}
                </div>
            }


        </div>



    );
}
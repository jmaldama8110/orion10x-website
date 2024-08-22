import api from "../../api/api";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { calculateNextEventDate, calculateTimeDifference } from "../../utils/dateDiff";
import { fakeAuthProvider } from "../../api/api";
import { AuthWebinar } from "./AuthWebinar";



export async function loader({ params }: any) {
    const webinarElement: any = await getDataFromApi(params.id);
    return { webinarElement: { ...webinarElement, id: params.id }, user: fakeAuthProvider.username };
}

async function getDataFromApi(id: number) {
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

export const Webinar = () => {

    const { webinarElement }: any = useLoaderData();

    return (
        <>
            <h1>Webinar HOC Component</h1>
            <AuthWebinar />
            <Outlet />
        </>

    );
}




export const CountDownComponent = () => {

    useEffect(() => {
        const currentTime = new Date();
        const endDate = calculateNextEventDate(currentTime, 20);
        let idInterval = setInterval(() => {
            const difference = calculateTimeDifference(new Date().toISOString(), endDate.toISOString());
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
                labelScheduleDate.innerText = `${endDate.toLocaleDateString("es-MX", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}`
            }
            const labelScheduleTime: HTMLElement | null = document.getElementById("calculated-schedule-time");
            if (labelScheduleTime) {
                labelScheduleTime.innerText = `${endDate.toTimeString()}`
            }

        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    }, [])


    return (
        <>
            <div className="mil-mb-20">
                <h3 className="mil-light">Inicia en: <span id="calculated-schedule" style={{ color: "red" }}></span></h3>
            </div>
            <ul className="mil-simple-list mil-mb-50">
                <li><span className="mil-light" id="calculated-schedule-date"></span></li>
                <li><span className="mil-light" id="calculated-schedule-time"></span></li>
            </ul >

        </>
    );
}
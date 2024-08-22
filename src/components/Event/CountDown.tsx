import { useEffect } from "react";
import { calculateNextEventDate, calculateTimeDifference } from "../../utils/dateDiff";

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
            <h3><span id="calculated-schedule"></span></h3>
            <ul>
                <li><span id="calculated-schedule-date"></span></li>
                <li><span id="calculated-schedule-time"></span></li>
            </ul >
        </>
    );
}
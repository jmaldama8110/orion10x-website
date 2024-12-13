import { useEffect } from "react";
import { calculateNextEventDate, calculateTimeDifference } from "../../utils/dateDiff";

export const CountDownComponent: React.FC<{ eventDate?: Date, minutes?: number, location: string }> = ({ eventDate, minutes, location }) => {

    useEffect(() => {
        const currentTime = new Date();
        const endDate = minutes ? calculateNextEventDate(currentTime, minutes) : eventDate;

        let idInterval = setInterval(() => {
            const difference = calculateTimeDifference(new Date().toISOString(), endDate!.toISOString());
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
                labelScheduleDate.innerText = `${endDate!.toLocaleDateString("es-MX", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}`
            }
            const labelScheduleTime: HTMLElement | null = document.getElementById("calculated-schedule-time");
            if (labelScheduleTime) {
                // labelScheduleTime.innerText = `${endDate!.toTimeString()}`
                labelScheduleTime.innerText = `${endDate!.toLocaleTimeString()}`
            }

        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    }, [])


    return (
        <>
            <h3 className="mil-light mil-text-center">Solo faltan:</h3>
            <p className="mil-light mil-mb-20 mil-text-center" style={{ color: "red" }}><span id="calculated-schedule"></span></p>
            <ul className="mil-simple-list mil-mb-50">
                <li><span className="mil-light" id="calculated-schedule-date"></span></li>
                <li><span className="mil-light" >{location}</span></li>
                <li><span className="mil-light" id="calculated-schedule-time"></span></li>
            </ul>

        </>
    );
}
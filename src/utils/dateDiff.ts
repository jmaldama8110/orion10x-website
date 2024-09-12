export function calculateTimeDifference(startDate: string, endDate: string):
 { days: number, hours: number, minutes: number, seconds: number } {
    // Convertir las fechas a objetos Date
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calcular la diferencia en milisegundos
    let differenceInMilliseconds = end.getTime() - start.getTime();
    
    // Calcular la diferencia en días, horas, minutos y segundos
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

export function calculateNextEventDate(currentTime: Date, minsStep: number) {
    const year = currentTime.getFullYear().toString();
    const mth = currentTime.getMonth() + 1;
    const month = mth > 9 ? mth.toString() : `0${mth}`;
    const day = currentTime.getDate() > 9 ? currentTime.getDate().toString() : `0${currentTime.getDate()}`;
    const hour = currentTime.getHours() > 9 ? currentTime.getHours().toString() : `0${currentTime.getHours()}`;

    let found = false;
    let i = 0;
    let newDate = new Date(`${year}-${month}-${day}T${hour}:00:00`);
    let proposedDate: Date = currentTime;

    while (!found) {
        i++;
        // 1 seg = 1000ms, 1min = 60 * 1000ms; 10mins = 60 * 1000 * 10
        proposedDate = new Date(newDate.getTime() + (minsStep * 60 * 1000));
        newDate = proposedDate;
        if (proposedDate.getTime() > currentTime.getTime()) {
            found = true;
        }

    }
    return proposedDate
}

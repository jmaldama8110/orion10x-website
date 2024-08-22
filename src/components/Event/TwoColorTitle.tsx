export const TwoColorTitle: React.FC<{ title: string }> = ({ title }) => {
    // Titulo de más de 3 palabras para ponerles el color requerido a la segunda 
    // palabra del titulo
    let t = title.split(" ");
    return (
        <h2 className="mil-light mil-mb-60">
            {t.length >= 1 ? t[0] : ""} <span className="mil-accent">
                {t.length >= 2 ? t[1] : ""} </span>
            {t.length >= 3 ? t.slice(2, t.length).join(" ") : ""}
        </h2>
    );
}
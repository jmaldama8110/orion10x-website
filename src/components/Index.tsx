import { useLoaderData } from "react-router-dom";
import { BackgroudSlider } from "./BackgroundSlider";
import { Cover } from "./Cover";
import { PainAgitationSection } from "./PainAgitation";
import { Benefits } from "./Benefits";
import { Testimonials } from "./Testimonials";
import { Features } from "./Features";
import { Faq } from "./Faq";

export const Index = () => {

    const { pageData }: any = useLoaderData();

    return (
        <>
            <section className="intro">
                <div className="img-container">
                    <BackgroudSlider data={pageData} />
                </div>
                <Cover data={pageData} />

            </section>

            <PainAgitationSection data={pageData} />
            <Benefits data={pageData} />
            <div className="container">
                <div className="mil-divider"></div>
            </div>

            <Testimonials data={pageData} />
            <Features data={pageData} />
            <Faq data={pageData} />
            <div style={{ textAlign: "center" }}>
                <a href="#." className="mil-button mil-border mil-mb-30" style={{ width: "300px" }}><span>{pageData.introSection.button.label}</span></a>
            </div>

        </>

    );
}
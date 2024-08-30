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
    async function onCallToActionClick() {
        const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement;
        const demoVideoEl: HTMLIFrameElement = document.getElementById("demo-video-element") as HTMLIFrameElement;
    
    
        if (demoVideoEl.src != pageData.metaData.demoVideoUrl) {
          demoVideoEl.src = pageData.metaData.demoVideoUrl
        }
        modal.showModal();
      }

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

            {/* <Testimonials data={pageData} /> */}
            <Features data={pageData} />
            <Faq data={pageData} />
            <div style={{ textAlign: "center" }} onClick={onCallToActionClick}>
                <a className="mil-button mil-border mil-mb-30" style={{ width: "300px" }}><span>{pageData.introSection.button.label}</span></a>
            </div>

        </>

    );
}
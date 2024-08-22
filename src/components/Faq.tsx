import "../components/css/Accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FaqEntryType, iPageData } from "../reducer/PageModel";

export const Faq: React.FC<{ data: iPageData }> = ({ data }) => {

    return (

        <section className="mil-faqs mil-p-0-120">
            <div className="mil-deco" style={{ bottom: "0", left: "10%", transform: "rotate(180deg)" }}></div>
            <div className="container">

                <div className="mil-tabs">
                    <h2>{data.faqSection.title.textLeft} <span className="mil-accent">{data.faqSection.title.textRight}</span></h2>
                    <div className="mil-tab" style={{ display: "block" }}>

                        <div className="row justify-content-between">

                            <div className="col-lg-4">
                                <h3 className="mil-up-font mil-mb-30"><span className="mil-accent">{data.faqSection.paragraphTitle.textLeft} </span>{data.faqSection.paragraphTitle.textRight}</h3>
                                <p className="mil-mb-60">{data.faqSection.description}</p>
                            </div>


                            <div className="col-lg-7">

                                <ul className="accordion-jm">
                                    {
                                        data.faqSection.faqList.map((faq: FaqEntryType, n: number) => (
                                            <li key={n}>
                                                <label htmlFor={`accordion-${n}`}><div><FontAwesomeIcon icon={faQuestionCircle} /> {faq.question}</div> <span>&#x3e;</span></label>
                                                <input type="radio" name="accordion" id={`accordion-${n}`}></input>
                                                <div className="detailed-content">
                                                    <p>
                                                        {faq.description}
                                                    </p>
                                                    {!!faq.videoUrl &&

                                                        <div className="video-container_1_1">
                                                            <video
                                                                controls
                                                                className="video-js"
                                                                style={{ width: "100%", height: "500px" }}
                                                                preload="auto"
                                                                data-setup={{}} >
                                                                <source src={faq.videoUrl}>
                                                                </source>
                                                            </video>
                                                        </div>
                                                    }
                                                </div>
                                            </li>
                                        ))
                                    }

                                </ul>

                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </section>


    );
}
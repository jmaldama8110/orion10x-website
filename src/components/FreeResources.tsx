import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData } from "react-router-dom";
import { CardButtonType } from "../reducer/PageModel";

export const FreeResources = () => {
    
    const { pageData }: any = useLoaderData();

    return (
        <>
            <div style={{ height: "100px", background: "black" }}></div>

            <section className="mil-p-120-0">
                <div className="container">

                    <div className="mil-text-center mil-mb-90">
                        <h2 className="mil-mb-20">{pageData.freeSection.title}</h2>
                        <p className="mil-mb-30 col-lg-8" style={{margin: "auto"}}>{pageData.freeSection.description}</p>
                    </div>

                    <div className="row mil-mb-60">

                        {
                            pageData.freeSection.cardsList.map( (card: CardButtonType) => (
                                <div className="col-lg-6" key={`card-button-el-${card.order}`}>
                                <div className="mil-hover-card mil-mb-30">
                                    <h4 className="mil-mb-30">{card.title}</h4>
                                    <p className="mil-mb-30">{card.description}</p>
                                    <a href={card.url} className="mil-link"><span>{card.actionLabel}</span><i><FontAwesomeIcon icon={faArrowRight} /></i></a>
                                </div>
    
                            </div>
                            ))
                        }

                    </div>

                </div>
            </section>
        </>


    );
}
import { useLoaderData } from "react-router-dom";
import { CardButtonType } from "../reducer/PageModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const FreeWorkshops = () => {
    const { pageData }: any = useLoaderData();
    return (
        <>
            <div style={{ height: "100px", background: "black" }}></div>

            <section className="mil-p-120-0">
                <div className="container">


                    {
                        pageData.freeWorkshopsList.map((wk: any) => (
                            <div>
                                <div className="mil-text-center mil-mb-90">
                                    <h2 className="mil-mb-20">{wk.title}</h2>
                                    <p className="mil-mb-30 col-lg-8" style={{ margin: "auto" }}>{wk.description}</p>
                                </div>

                                <div className="row mil-mb-60">

                                    {
                                        wk.cardsList.map((card: CardButtonType) => (
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

                        ))
                    }



                </div>
            </section>
        </>
    );

}
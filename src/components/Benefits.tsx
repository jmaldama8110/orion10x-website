
import { iPageData, valueParagraphType } from '../reducer/PageModel';

export const Benefits: React.FC<{ data: iPageData }> = ({ data }) => {
    return (

        <section className="mil-services mil-p-120-90">
            <div className="mil-deco" style={{ top: "0", right: "20%" }}></div>
            <div className="container">
                <h2 className="mil-mb-30">{data.benefitsSection.title.textLeft}<span className="mil-accent"> {data.benefitsSection.title.textRight}</span></h2>

                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        {
                            data.benefitsSection.benefitsList.filter( (w:valueParagraphType,n) => n%2 == 0 )
                            .map((x: valueParagraphType,position) => (
                                <>
                                    <div className="mil-divider mil-divider-left"></div>
                                    <div className="mil-service-item">
                                        <div className="mil-service-icon">
                                            <div className="mil-icon-frame mil-icon-frame-md">
                                                <img src={x.iconUrl} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="mil-service-text">
                                            <h5 className="mil-mb-30"><span className="mil-accent">0{position+1}</span>{x.title}</h5>
                                            <p>  {x.description}</p>
                                        </div>
                                    </div>

                                </>
                            ))

                        }
                    </div>

                    <div className="col-lg-6 col-xl-6">
                        {
                            data.benefitsSection.benefitsList.filter( (w:valueParagraphType,n:number) => n%2 == 1 )
                            .map((x: valueParagraphType, position) => (
                                <>
                                    <div className="mil-divider mil-divider-left"></div>
                                    <div className="mil-service-item">
                                        <div className="mil-service-icon">
                                            <div className="mil-icon-frame mil-icon-frame-md">
                                                <img src={x.iconUrl} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="mil-service-text">
                                            <h5 className="mil-mb-30"><span className="mil-accent">0{position+data.benefitsSection.benefitsList.length-1}</span>{x.title}</h5>
                                            <p>  {x.description}</p>
                                        </div>
                                    </div>

                                </>
                            ))

                        }
                    </div>

 

                </div>
            </div>
        </section>
    );
}
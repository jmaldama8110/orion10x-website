import { iPageData, valueParagraphType } from '../reducer/PageModel';


export const Features: React.FC<{ data: iPageData }> = ({ data }) => {

    return (
        <section className="mil-p-120-120">
            <div className="container">
                <h2 className="mil-mb-120">{data.featuresSection.title.textLeft} {data.featuresSection.title.textRight}</h2>
                {
                    data.featuresSection.featuresList.map((feat: valueParagraphType, num) => (
                        <div key={num}>
                            <div className="mil-divider"></div>
                            <div className="mil-line-icon-box">
                                <div className="row align-items-center">
                                    <div className="col-xl-2">

                                        <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <img src={feat.iconUrl} alt="icon" />
                                        </div>

                                    </div>
                                    <div className="col-xl-4">

                                        <h4 className="mil-mb-30">{feat.title}</h4>

                                    </div>
                                    <div className="col-xl-6">

                                        <p className="mil-box-text mil-mb-30">{feat.description}</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }

                <div className="mil-divider"></div>
            </div>
        </section>
    );
}
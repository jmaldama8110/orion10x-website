import { iPageData } from "../reducer/PageModel";

export const PainAgitationSection: React.FC<{ data: iPageData }> = ({ data }) => {

    return (
        <section className="mil-deep-bg mil-p-120-60">
            <div className="mil-deco" style={{ top: "0", right: "15%" }}></div>
            <div className="container">
                <div className="row justify-content-between align-items-center">

                    <div className="col-lg-5 mil-mb-60" >

                        <div className="video-container_1_1">
                            <video
                                controls
                                id="pain-agitate-video"
                                className="video-js"
                                style={{ width: "100%", height: "100%" }}
                                preload="auto"
                                data-setup={{}} >
                                <source src={data.painAgitationSection.videoUrl}>
                                </source>
                            </video>
                        </div>
                    </div>
                    <div className="col-lg-6 mil-mb-60">

                        <span className="mil-suptitle mil-suptitle-2 mil-mb-20">{data.painAgitationSection.subjectBullet}</span>
                        <h3 className="mil-mb-20">{data.painAgitationSection.title.textLeft} <span className="mil-accent">{data.painAgitationSection.title.textRight}</span></h3>

                        <h4 className="mil-mb-20">{data.painAgitationSection.paragrap01.leftText} <span className="mil-accent">{data.painAgitationSection.paragrap01.centerText}</span> {data.painAgitationSection.paragrap01.rightText}</h4>

                        <h5 className="mil-mb-20">
                            {data.painAgitationSection.paragrap02.leftText} <span className="mil-accent">{data.painAgitationSection.paragrap02.centerText} </span>
                            {data.painAgitationSection.paragrap02.rightText}

                        </h5>
                        <p className="mil-mb-20">
                            {data.painAgitationSection.paragrap03.leftText}
                            {data.painAgitationSection.paragrap03.centerText}
                            {data.painAgitationSection.paragrap03.rightText}
                        </p>

                        <p>
                            {data.painAgitationSection.paragrap04.leftText} <span className="mil-accent">{data.painAgitationSection.paragrap04.centerText} </span>
                            {data.painAgitationSection.paragrap04.rightText}
                        </p>

  
                    </div>
                </div>
            </div>
        </section>

    );
}
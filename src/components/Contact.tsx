
import { useLoaderData } from "react-router-dom";
import api from "../api/api";
import { useState } from "react";

export const Contact = () => {

    const [showLoading, setShowLoading] = useState<boolean>(false);
    const [isSent, setIsSent] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const { pageData }: any = useLoaderData();

    async function sendFormContactData(e: any) {
        e.preventDefault();
        const formData = new FormData(document.getElementById('formFeedback') as HTMLFormElement);
        setError('');
        try {

            setShowLoading(true);
            const res = await api.post(`/api/sendemail`, {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                message: formData.get("message"),
                template_id: "d-59e677f1fe0b4aeea317fb1d9ea97cdd"
            });
            if (!res.data.error) {
                setShowLoading(false);
                setIsSent(true);
            } else {
                setError(res.data.error)
            }

        }
        catch (e) {
            console.log(e);
            setIsSent(false);
            setError('Error')
        }
    }
    return (
        <>
            <div style={{ height: "100px", background: "gray" }}></div>
            <section className="mil-contact mil-gradient-bg mil-p-120-0" id='contact'>
                <div className="mil-deco mil-deco-accent" style={{ top: "0", right: "10%" }}></div>
                <div className="container">
                    <h2 className="mil-light mil-mb-90">{pageData.contactSection.headingTitle.textLeft} <span className="mil-accent">{pageData.contactSection.headingTitle.textRight}</span></h2>
                    <form id="formFeedback" method="post" encType="multipart/form-data" onSubmit={sendFormContactData}>
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="mil-input-frame mil-mb-30">
                                    <label><span className="mil-light">{pageData.contactSection.nameInputLabel}</span><span className="mil-accent">{pageData.contactSection.requiredLabel}</span></label>
                                    <input type="text" name="name" required placeholder="Enter Your Name Here" />
                                </div>
                                <div className="mil-input-frame mil-mb-30">
                                    <label><span className="mil-light">{pageData.contactSection.emailInputLabel}</span><span className="mil-accent">{pageData.contactSection.requiredLabel}</span></label>
                                    <input type="email" name="email" required id="email" placeholder="Your Email" />
                                </div>
                                <div className="mil-input-frame mil-mb-60">
                                    <label><span className="mil-light">{pageData.contactSection.phoneInputLabel}</span><span className="mil-light-soft">{pageData.contactSection.optionalLabel}</span></label>
                                    <input type="tel" name="phone" placeholder="Your Phone" />
                                </div>
                                <div className="mil-attach-frame mil-mb-60">
                                    <i className="fas fa-paperclip"></i>
                                    <label className="mil-custom-file-input">
                                        <span>{pageData.contactSection.attachYouFileInputLabel}</span>
                                        <input type="file" name="userfile" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*" id="mil-file-input" />
                                    </label>
                                    <p className="mil-text-sm mil-light-soft">{pageData.contactSection.filesizeLabel}</p>
                                </div>

                            </div>
                            <div className="col-lg-6">

                                <div className="mil-input-frame mil-mb-30">
                                    <label><span className="mil-light">{pageData.contactSection.messageInputLabel}</span><span className="mil-accent">{pageData.contactSection.requiredLabel}</span></label>
                                    <textarea placeholder="Your Message" name="message"></textarea>
                                </div>
                                <p className="mil-text-sm mil-light-soft mil-mb-15">{pageData.contactSection.footNote1}</p>

                                <div className="mil-checbox-frame mil-mb-60">
                                    <input className="mil-checkbox" id="checkbox-1" type="checkbox" name="agree" value="1" required />
                                    <label htmlFor="checkbox-1" className="mil-text-sm mil-light">{pageData.contactSection.footNote2} <a href="#." className="mil-accent">{pageData.contactSection.footNoteColored}</a></label>
                                </div>

                            </div>
                            <div className="col-12">

                                {!isSent &&
                                    <button type="submit" className="mil-button mil-accent-bg mil-fw" disabled={!isSent && showLoading}>
                                        {showLoading ? <div className="spinner"></div>
                                            : <span>{pageData.contactSection.contactButton.label}</span>}

                                    </button>}


                            </div>

                        </div>
                        {isSent && !error && <div className="alert-success" style={{ display: "block" }}><h5>{pageData.contactSection.messageSentOk}</h5></div>}
                        {!!error && <div className="alert-error" style={{ display: "block" }}><h5>{pageData.contactSection.messageSentError}</h5></div>}
                    </form>
                </div>
            </section>
        </>

    );
}
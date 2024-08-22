import { Link, useFetcher, useRouteLoaderData } from "react-router-dom";
import { CountDownComponent } from "./Webinar";
import imgBackgroundMain from '../../assets/photo/13.jpg';

export const AuthWebinar = ()=> {
    // Get our logged in user, if they exist, from the root route loader data
    let { user, webinarElement } = useRouteLoaderData("webinar-element") as { user: string | null, webinarElement:any };
    let fetcher = useFetcher();

    if (!user) {
        return (
          
        
            <>

            <div className="mil-banner-sm-3">
                <img src={imgBackgroundMain} className="mil-background-image" style={{ objectPosition: "center" }} data-swiper-parallax="-100" data-swiper-parallax-scale="1.1" alt="image" />
                <div className="mil-overlay"></div>
                <div className="mil-banner-content">
                    <div className="container mil-relative">

                        <div className="row justify-content-between">
                            <div className="col-xl-6">

                                <span className="mil-suptitle mil-light mil-suptitle-2 mil-mb-30">Our Latest News</span>
                                <h2 className="mil-light mil-mb-60">Technical <span className="mil-accent">Controls</span> To Stop Social Engineering</h2>

                                <CountDownComponent />

                                <p className="mil-light-soft mil-mb-120">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas.</p>

                            </div>

                            <div className="col-xl-5 mil-relative">
                                <Link to={`/webinar/${webinarElement.id}/protected`} className="">Reservar mi lugar</Link>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <div className="mil-banner-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">

                            <h6>Digital <span className="mil-accent">Transformation</span> Services & Why It Matters Webinar</h6>

                        </div>
                    </div>
                </div>
            </div>
       </>
        
        
        );

    }

    let isLoggingOut = fetcher.formData != null;

    return (
        <div>
            <p>Welcome {user}!</p>
            <fetcher.Form method="post" action={`/webinar/${webinarElement.id}/thanks`}>
                <button type="submit" disabled={isLoggingOut}>
                    {isLoggingOut ? "Signing out..." : "Sign out"}
                </button>
            </fetcher.Form>
        </div>
    );
}


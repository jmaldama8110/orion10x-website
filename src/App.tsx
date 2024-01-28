import { Header } from "./components/Header";
import "./components/css/Components.css";
import { BackgroudSlider } from "./components/BackgroundSlider";

import { Cover } from "./components/Cover";
import { AboutTeamAndCompany } from "./components/Team";
import { Footer } from "./components/Footer";
import { useEffect, useReducer, useState } from "react";
import api from "./api/api";
import { PageDataDefault, PageDataReducer } from "./reducer/PageModel";
import { CaseStudies } from "./components/CaseStudies";
import { Services } from "./components/Services";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

function App() {
  const [loading, setLoanding] = useState<boolean>(true);

  const [pageData, dispatchPageData] = useReducer(
    PageDataReducer,
    PageDataDefault
  );

  let render = true;
  useEffect(() => {
    async function loadFromApi() {
      try {
        const qs = `/api/pages?filters[id][$eq]=1&populate[0]=metaData.metaImage&populate[1]=menu.items&populate[2]=backgroundSlides.slides.image&populate[3]=introSection.twoColorTitle&populate[4]=introSection.floatingWords&populate[5]=introSection.button`;
        const response = await api.get(qs);
          
          
        console.log(response.data.data[0].attributes);

        const attributes = response.data.data[0].attributes;
        const backgroundSlides = attributes.backgroundSlides.slides.map(
          (i: any) => ({
            order: i.order,
            description: i.description,
            imageUrl: i.image.data.attributes.url,
          })
        );

        dispatchPageData({
          type: "SET_DATA",
          pageData: {
            ...PageDataDefault,
            menu: attributes.menu.items,
            metaData: {
              metaDescription: attributes.metaData.metaDescription,
              metaTitle: attributes.metaData.metaTitle,
              metaImageUrl: attributes.metaData.metaImage.data.attributes.url,
            },
            backgroundSlides,
            introSection: {
              ctaDescription: attributes.introSection.ctaDescrition,
              largeTitle: attributes.introSection.largeTitle,
              subTitle: attributes.introSection.subTitle,
              floatingWords: attributes.introSection.floatingWords,
              twoColorTitle: attributes.introSection.twoColorTitle,
              button: {
                label: attributes.introSection.button.label,
                style: attributes.introSection.button.style,
              },
            },
          },
        });
        setLoanding(false);
      } catch (e: any) {
        console.log(e);
      }
    }

    if (render) {
      loadFromApi();
      render = false;
    }
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <Header data={pageData} /> 
          <section className="intro">
            <div className="img-container">
              <BackgroudSlider data={pageData} />
            </div>
            <Cover data={pageData} />
          </section>
          {/* <About /> */}
          <AboutTeamAndCompany />
          <CaseStudies />
          <Services />
          <Blog />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

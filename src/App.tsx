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
        const str = [
          "filters[id][$eq]=1&",
          "populate[0]=metaData.metaImage&",
          "populate[1]=menu.items&",
          "populate[2]=backgroundSlides.slides.image&",
          "populate[3]=introSection.twoColorTitle&",
          "populate[4]=introSection.floatingWords&",
          "populate[5]=introSection.button&",
          "populate[6]=teamCompanySection.pageBreadcrumb&",
          "populate[7]=teamCompanySection.subtitle&",
          "populate[8]=teamCompanySection.team.selfi&",
          "populate[9]=teamCompanySection.valuesTitle&",
          "populate[10]=teamCompanySection.valuesParagraphs&",
          "populate[11]=teamCompanySection.ctaButton&",
          "populate[12]=teamCompanySection.ctaTitle&",
          "populate[13]=caseStudiesSection.pageBreadcrumb&",
          "populate[14]=caseStudiesSection.cases.image&",

          "populate[15]=servicesSection&",
          "populate[16]=servicesSection.pageBreadcrumb&",
          "populate[17]=servicesSection.ctaButton&",
          "populate[18]=servicesSection.paragraphs&",
          "populate[19]=servicesSection.ctaButton2&",
          "populate[20]=servicesSection.footNoteHeading&",
          "populate[21]=servicesSection.footNoteIconList.iconImg&",
          "populate[22]=servicesSection.footNoteCta&",
          
          "populate[23]=blogSection.pageBreadcrumb&",
          "populate[24]=blogSection.noteSelfi&",
          "populate[25]=blogSection.bullets&",
          "populate[26]=blogSection.tagList&",
          "populate[27]=blogSection.contactUsButton&",
          "populate[28]=blogSection.entries.image&",
          
          "populate[29]=contactSection.headingTitle&",
          "populate[30]=contactSection.contactButton&",

          "populate[31]=footerSection.joinTitle&",
          "populate[32]=footerSection.joinButton&",
          "populate[33]=footerSection.socialList&",
          "populate[34]=footerSection.termsconditionList&",
          "populate[35]=footerSection.playstoreButton&",
          "populate[36]=footerSection.appstoreButton",

            
    
        ];
        const qs = `/api/pages?${str.join("")}`;
        const response = await api.get(qs);

          console.log(response.data.data[0].attributes.footerSection);
          

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
            teamCompanySection: {
              ctaButton: {
                label: attributes.teamCompanySection.ctaButton.label,
                style: attributes.teamCompanySection.ctaButton.style,
              },
              ctaDescription: attributes.teamCompanySection.ctaDescription,
              ctaSubtitle: attributes.teamCompanySection.ctaSubtitle,
              ctaTitle: {
                leftText: attributes.teamCompanySection.ctaTitle.leftText,
                rightText: attributes.teamCompanySection.ctaTitle.rightText,
                centerText: attributes.teamCompanySection.ctaTitle.centerText,
              },
              headingText: attributes.teamCompanySection.headingText,
              pageBreadcrum: {
                textLeft: attributes.teamCompanySection.pageBreadcrumb.textLeft,
                sectionName:
                  attributes.teamCompanySection.pageBreadcrumb.sectionName,
                url: attributes.teamCompanySection.pageBreadcrumb.url,
              },
              subtitle: {
                leftText: attributes.teamCompanySection.subtitle.leftText,
                rightText: attributes.teamCompanySection.subtitle.rightText,
                centerText: attributes.teamCompanySection.subtitle.centerText,
              },
              team: attributes.teamCompanySection.team.map((i: any) => ({
                name: i.name,
                position: i.position,
                selfiUrl: i.selfi.data.attributes.url,
              })),
              valuesDescription:
                attributes.teamCompanySection.valuesDescription,
              valuesParagraphs:
                attributes.teamCompanySection.valuesParagraphs.map(
                  (i: any) => ({ title: i.title, description: i.description })
                ),
              valuesTitle: {
                textLeft: attributes.teamCompanySection.valuesTitle.textLeft,
                textRight: attributes.teamCompanySection.valuesTitle.textRight,
              },
              },
              caseStudiesSection: {
                  pageBreadcrum: {
                      sectionName: attributes.caseStudiesSection.pageBreadcrumb.sectionName,
                      url: attributes.caseStudiesSection.pageBreadcrumb.url,
                      textLeft: attributes.caseStudiesSection.pageBreadcrumb.textLeft
                  },
                  headingText: attributes.caseStudiesSection.headingText,
                  cases: attributes.caseStudiesSection.cases.map((i: any) => ({ title: i.title, subtitle: i.subtitle, imageUrl: i.image.data.attributes.url, buttonLabel: i.buttonLabel,buttonUrl: i.buttonUrl }))
              },
              servicesSection: {
                  headingTitle: attributes.servicesSection.headingTitle,
                  headingSubtitle: attributes.servicesSection.headingSubtitle,
                  pageBreadcrumb: {
                      textLeft: attributes.servicesSection.pageBreadcrumb.textLeft,
                      url: attributes.servicesSection.pageBreadcrumb.url,
                      sectionName: attributes.servicesSection.pageBreadcrumb.sectionName,
                  },
                  ctaButton: {
                      label: attributes.servicesSection.ctaButton.label,
                      style: attributes.servicesSection.ctaButton.style
                  },
                  ctaDescription: attributes.servicesSection.ctaDescription,
                  paragraphs: attributes.servicesSection.paragraphs.map((i: any) => ({ title: i.title, description: i.description })),
                  subtitle: attributes.servicesSection.subtitle,
                  subtitleDescription: attributes.servicesSection.subtitleDescription,
                  
                  footNote: attributes.servicesSection.footNote,
                  footNoteIconList: attributes.servicesSection.footNoteIconList.map((i: any) => ({ iconImg: i.iconImg.data.attributes.url, label: i.label })),
                  footNoteCta: {
                      label: attributes.servicesSection.footNoteCta.label,
                      style: attributes.servicesSection.footNoteCta.style
                  },
                  footNoteDescription: attributes.servicesSection.footNoteDescription,
                  footNoteHeading: {
                      leftText: attributes.servicesSection.footNoteHeading.leftText,
                      rightText: attributes.servicesSection.footNoteHeading.rightText,
                      centerText: attributes.servicesSection.footNoteHeading.centerText
                  }
              },
              blogSection: {
                  headingTitle: attributes.blogSection.headingTitle,
                  pageBreadcrumb: {
                      textLeft: attributes.blogSection.pageBreadcrumb.textLeft,
                      url: attributes.blogSection.pageBreadcrumb.url,
                      sectionName: attributes.blogSection.pageBreadcrumb.sectionName
                  },
                  noteTitle: attributes.blogSection.noteTitle,
                  noteDescription: attributes.blogSection.noteDescription,
                  noteSelfi: attributes.blogSection.noteSelfi.data.attributes.url,
                  noteName: attributes.blogSection.noteName,
                  notePosition: attributes.blogSection.notePosition,
                  
                  searchInputPlaceholder: attributes.blogSection.searchInputPlaceholder,
                  recentPostTitle: attributes.blogSection.recentPostTitle,
                  bulletListTitle: attributes.blogSection.bulletListTitle,
                  bullets: attributes.blogSection.bullets.map((i: any) => ({ label: i.label })),
                  tagsTitle: attributes.blogSection.tagsTitle,
                  tagList: attributes.blogSection.tagList.map((i: any) => ({ label: i.label })),
                  newsletterTitle: attributes.blogSection.newsletterTitle,
                  emailInputPlaceholder: attributes.blogSection.emailInputPlaceholder,
                  contactUsTitle: attributes.blogSection.contactUsTitle,
                  contactUsDescription: attributes.blogSection.contactUsDescription,
                  contactUsButton: {
                      label: attributes.blogSection.contactUsButton.label,
                      style: attributes.blogSection.contactUsButton.style,
                  },
                  entries: attributes.blogSection.entries.map((i: any) => ({
                      title: i.title,
                      category: i.category,
                      dateIssued: i.dateIssued,
                      description: i.description,
                      imageUrl: i.image.data.attributes.url
                  }))
              },
             contactSection: {
                 headingTitle: {
                     textLeft: attributes.contactSection.headingTitle.textLeft,
                     textRight: attributes.contactSection.headingTitle.textRight
                 },
                nameInputLabel: attributes.contactSection.nameInputLabel,
                emailInputLabel: attributes.contactSection.emailInputLabel,
                phoneInputLabel: attributes.contactSection.phoneInputLabel,
                messageInputLabel: attributes.contactSection.messageInputLabel,
                attachYouFileInputLabel: attributes.contactSection.attachYouFileInputLabel,
                footNote1: attributes.contactSection.footNote1,
                footNote2: attributes.contactSection.footNote2,
                footNoteColored: attributes.contactSection.footNoteColored,
                requiredLabel: attributes.contactSection.requiredLabel,
                 optionalLabel: attributes.contactSection.optionalLabel,
                filesizeLabel: attributes.contactSection.filesizeLabel,
                contactButton: {
                    label: attributes.contactSection.contactButton.label,
                    style: attributes.contactSection.contactButton.style
                }
                
              },
              footerSection: {
                  orionBrief: attributes.footerSection.orionBrief,
                  joinTitle: {
                      leftText: attributes.footerSection.joinTitle.leftText,
                      centerText: attributes.footerSection.joinTitle.centerText,
                      rightText: attributes.footerSection.joinTitle.rightText
                  },
                  joinDescription: attributes.footerSection.joinDescription,
                  emailInputPlaceholder: attributes.footerSection.emailInputPlaceholder,
                  joinButton: {
                      label: attributes.footerSection.joinButton.label,
                      style: attributes.footerSection.joinButton.style
                  },
                  socialList: attributes.footerSection.socialList.map((i: any) => ({ text: i.text, url: i.url, position: i.position })),
                  termsconditionList: attributes.footerSection.termsconditionList.map( (i:any) => ({ text: i.text, url: i.url, position: i.position })),
                  copyright: attributes.footerSection.copyright,
                  copyrightAuthor: attributes.footerSection.copyrightAuthor,
                  playstoreButton: {
                      label: attributes.footerSection.playstoreButton.label,
                      storeName: attributes.footerSection.playstoreButton.storeName,
                      url: attributes.footerSection.playstoreButton.url
                  },
                  appstoreButton: {
                      label: attributes.footerSection.appstoreButton.label,
                      storeName: attributes.footerSection.appstoreButton.storeName,
                      url: attributes.footerSection.appstoreButton.url
                  },
                  
                  
              }
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
        <AboutTeamAndCompany data={ pageData} />
        <Services data={pageData} />
        <CaseStudies data={ pageData} />
        <Blog data={pageData}/>
        <Contact data={pageData}/>
        <Footer data={pageData} />
      </>
      )}
    </>
  );
}

export default App;



import { Outlet, useLoaderData } from "react-router-dom";
import api from "../api/api";
import { PageDataDefault } from "../reducer/PageModel";
import { Header } from "./Header";
import "./css/Components.css";
import { Footer } from "./Footer";


export async function loader() {
    const pageData = await loadFromApi();
    return { pageData };
}

async function loadFromApi() {
    try {
        const str = [
            "filters[id][$eq]=1&",
            "populate[0]=metaData&",
            "populate[1]=menu.items&",
            "populate[2]=menu.ctaActionButton&",
            "populate[3]=backgroundSlides.slides&",
            "populate[4]=introSection.twoColorTitle&",
            "populate[5]=introSection.floatingWords&",
            "populate[6]=introSection.button&",
            "populate[7]=teamCompanySection.pageBreadcrumb&",
            "populate[8]=teamCompanySection.subtitle&",
            "populate[9]=teamCompanySection.team&",
            "populate[10]=teamCompanySection.valuesTitle&",
            "populate[11]=teamCompanySection.valuesParagraphs&",
            "populate[12]=teamCompanySection.ctaButton&",
            "populate[13]=teamCompanySection.ctaTitle&",
            "populate[14]=caseStudiesSection.pageBreadcrumb&",
            "populate[15]=caseStudiesSection.cases&",

            "populate[16]=servicesSection&",
            "populate[17]=servicesSection.pageBreadcrumb&",
            "populate[18]=servicesSection.ctaButton&",
            "populate[19]=servicesSection.paragraphs&",
            "populate[20]=servicesSection.ctaButton2&",
            "populate[21]=servicesSection.footNoteHeading&",
            "populate[22]=servicesSection.footNoteIconList&",
            "populate[23]=servicesSection.footNoteCta&",

            "populate[24]=blogSection.pageBreadcrumb&",
            "populate[25]=blogSection&",
            "populate[26]=blogSection.bullets&",
            "populate[27]=blogSection.tagList&",
            "populate[28]=blogSection.contactUsButton&",
            "populate[29]=blogSection.entries&",

            "populate[30]=contactSection.headingTitle&",
            "populate[31]=contactSection.contactButton&",

            "populate[32]=footerSection.joinTitle&",
            "populate[33]=footerSection.joinButton&",
            "populate[34]=footerSection.socialList&",
            "populate[35]=footerSection.termsconditionList&",
            "populate[36]=footerSection.playstoreButton&",
            "populate[37]=footerSection.appstoreButton&",

            "populate[38]=painAgitationSection.title&",
            "populate[39]=painAgitationSection.paragrap01&",
            "populate[40]=painAgitationSection.paragrap02&",
            "populate[41]=painAgitationSection.paragrap03&",
            "populate[42]=painAgitationSection.paragrap04&",

            "populate[43]=benefitsSection.title&",
            "populate[44]=benefitsSection.benefitsList&",

            "populate[45]=testimonialSection.title&",
            "populate[46]=testimonialSection.testimonialsList&",

            "populate[47]=featuresSection.title&",
            "populate[48]=featuresSection.featuresList&",

            "populate[49]=faqSection.title&",
            "populate[50]=faqSection.paragraphTitle&",
            "populate[51]=faqSection.faqList&",

            "populate[52]=freeSection.cardsList&",

            "populate[53]=freeWorkshopsList.cardsList",


        ];
        const qs = `/api/pages?${str.join("")}`;
        const response = await api.get(qs);

        const attributes = response.data.data[0].attributes;
        const backgroundSlides = attributes.backgroundSlides.slides.map(
            (i: any) => ({
                order: i.order,
                description: i.description,
                imageUrl: i.imageUrl,
            })
        );

        const pageData = {
            ...PageDataDefault,
            menu: {
                menuItems: attributes.menu.items,
                ctaActionButton: attributes.menu.ctaActionButton
            },
            metaData: {
                metaDescription: attributes.metaData.metaDescription,
                metaTitle: attributes.metaData.metaTitle,
                logoUrl: attributes.metaData.logoUrl,
                demoVideoUrl: attributes.metaData.demoVideoUrl
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
                    selfiUrl: i.selfiUrl,
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
                cases: attributes.caseStudiesSection.cases.map((i: any) => ({ title: i.title, subtitle: i.subtitle, imageUrl: i.imageUrl, buttonLabel: i.buttonLabel, buttonUrl: i.buttonUrl }))
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
                footNoteIconList: attributes.servicesSection.footNoteIconList.map((i: any) => ({ iconImg: i.iconUrl, label: i.label })),
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
                noteSelfi: attributes.blogSection.noteSelfiUrl,
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
                    imageUrl: i.imageUrl,
                    entryId: i.entryId

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
                },
                messageSentOk: attributes.contactSection.messageSentOk,
                messageSentError: attributes.contactSection.messageSentError

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
                messageInputPlaceholder: attributes.footerSection.messageInputPlaceholder,
                joinButton: {
                    label: attributes.footerSection.joinButton.label,
                    style: attributes.footerSection.joinButton.style
                },
                socialList: attributes.footerSection.socialList.map((i: any) => ({ text: i.text, url: i.url, position: i.position })),
                termsconditionList: attributes.footerSection.termsconditionList.map((i: any) => ({ text: i.text, url: i.url, position: i.position })),
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


            },
            painAgitationSection: {
                title: attributes.painAgitationSection.title,
                subjectBullet: attributes.painAgitationSection.subjectBullet,
                videoUrl: attributes.painAgitationSection.videoUrl,
                paragrap01: attributes.painAgitationSection.paragrap01,
                paragrap02: attributes.painAgitationSection.paragrap02,
                paragrap03: attributes.painAgitationSection.paragrap03,
                paragrap04: attributes.painAgitationSection.paragrap04,
            },
            benefitsSection: {
                title: attributes.benefitsSection.title,
                benefitsList: attributes.benefitsSection.benefitsList
            },
            testimonialSection: {
                title: attributes.testimonialSection.title,
                testimonialsList: attributes.testimonialSection.testimonialsList
            },
            featuresSection: {
                title: attributes.featuresSection.title,
                featuresList: attributes.featuresSection.featuresList
            },
            faqSection: {
                title: attributes.faqSection.title,
                paragraphTitle: attributes.faqSection.paragraphTitle,
                description: attributes.faqSection.description,
                faqList: attributes.faqSection.faqList
            },
            freeSection: {
                title: attributes.freeSection.title,
                description: attributes.freeSection.description,
                cardsList: attributes.freeSection.cardsList
            },
            freeWorkshopsList: attributes.freeWorkshopsList
        }
        console.log(pageData.freeWorkshopsList  )
        return pageData;

    } catch (e: any) {
        console.log(e);
    }
    return undefined
}
export const Home = () => {

    const { pageData }: any = useLoaderData();


    function onCloseModal() {
        const modal: HTMLDialogElement = document.getElementById("modal") as HTMLDialogElement;
        const demoVideoEl: HTMLIFrameElement = document.getElementById("demo-video-element") as HTMLIFrameElement;
        if(demoVideoEl && demoVideoEl.src == pageData.metaData.demoVideoUrl ){
            
           demoVideoEl.src = ''
        }

        modal.close();
    }

    return (
        <>
            <Header data={pageData} />

            <Outlet />
            <dialog className="modal" id="modal">
                <div className="video-container-full">
                    <iframe
                        src={pageData.metaData.demoVideoUrl}
                        allow="autoplay;fullscreen; picture-in-picture; clipboard-write"
                        style={{ width: "100%", height: "100%" }} title="final_jaime" id="demo-video-element">
                        
                    </iframe>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
                <button onClick={onCloseModal}>Cerrar</button>
            </dialog>
            <Footer data={pageData} />
        </>


    );
}
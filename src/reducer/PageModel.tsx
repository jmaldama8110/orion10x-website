export type ActionPageType =
    {
        type: "SET_DATA",
        pageData: iPageData
    } |
    {
        type: "RESET_DATA"
    }

export type metaDataType = {
    metaTitle: string
    metaDescription: string
    logoUrl: string
}
export type menuItemType = {
    position: number
    url: string
    text: string
}

export type slideItemType = {
    order: number
    description: string
    imageUrl: string
}

export type floatingWordsType = {
    label: string
    title: string
    description: string
}

export type twoColorTitleType = {
    textLeft: string
    textRight: string
}
export type buttonType = {
    label: string
    style: "primary" | "secondary"
}

export type pageBreadcrumbType = {
    textLeft: string
    url: string
    sectionName: string
}
export type teamMemberType = {
    name: string
    position: string;
    selfiUrl: string
}
export type valueParagraphType = {
    title: string
    description: string
}
export type ThreeColorTextType = {
    leftText: string
    rightText: string
    centerText: string
}

export type PlaystoreButton = {
    label: string
    storeName: string
    url: string
}

export type CaseStudyType = {
    title: string
    subtitle: string
    imageUrl: string
    buttonLabel: string
    buttonUrl: string
}

export type IconListItem = {
    label: string
    iconImg: string
}
export type BlogEntryType = {
    title: string
    category: string
    dateIssued: string
    description: string
    imageUrl: string
}

export interface iPageData {
    title: string
    description: string
    slug: string
    metaData: metaDataType
    menu: menuItemType[]
    backgroundSlides: slideItemType[]
    introSection: {
        largeTitle: string
        subTitle: string
        ctaDescription: string
        floatingWords: floatingWordsType[]
        twoColorTitle: twoColorTitleType
        button: buttonType
    }
    teamCompanySection: {
        pageBreadcrum: pageBreadcrumbType
        headingText: string
        subtitle: ThreeColorTextType,
        team: teamMemberType[]
        valuesTitle: {
            textLeft: string
            textRight: string
        }
        valuesDescription: string
        valuesParagraphs: valueParagraphType[]
        ctaSubtitle: string
        ctaButton: buttonType
        ctaTitle: ThreeColorTextType
        ctaDescription: string
    },
    caseStudiesSection: {
        pageBreadcrum: pageBreadcrumbType,
        headingText: string
        cases: CaseStudyType[],
    },
    servicesSection: {
        headingTitle: string
        pageBreadcrumb: pageBreadcrumbType
        
        ctaDescription: string
        ctaButton: buttonType
        
        subtitle: string
        headingSubtitle: string
        subtitleDescription: string
        
        paragraphs: valueParagraphType[]
        
        footNote: string
        footNoteIconList: IconListItem []
        footNoteHeading: ThreeColorTextType
        footNoteDescription: string
        footNoteCta: buttonType
        
    },
    blogSection: {
        headingTitle: string
        pageBreadcrumb: pageBreadcrumbType
        noteTitle: string
        noteDescription: string
        noteSelfi: string
        noteName: string
        notePosition: string
        
        searchInputPlaceholder: string
        recentPostTitle: string
        bulletListTitle: string
        
        bullets: IconListItem[]
        tagsTitle: string
        tagList: IconListItem[]
        
        newsletterTitle: string
        emailInputPlaceholder: string
        contactUsTitle: string
        contactUsDescription: string
        
        contactUsButton: buttonType
        entries: BlogEntryType []
        
    },
    contactSection: {
        headingTitle: twoColorTitleType
        nameInputLabel: string
        emailInputLabel: string
        phoneInputLabel: string
        messageInputLabel: string
        attachYouFileInputLabel: string
        footNote1: string
        footNote2: string
        footNoteColored: string
        requiredLabel: string
        optionalLabel: string
        contactButton: buttonType
        filesizeLabel: string
    },
    footerSection: {
        orionBrief: string
        joinTitle: ThreeColorTextType
        joinDescription: string
        emailInputPlaceholder: string
        joinButton: buttonType
        
        socialList: menuItemType[]
        termsconditionList: menuItemType[]
        
        copyright: string
        copyrightAuthor: string
        playstoreButton: PlaystoreButton
        appstoreButton: PlaystoreButton
    }
    
}

export const PageDataDefault: iPageData = {
    title: '',
    description: '',
    slug: '',
    metaData: {
        metaDescription: '',
        logoUrl: '',
        metaTitle: ''
    },
    menu: [],
    backgroundSlides: [],
    introSection: {
        largeTitle: '',
        subTitle: '',
        ctaDescription: '',
        floatingWords: [],
        twoColorTitle: {
            textLeft: '', textRight: ''
        },
        button: { style: 'primary', label: '' }
    },
    teamCompanySection: {
        pageBreadcrum: {
            textLeft: 'Inicio',
            url: '#home',
            sectionName: 'Equipo'
        },
        headingText: '',
        subtitle: {
            leftText: '',
            rightText: '',
            centerText: ''
        },
        team: [],
        valuesTitle: {
            textLeft: '',
            textRight: ''
        },
        valuesDescription: '',
        valuesParagraphs: [],
        ctaSubtitle: '',
        ctaButton: {
            label: '',
            style: 'primary'
        },
        ctaTitle: {
            leftText: '',
            rightText: '',
            centerText: ''
        },
        ctaDescription: ''
    },
    caseStudiesSection: {
        headingText: '',
        cases: [],
        pageBreadcrum: {
            textLeft: '',
            url: '',
            sectionName: ''
        }
    },
    servicesSection: {
        headingTitle: '',
        pageBreadcrumb: { textLeft: '', url: '', sectionName: '' },
        
        ctaDescription: '',
        ctaButton: { label: '', style: 'primary' },
        
        subtitle: '',
        headingSubtitle: '',
        subtitleDescription: '',
        
        paragraphs: [],
        
        footNote: '',
        footNoteIconList: [],
        footNoteHeading: {
            leftText: '',
            rightText: '',
            centerText: ''
        },
        footNoteDescription: '',
        footNoteCta: {
            label: '',
            style: 'primary'
        }
    },
    blogSection: {
        headingTitle: "",
        pageBreadcrumb: { textLeft: '', url: '', sectionName: '' },
        noteTitle: "",
        noteDescription: "",
        noteSelfi: "",
        noteName: "",
        notePosition: "",
        searchInputPlaceholder: "",
        recentPostTitle: "",
        bulletListTitle: "",
        
        bullets: [],
        tagsTitle: "",
        tagList: [],
        
        newsletterTitle: "",
        emailInputPlaceholder: "",
        contactUsTitle: "",
        contactUsDescription: "",
        
        contactUsButton: {
            label: "",
            style: "primary"
        },
        entries: []
    },
    contactSection: {
        headingTitle: { textLeft: '', textRight: "" },
        nameInputLabel: "",
        emailInputLabel: "",
        phoneInputLabel: "",
        messageInputLabel: "",
        attachYouFileInputLabel: "",
        footNote1: "",
        footNote2: "",
        footNoteColored: "",
        requiredLabel: "",
        optionalLabel: "",
        filesizeLabel: "",
        contactButton: {
            label: "",
            style: "primary"
        }
        
    },
    footerSection: {
        orionBrief: "",
        joinTitle: {
            leftText: '', centerText: '', rightText: ''
        },
        joinDescription: "",
        emailInputPlaceholder: "",
        joinButton: {
            label: '',
            style: 'secondary'
            
        },
        socialList: [],
        termsconditionList: [],
       
        copyright: '',
        copyrightAuthor: '',
        playstoreButton: {
            label: '', storeName: '', url: ''
        },
        appstoreButton: {
            label: '', storeName: '', url: ''
        }
        
    }

}


export const PageDataReducer = (state: iPageData, action: ActionPageType) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                ...action.pageData
            }
       
        default: 
        return state;
    }

}

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
    metaImageUrl: string
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
}

export const PageDataDefault: iPageData = {
    title: '',
    description: '',
    slug: '',
    metaData: {
        metaDescription: '',
        metaImageUrl: '',
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
            textLeft: '',textRight: ''
        },
        button: { style: 'primary', label: ''}
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



interface FormLayoutPropsStyles {
    container?: object,
    title?: object,
    socialMedias?: object,
    divider?: object
}

interface FormLayoutPropsBottomTextLink {
    text: string,
    screen: 'login' | 'register'
}

interface FormLayoutPropsBottomText {
    text: string,
    link: FormLayoutPropsBottomTextLink
}

export default interface FormLayoutProps {
    title?: string,
    showSocialMedias?: boolean,
    bottomText?: FormLayoutPropsBottomText
    styles?: FormLayoutPropsStyles 
}
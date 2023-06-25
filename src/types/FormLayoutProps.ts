

interface FormLayoutPropsOptions {
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

export interface FormLayoutProps {
    title?: string,
    showSocialMedias?: boolean,
    bottomText: FormLayoutPropsBottomText
    options?: FormLayoutPropsOptions 
}
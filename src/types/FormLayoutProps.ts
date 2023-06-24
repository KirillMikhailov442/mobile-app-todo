
interface FormLayoutPropsOptions {
    container: object,
    title: object,
    socialMedias: object
}

type socialMedias = 'google' | 'apple'

export interface FormLayoutProps {
    title?: string,
    socialMedias?: socialMedias[],
    options?: FormLayoutPropsOptions 
}
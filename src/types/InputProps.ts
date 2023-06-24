
interface InputPropsPlaceholder {
    text: string,
    color?: string
}

interface InputPropsOptions {
    container?: object,
    label?: object,
    input?: object,
    inputText?: object,
    icon?: any
}

export interface InputProps {
    placeholder: InputPropsPlaceholder,
    label?: string,
    value?: string,
    setValue?: ()=> void,
    type?: "text" | "password",
    options?: InputPropsOptions

}
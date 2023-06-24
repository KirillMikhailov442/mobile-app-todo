
interface InputPropsOptions {
    container?: object,
    label?: object,
    input?: object,
    inputText?: object,
    icon?: any
}

export interface InputProps {
    placeholder: string,
    label?: string,
    value?: string,
    setValue?: ()=> void,
    type?: "text" | "password",
    options?: InputPropsOptions

}
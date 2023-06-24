
interface ButtonPropsOptions {
    button?: object,
    text?: object,
}

export interface ButtonProps {
    text: string,
    isActive?: boolean,
    callback?: ()=> void,
    options?: ButtonPropsOptions,
    icon?: JSX.Element
}

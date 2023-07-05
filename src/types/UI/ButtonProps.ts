
export interface ButtonPropsStyles {
    button?: object,
    text?: object,
}

export default interface ButtonProps {
    text?: string,
    isActive?: boolean,
    onPress?: ()=> void,
    styles?: ButtonPropsStyles,
    icon?: JSX.Element,
    positinIcon?: 'left' | "right"
}

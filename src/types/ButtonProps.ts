
interface ButtonPropsStyles {
    button?: object,
    text?: object,
}

export interface ButtonProps {
    text: string,
    isActive?: boolean,
    onPress?: ()=> void,
    styles?: ButtonPropsStyles,
    icon?: JSX.Element
}

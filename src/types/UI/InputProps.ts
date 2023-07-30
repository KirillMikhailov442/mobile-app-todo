
interface InputPropsPlaceholder {
    text: string,
    color?: string
}

interface InputPropsStyles {
    container?: object,
    label?: object,
    input?: object,
    inputText?: object,
    error?: object,
}

export default interface InputProps {
    placeholder: InputPropsPlaceholder,
    label?: string,
    value?: string,
    onChange?: ()=> void,
    onChangeText?: (text: string) => void,
    inputRef?: any,
    error?: string,
    security?: boolean,
    styles?: InputPropsStyles,
    icon?: JSX.Element,
    isMultiline?: boolean

}
interface PreferencePropsStyles {
    container?: object,
    text?: object,
    button?: object
}

export default interface PreferenceProps {
    icon?: JSX.Element,
    text: string,
    button?: JSX.Element,
    showButton?: boolean,
    onPress?: ()=> void,
    styles?: PreferencePropsStyles
}
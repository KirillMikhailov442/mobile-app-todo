interface MiniCardPropsStyles {
    container?: object,
    card?: object,
    cardText?: object,
    bottomLabel?: object
}


export default interface MiniCardProps {
    icon?: JSX.Element,
    cardText?: string | number,
    bottomLabel?: string,
    onPress?: ()=> void,
    styles?: MiniCardPropsStyles
}
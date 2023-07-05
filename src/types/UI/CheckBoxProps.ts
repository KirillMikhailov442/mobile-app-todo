interface CheckBoxPropsStyles {
    container?: object,
    checkbox?: object
}


export default interface CheckBoxProps{
    value: boolean,
    onChange?: ()=> void,
    styles?: CheckBoxPropsStyles
}
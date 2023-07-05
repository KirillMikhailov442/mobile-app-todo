
interface BoxListPropsStyles {
    container?: object
}

export default interface BoxListProps {
    styles?: BoxListPropsStyles,
    data: (string | number)[]
}
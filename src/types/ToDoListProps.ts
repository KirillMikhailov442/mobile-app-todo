import ToDoItemProps from "./ToDoItemProps"

interface ToDoListPropsStyles {
    container?: object
}

export default interface ToDoListProps {
    label?: string,
    data?: ToDoItemProps[],
    showList?: boolean,
    styles?: ToDoListPropsStyles
}
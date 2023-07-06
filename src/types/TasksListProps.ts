import TaskProps from "./TaskProps"

interface TasksListPropsStyles {
    container?: object
}

export default interface TasksListProps {
    label?: string,
    data?: TaskProps[],
    showList?: boolean,
    styles?: TasksListPropsStyles
}
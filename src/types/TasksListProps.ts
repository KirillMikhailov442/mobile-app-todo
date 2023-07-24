import TaskProps from "./ITask"

interface TasksListPropsStyles {
    container?: object
}

export default interface TasksListProps {
    label?: string,
    data?: TaskProps[],
    showList?: boolean,
    styles?: TasksListPropsStyles
}
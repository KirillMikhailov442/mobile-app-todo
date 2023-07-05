
interface ToDoItemPropsDetailes {
    date: string,
    category?: string,
    priority?: number
}

export default interface ToDoItemProps {
    check: boolean,
    text: string,
    details: ToDoItemPropsDetailes,
    completed: boolean
}
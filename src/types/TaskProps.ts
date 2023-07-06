
interface TaskPropsDetails {
    date: string,
    category?: string,
    priority?: number
}

export default interface TaskProps {
    check: boolean,
    text: string,
    details: TaskPropsDetails,
    completed: boolean
}

interface ITaskDetails {
    date: string,
    category?: string,
    priority?: number
}

export default interface ITask {
    check: boolean,
    text: string,
    details: ITaskDetails,
    completed: boolean
}

export interface ButtonProps{
    text: string,
    width?: number,
    background?: string,
    border?: string,
    color?: string,
    isActivated?: boolean,
    callback?: ()=> void 
}
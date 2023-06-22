import { StyleSheet } from "react-native";

export interface ButtonProps{
    text: string,
    width?: number,
    background?: string,
    border?: string,
    color?: string,
    isActivated?: boolean,
    callback?: ()=> void,
    style?: object
}
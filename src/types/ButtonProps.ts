import { StyleSheet } from "react-native";

export interface ButtonProps{
    text: string,
    width?: number,
    background?: string,
    border?: string,
    color?: string,
    isActive?: boolean,
    callback?: ()=> void,
    style?: object
}
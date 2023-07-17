import ButtonPropsStyles from "../UI/ButtonProps";
import LayoutProps from "./LayoutProps";

interface ModalLayoutPropsStyles {
    modal?: object,
    footer?: object,
    container?: object,
    header?: object,
    title?: object
}

interface ModalLayoutPropsButtonsItem extends ButtonPropsStyles {
    text?: string,
}

interface ModalLayoutPropsButttons {
    left?: ModalLayoutPropsButtonsItem,
    right: ModalLayoutPropsButtonsItem
}

export default interface ModalLayoutProps extends LayoutProps {
    styles?: ModalLayoutPropsStyles,
    buttons?: ModalLayoutPropsButttons,
    visibleModal?: boolean,
    title?: string,
    onPressButton?: ()=> void,
    onBackdropPress?: ()=> void
}
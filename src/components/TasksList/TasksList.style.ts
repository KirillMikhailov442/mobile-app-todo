import { StyleSheet } from "react-native";
import { buttonColors } from "../../constants/colors";

const TasksListStyles = StyleSheet.create({
    buttonLabel: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        height: 30,
        width: 'auto',
        marginRight: 'auto',
        backgroundColor: buttonColors.grayDefault,
        marginTop: 20
    },
    buttonLabelText: {
        fontSize: 12,
        marginRight: 10
    }
})

export default TasksListStyles
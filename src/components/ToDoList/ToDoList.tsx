import React, {useState} from "react";
import { FlatList, View } from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons'


import ToDoItem from "./ToDoItem/ToDoItem";
import { ToDoListProps } from "../../types";
import { Button } from "../UI";
import ToDoListStyles from "./ToDoList.style";
import { textColors } from "../../constants/colors";



const ToDoList: React.FC<ToDoListProps> = ({
    label,
    data,
    showList = true,
    styles
}) =>{


    const [showToDoList, setShowToDoList] = useState(showList)

    return(
        <View style={styles?.container}>
            {label && 
                <Button
                    text={label}
                    onPress={()=> setShowToDoList(prev => !prev)}
                    icon={<Icon name={showToDoList ? 'arrow-down' : 'arrow-up'} size={10} color={textColors.whiteDefault}/>}
                    positinIcon="right"
                    styles={{
                        button: ToDoListStyles.buttonLabel,
                        text: ToDoListStyles.buttonLabelText
                    }}/>}
            {showToDoList && 
                    data?.map((item, index) => 
                        <ToDoItem
                            key={index}
                            text={item.text}
                            check={item.check}
                            completed={item.completed}
                            details={item.details}/>)
                    }
        </View>
    )
}

export default ToDoList
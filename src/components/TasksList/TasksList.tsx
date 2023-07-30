import React, {useState} from 'react';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'


import Task from './Task/Task';
import { TasksListProps } from '../../types';
import { Button } from '../UI';
import TasksListStyles from './TasksList.style';
import { textColors } from '../../constants/colors';



const TaskList: React.FC<TasksListProps> = ({
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
                    positinIcon='right'
                    styles={{
                        button: TasksListStyles.buttonLabel,
                        text: TasksListStyles.buttonLabelText
                    }}/>}
            {showToDoList && 
                    data?.map((item, index) => 
                        <Task
                            key={index}
                            text={item.text}
                            check={item.check}
                            completed={item.completed}
                            details={item.details}/>)
                    }
        </View>
    )
}

export default TaskList
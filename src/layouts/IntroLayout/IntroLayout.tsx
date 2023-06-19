import {View, TouchableHighlight} from 'react-native'

interface IntroLayoutProps {
    children: JSX.Element
}


const IntroLayout = ({children}: IntroLayoutProps) =>{

    return(
        <View>
            <View>
                <TouchableHighlight>
                    SKIP
                </TouchableHighlight>
            </View>
            {children}

        </View>
    )
}

export default IntroLayout
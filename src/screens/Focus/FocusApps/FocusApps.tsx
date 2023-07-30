import React from 'react';
import { Text, View } from 'react-native';

import FocusAppsStyles from './FocusApps.style';
import FocusAppsItem from './FocusAppsItem/FocusAppsItem';

const FocusApps = () =>{
    return(
        <View style={FocusAppsStyles.container}>
            <Text style={FocusAppsStyles.title}>Applications</Text>
            <FocusAppsItem
                title='Instagram'
                subtitle='You spent 4h on Instagram today'
                imageUrl={require('../../../assets/images/socialMedia/instagram.png')}
                />

            <FocusAppsItem
                title='Twitter'
                subtitle='You spent 3h on Twitter today'
                imageUrl={require('../../../assets/images/socialMedia/twitter.png')}
                />
            
            <FocusAppsItem
                title='Facebook'
                subtitle='You spent 1h on Facebbok today'
                imageUrl={require('../../../assets/images/socialMedia/facebook.png')}
                />

            <FocusAppsItem
                title='Telegram'
                subtitle='You spent 30m on Telegram today'
                imageUrl={require('../../../assets/images/socialMedia/telegram.png')}
                />

            <FocusAppsItem
                title='Gmail'
                subtitle='You spent 45m on Gmail today'
                imageUrl={require('../../../assets/images/socialMedia/gmail.png')}
                />
        </View> 
    )
}

export default FocusApps
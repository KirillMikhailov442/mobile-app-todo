/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Text, View, StatusBar} from "react-native"
import { Provider } from 'react-redux';
import store from './store/store';
import { bgColors } from './constants/colors';
import AppStyles from './styles/App.style';


const App = () =>{
  return(
    <Provider store={store}>
      <StatusBar backgroundColor={bgColors.black}/>
      <View style={AppStyles.wrapper}>

      </View>
    </Provider>
  )
}

export default App;

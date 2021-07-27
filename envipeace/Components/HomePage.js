import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { styles as mystyles } from '../assets/styles'
import FastImage from 'react-native-fast-image'
import { BackHandler } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {ChoiceButton} from '../utils/choiceButton'

class HomePage extends React.PureComponent {
   
    nextScreen(){
        this.props.navigation.navigate('Menu');
    }
    render() {

        return (
            <View style={mystyles.Container}>
                <FastImage
                    style={mystyles.ImageBackground}
                    source={
                        require('../assets/homeScreen.jpg')
                    }
                    resizeMode={FastImage.resizeMode.stretch}
                />
                <View style={mystyles.choiceButtonContainer}>
                    <ChoiceButton text={'Let us play !'} color={'#8FDD3C'} onPress={()=>{this.nextScreen()}}  animation={"pulse"} iterationCount={2} border={20}/>
                    <ChoiceButton text={'Exit'} color={'#31C0F0'} onPress={()=>{BackHandler.exitApp()}} animation={"pulse"} iterationCount={2} border={20}/>
                 

                </View>



            </View>

        )
    }
}




export default HomePage
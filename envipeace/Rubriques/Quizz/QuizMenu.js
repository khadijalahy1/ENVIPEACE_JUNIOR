import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { styles as mystyles } from '../../assets/styles'
import FastImage from 'react-native-fast-image'
import {ChoiceButton} from '../../utils/choiceButton'
import {BackButton} from '../../utils/BackButton'
import {TrainingDesign} from '../../utils/TrainingDesign'


class QuizMenu extends React.PureComponent {
   
    nextScreen(){
        this.props.navigation.navigate('Menu');
    }
    render() {

        return (
        
        <View style={mystyles.Container}>
            
            <FastImage
            style={mystyles.ImageBackground}
            source={require('../../assets/earthspaceocean.jpg') }
            resizeMode={FastImage.resizeMode.stretch}
        />
        <BackButton onPress={()=>{this.props.navigation.navigate('Menu')}}/>
        
        <View style={mystyles.choiceButtonContainer}>
        
        <ChoiceButton text={'Land'} color={'#8FDD3C'} textColor={'black'}  onPress={()=>{this.props.navigation.navigate('LandQuiz')}} animation={'bounceInRight'} iterationCount={1} border={40} /> 
            <ChoiceButton text={'Ocean'} color={'#31C9F7'} textColor={'black'}  onPress={()=>{this.props.navigation.navigate('OceanQuiz')}} animation={'bounceInLeft'} iterationCount={1}  border={40}/>
            <ChoiceButton text={'Space'} color={'#FF8661'} textColor={'black'}  onPress={()=>{this.props.navigation.navigate('SpaceQuiz')}} animation={'bounceInRight'} iterationCount={1} border={40} />

        </View>
  
      

        </View>

        )
    }
}




export default QuizMenu
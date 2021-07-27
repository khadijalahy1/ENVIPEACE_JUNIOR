import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { styles as mystyles } from '../../assets/styles'
import FastImage from 'react-native-fast-image'
import {ChoiceButton} from '../../utils/choiceButton'
import {BackButton} from '../../utils/BackButton'
import {TrainingDesign} from '../../utils/TrainingDesign'


class TrainingMenu extends React.PureComponent {
   
    nextScreen(){
        this.props.navigation.navigate('Menu');
    }
    render() {

        return (
            <View style={mystyles.ContainerTraining}>
                 
                

                
                
                <TrainingDesign/>
                 <BackButton onPress={()=>this.props.navigation.navigate('Menu')}/>
                <View style={mystyles.choiceButtonContainer}>
                
                <ChoiceButton text={'SESSION  1'} color={'#FF8661'} textColor={'white'}  onPress={()=>{this.props.navigation.navigate('TrainingSession1')}} animation={'bounceInRight'} iterationCount={1} border={20}/>
                <ChoiceButton text={'SESSION  2'} color={'#FF8661'} textColor={'white'} onPress={()=>{this.props.navigation.navigate('TrainingS2')}} animation={'bounceInLeft'} iterationCount={1} border={20} />
                <ChoiceButton text={'SESSION  3'} color={'#FF8661'} textColor={'white'} onPress={()=>{this.props.navigation.navigate('TrainingS3')}} animation={'bounceInRight'} iterationCount={1} border={20} />

                
                    

                </View>
             



            </View>

        )
    }
}




export default TrainingMenu
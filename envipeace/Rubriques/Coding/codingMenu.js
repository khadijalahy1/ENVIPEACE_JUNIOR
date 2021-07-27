import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { styles as mystyles } from '../../assets/styles'
import FastImage from 'react-native-fast-image'
import {ChoiceButton} from '../../utils/choiceButton'
import {BackButton} from '../../utils/BackButton'



class CodingMenu extends React.PureComponent {
   
    nextScreen(){
        this.props.navigation.navigate('Menu');
    }
    render() {

        return (
            <View style={mystyles.ContainerTraining}>
                 
                

                
                
             
                <BackButton onPress={()=>this.props.navigation.navigate('Menu')}/>
                <Text style={mystyles.codeintroText} > Basics and {'\n'} Fundamentals</Text>
                <FastImage
                style={mystyles.herbe}
                source={
                    require('../../assets/herbe.png')
                }
                resizeMode={FastImage.resizeMode.stretch}
            />
             

                
                <View style={mystyles.choiceButtonContainer}>
                
                
                <ChoiceButton text={'Hello world'} color={'#FF8661'} textColor={'white'}  onPress={()=>{this.props.navigation.navigate('AnswerScreen',{level:0})}} animation={'bounceInRight'} iterationCount={1} border={20}/>
                <ChoiceButton text={'Integers'} color={'#FF8661'} textColor={'white'} onPress={()=>{this.props.navigation.navigate('AnswerScreen',{level:1})}} animation={'bounceInLeft'} iterationCount={1} border={20} />
                <ChoiceButton text={'Float'} color={'#FF8661'} textColor={'white'} onPress={()=>{this.props.navigation.navigate('AnswerScreen',{level:2})}} animation={'bounceInRight'} iterationCount={1} border={20} />
                <ChoiceButton text={'String'} color={'#FF8661'} textColor={'white'} onPress={()=>{this.props.navigation.navigate('AnswerScreen',{level:3})}} animation={'bounceInLeft'} iterationCount={1} border={20} />
              
                
                    

                </View>
              


            </View>

        )
    }
}




export default CodingMenu
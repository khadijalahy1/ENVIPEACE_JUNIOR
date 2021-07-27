import React from 'react'
import { Button, Text, TouchableOpacity,View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {BackButton} from '../utils/BackButton'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import {withNavigation}from 'react-navigation'
import * as Progress from 'react-native-progress';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

class QuizWelcome extends React.PureComponent {
   constructor(props) {
      super(props)
    
      let valueText=mystyles.choiceButtonText
      this.styleText=Object.assign({},valueText, {
         color: this.props.textColor
      })
      this.state={
         showLoading:this.props.showLoading,
    
      }
      let value = mystyles.quizScreen
      this.myStyle = Object.assign({}, value, {
            backgroundColor: this.props.backgroundColor
         })

     
   }

   render() {
      return (
         <View style={this.myStyle}>

         
         <View style={mystyles.welcomeContainer} >
         <FastImage
             style={mystyles.ImageBackgroundQuiz}
             source={this.props.image}
             resizeMode={FastImage.resizeMode.contain}
         />
         
         <Text style={mystyles.welcomeText}>{this.props.text}</Text>
         
        
        
         
       

         </View>
         {this.state.showLoading &&
          <View style={mystyles.loadingBarContainer}  >
          <Progress.Bar progress={0.4} width={300} height={15} animated={true} indeterminate={true} color={'gray'} unfilledColor={'white'}/>
          <Text style={mystyles.textLoading}>Be patient ...</Text>
         
          </View>

         }
         <BackButton onPress={()=>this.props.navigation.navigate(this.props.backTo)}/>
           
         </View>
      )
   }
}


// This enforces props type
QuizWelcome.propTypes = {
   backgroundColor:PropTypes.string,
   image:PropTypes.func,
   backTo:PropTypes.string,
   text:PropTypes.string,
   textColor:PropTypes.string,
   showLoading:PropTypes.bool,
 
   
 
}

export default withNavigation(QuizWelcome)
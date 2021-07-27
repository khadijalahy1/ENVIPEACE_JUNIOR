import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types'

export class ChoiceButton extends React.PureComponent {
   constructor(props) {
      super(props)
      let value = mystyles.choiceButton
      this.myStyle = Object.assign({}, value, {
            backgroundColor: this.props.color,
            borderRadius:this.props.border
         })
      let valueText=mystyles.choiceButtonText
      this.styleText=Object.assign({},valueText, {
         color: this.props.textColor
      })
     
   }

   render() {
      return (
         <Animatable.View
            animation={this.props.animation}
         
            iterationCount={this.props.iterationCount}
          
            style={this.myStyle}
         >
            <TouchableOpacity
               style={mystyles.wizardButtonTextContainer}
               onPress={this.props.onPress}
            >
               <Text style={this.styleText}>{this.props.text}</Text>
            </TouchableOpacity>
         </Animatable.View>
      )
   }
}

// This enforces props type
ChoiceButton.propTypes = {
   color: PropTypes.string,
   text: PropTypes.string,
   onPress: PropTypes.func,
   animation:PropTypes.string,
   iterationCount:PropTypes.number,
   textColor:PropTypes.string,
   border:PropTypes.number
 
}
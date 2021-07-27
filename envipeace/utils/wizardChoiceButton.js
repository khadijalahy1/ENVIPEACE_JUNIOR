import React from 'react'
import { Text, TouchableOpacity,StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types'

export class WizardChoiceButton extends React.PureComponent {
   constructor(props) {
      super(props)
      
        
     
      
   }
   

   render() {
      let value = mystyles.wizardButton
      this.myStyle = Object.assign({}, value, {
         backgroundColor: this.props.color,
      })
      return (
         <Animatable.View
            animation="tada"
            iterationCount={2}
            iterationDelay={50}
            style={this.myStyle}
         >
            <TouchableOpacity
               style={mystyles.wizardButtonTextContainer}
               onPress={this.props.onPress}
            >
               
               <Text style={mystyles.choiceButtonText}>{this.props.text}</Text>
            </TouchableOpacity>
         </Animatable.View>
      )
   }
}




// This enforces props type
WizardChoiceButton.propTypes = {
   color: PropTypes.string,
   text: PropTypes.string,
   onPress: PropTypes.func,
}

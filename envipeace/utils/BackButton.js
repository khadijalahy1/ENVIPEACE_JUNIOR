import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { styles as mystyles } from '../assets/styles'
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import { RFPercentage } from "react-native-responsive-fontsize";


export class BackButton extends React.PureComponent {
 

   render() {
      return (
         <Animatable.View
            animation={'tada'}
         
            iterationCount={2}
          
            style={mystyles.BackButton}
         >
          
              <Icon name="arrowleft" size={RFPercentage(6)} color={'black'} color={this.props.color} onPress={this.props.onPress} />
            
         </Animatable.View>
      )
   }
}

// This enforces props type
BackButton.propTypes = {
   color: PropTypes.string,
   
   onPress: PropTypes.func
  
 
}
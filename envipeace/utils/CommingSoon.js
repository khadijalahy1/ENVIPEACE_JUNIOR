import React , { useCallback } from 'react'
import { View,Text,Button, TouchableOpacity ,Linking} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import {withNavigation}from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {BackButton} from './BackButton'
import {RFPercentage} from 'react-native-responsive-fontsize'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const supportedURL = "https://envipeace-junior2020.netlify.app/";
const OpenURLButton = ({ style,url,txt,styleButton }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return(
        <TouchableOpacity style={styleButton} onPress={handlePress}>
            <Text style={style}> Comming Soon ... Swipe up to Learn more about Us </Text>
            
     
        </TouchableOpacity>

    ) 
    
    
  };
const handlePress = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }
  




class CommingSoon extends React.PureComponent {
   constructor(props) {
      super(props)
      let value = mystyles.CommingSoonContainer
      this.myStyle = Object.assign({}, value, {
            backgroundColor: this.props.color,
         })
         let valueText=mystyles.choiceButtonText
         this.styleText=Object.assign({},valueText, {
            color: this.props.textColor
         })
     
   }


   render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
      return (
        <GestureRecognizer
      
      onSwipeUp={() => handlePress(supportedURL)}
      
      config={config}
      style={mystyles.Container
        }
      >
       
                 
                

                 <FastImage
                     style={mystyles.ImageBackground}
                     source={this.props.sourceImage }
                     resizeMode={FastImage.resizeMode.stretch}
                 />
                 <BackButton onPress={()=>this.props.navigation.navigate(this.props.backToScreen)}/>
             
                    
                  <OpenURLButton style={this.styleText} url={supportedURL} txt={this.props.text} styleButton={this.myStyle}/>
              
         
                
         
                
         
         
         
         
            

      </GestureRecognizer>
        
      )
   }
}

CommingSoon.propTypes = {

   
   backToScreen:PropTypes.string,
   text:PropTypes.string,
   color:PropTypes.string,
   sourceImage:PropTypes.func,
   textColor:PropTypes.string

 
}
export default withNavigation(CommingSoon)
import * as React from 'react';
import { Alert, StatusBar, View, StyleSheet,Text } from 'react-native';
import TextAnimator from './TextAnimator';
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import {withNavigation}from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {BackButton} from './BackButton'
import {RFPercentage} from 'react-native-responsive-fontsize'

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


class SectionIntro extends React.Component {
    constructor(props) {
       super(props)
      
      
    }
    _onFinish=()=>{
        sleep(1000);

        this.props.navigation.navigate(this.props.nextScreen);
        
        

    }
 
 
    render() {
        return (
            <View style={mystyles.Container}>
                
        <FastImage
            style={mystyles.ImageBackground}
            source={this.props.sourceImage }
            resizeMode={FastImage.resizeMode.stretch}
        />
        <BackButton color='white' onPress={()=>{this.props.navigation.navigate('Menu')}}/>
                <View style={styles.container}>
             <Text>
               {this.props.text}
             </Text>
            </View>




            </View>
            
          );
    }
 }
 
 SectionIntro.propTypes = {
 
    nextScreen:PropTypes.string,
    sourceImage:PropTypes.func,
    text:PropTypes.string,
    backToScreen:PropTypes.string
  
 
  
 }
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 4,
      backgroundColor: 'transparent',
      padding: 8
    },
    containerStyle: {},
    textStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: 'Menlo',
      marginBottom: 14
    }
  });
 export default withNavigation(SectionIntro)



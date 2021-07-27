import * as React from 'react';
import {View } from 'react-native';

import { styles as mystyles } from '../assets/styles'

import FastImage from 'react-native-fast-image'



export class TrainingDesign extends React.PureComponent {
    constructor(props) {
       super(props)
      
      
    }
    render(){
        return(
            <View style={mystyles.modelTraining}>
                

            <FastImage
                style={mystyles.bird1Gif}
                source={
                    require('../assets/bird.gif')
                }
                resizeMode={FastImage.resizeMode.stretch}
            />
            <FastImage
                style={mystyles.Sun}
                source={
                    require('../assets/sun.png')
                }
                resizeMode={FastImage.resizeMode.stretch}
            />
             <FastImage
                style={mystyles.bird2Gif}
                source={
                    require('../assets/bird.gif')
                }
                resizeMode={FastImage.resizeMode.stretch}
            />
            
               <FastImage
                style={mystyles.bird3Gif}
                source={
                    require('../assets/bird.gif')
                }
                resizeMode={FastImage.resizeMode.stretch}
            />
               <FastImage
                style={mystyles.herbe}
                source={
                    require('../assets/herbe.png')
                }
                resizeMode={FastImage.resizeMode.stretch}
            />
               

            </View>
        )
    }
   
   
 }
 
 



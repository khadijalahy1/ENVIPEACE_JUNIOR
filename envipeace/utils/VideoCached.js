import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types';
import { RFPercentage } from "react-native-responsive-fontsize";

import Video from 'react-native-video';
import {withNavigation}from 'react-navigation'
import { ImageCacheManager } from "react-native-cached-image";






class VideoCached extends React.PureComponent {

    constructor(props){
      super(props);}
     
    componentDidMount() {
        ImageCacheManager({})
       .downloadAndCacheUrl('http://35.234.118.251/assets/demo.mp4')
       .then(res => {
         this.setState({ cachedVideoURI: res, loaded: true });
        })
       .catch(err => {
       });}
    
  
   
    render() {
      return (
        <TouchableOpacity style={mystyles.Container} onPress={()=>{this.on_Touch()}}>
            <Video
            source={{uri: this.state.cachedVideoURI}}   // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={mystyles.LaunchVideo}
            fullscreen={true}
            controls={false}
            resizeMode="stretch"
           
            
            
          />
         
         

         
          
          
  
        </TouchableOpacity>
        
        
  
       
  
  
  
      )
    }
  }
export default VideoCached
  



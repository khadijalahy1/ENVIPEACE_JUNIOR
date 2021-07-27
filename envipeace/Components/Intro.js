//Accueil.js

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native'
import Video from 'react-native-video';
import { styles as mystyles } from '../assets/styles'

class Intro extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={pause:false};
  }
  go_nextScreen(){
    this.props.navigation.navigate('HomePage');
    this.setState({pause:true});
   
  }
  render() {
    return (
      <TouchableOpacity style={mystyles.Container} onPress={()=>{this.go_nextScreen()}}>
          <Video
          source={require('../assets/introNew.mp4')}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}                                      // Store reference
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={this.videoError}               // Callback when video cannot be loaded
          style={mystyles.LaunchVideo}
          fullscreen={true}
          controls={false}
          resizeMode="stretch"
          onEnd={()=>{this.go_nextScreen()}}
          paused={this.state.pause} 
          
        />
        
        

      </TouchableOpacity>
      
      

     



    )
  }
}




export default Intro

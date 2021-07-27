import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles as mystyles } from '../assets/styles'
import * as RNFS from 'react-native-fs';
import PropTypes from 'prop-types';
import { RFPercentage } from "react-native-responsive-fontsize";
import Video from 'react-native-video';
import { withNavigation } from 'react-navigation'
import AwesomeButton from "react-native-really-awesome-button";
import { BackButton } from './BackButton';
import * as Progress from 'react-native-progress';
import FastImage from 'react-native-fast-image'






class VideoComponent extends React.PureComponent {
  textLoading=["Be patient...","Ready ?","three,two,one...","Let's go"];

  constructor(props) {
    
    super(props);
    this.state = { pause: false, pauseControleEnabled: this.props.pauseControleEnabled, showSkipButton:this.props.showSkipButton, videoReady: false,shomAnime:this.props.shomAnime,currentLoadingTextId:0};
  
  }

  

  async componentDidMount() {
    //check if the video exist and display it 

    if (await RNFS.exists(RNFS.DocumentDirectoryPath + '/' + this.props.videoName + '.mp4')) {
      console.log("yaaaay ila rid :)");
      this.setState({ videoReady: true });

    }
    else {
      console.log("ohoy orridila");
      this.dowloadFile();


    }


  }
  backButtonPressed() {
    this.setState({ pause: true })
    this.props.navigation.navigate(this.props.backToScreen);

  }
  dowloadFile() {
    //Define path to store file along with the extension

    RNFS.downloadFile({
      fromUrl: this.props.url,
      toFile: RNFS.DocumentDirectoryPath + '/' + this.props.videoName + '.mp4',
      background: true
    })
      .promise.then(res => {
        console.log("File Downloaded", res);
        this.setState({ displayVideo: true });
        this.setState({ videoReady: true });
      })
      .catch(err => {
        console.log("err downloadFile", err);
      });
  }


  go_nextScreen() {
    this.props.navigation.navigate(this.props.nextScreen);
    this.setState({ pause: true });

  }
  on_Touch() {
    if (this.state.pauseControleEnabled) {
      if (this.state.pause) {
        this.setState({ pause: false })


      }
      else {
        this.setState({ pause: true })

      }
    }

  }


  render() {
    setTimeout(() => {if(this.state.currentLoadingTextId<3){id=this.state.currentLoadingTextId+1;this.setState({currentLoadingTextId:id})}
  }, 1000)
    if (this.state.videoReady) {
      return (
        <TouchableOpacity style={mystyles.Container} onPress={() => { this.on_Touch() }}>
          <Video
            source={{ uri: RNFS.DocumentDirectoryPath + '/' + this.props.videoName + '.mp4' }}   // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={mystyles.LaunchVideo}
            fullscreen={true}
            controls={false}
            resizeMode="stretch"
            onEnd={() => { this.props.onSkip() }}
            paused={this.state.pause}

          />
          {this.state.showSkipButton &&
            <TouchableOpacity style={{ backgroundColor: 'white', position: 'absolute', bottom: '2%', width: '40%', height: '5%', borderRadius: 40, left: '2%', justifyContent: 'center', alignItems: 'center' }} onPress={() => { this.props.onSkip() }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
                Skip
              </Text>
            </TouchableOpacity>

          }

          <BackButton onPress={() => { this.backButtonPressed() }} />



        </TouchableOpacity>


      )

    }
    //loading Screen
    else {
      return (
        <View style={mystyles.Container}>


          <FastImage
            style={mystyles.ImageBackground}
            source={this.props.sourceImage}
            resizeMode={FastImage.resizeMode.stretch}
          />
          <View style={mystyles.Container}>
            
            <View style={{width:'100%',height:'50%',position:'absolute',bottom:'30%',justifyContent:'flex-start',alignItems:'center',padding:'10%'}}>
              <Text style={{textAlign:'center',fontSize:RFPercentage(5),fontWeight:'bold'}}>
                {this.props.textLoading}

              </Text>
            


            </View>
         
               

            
           
            <View style={{width:'100%',height:'27%',position:'absolute',bottom:0,justifyContent:'flex-start',alignItems:'center'}}>
            <View >
              <Progress.Bar progress={0.4} width={300} height={15} animated={true} indeterminate={true} color={'gray'} unfilledColor={'white'} />
              <Text style={mystyles.textLoading}>{this.textLoading[this.state.currentLoadingTextId]}</Text>

            </View>

            </View>

            <BackButton onPress={() => { this.props.navigation.navigate(this.props.backToScreen) }} />

          </View>




        </View>
      )
    }

  }
}
export default withNavigation(VideoComponent)


// This enforces props type
VideoComponent.propTypes = {

  source: PropTypes.string,
  nextScreen: PropTypes.string,
  pauseControleEnabled: PropTypes.bool,
  showSkipButton: PropTypes.bool,
  skipButtonColor: PropTypes.string,
  url: PropTypes.string,
  videoName: PropTypes.string,
  onSkip: PropTypes.func,
  backToScreen: PropTypes.string,
  sourceImage: PropTypes.func,
  textLoading: PropTypes.string,
  shomAnime:PropTypes.bool

}
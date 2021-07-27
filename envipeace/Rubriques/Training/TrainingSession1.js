import React from 'react'
import {View} from 'react-native'
import VideoComponent from '../../utils/VideoComponent'
import { styles as mystyles } from '../../assets/styles'
import {BackButton}from '../../utils/BackButton'
import { TrainingDesign } from '../../utils/TrainingDesign'





 class TrainingSession1 extends React.Component {
    
    render() {
      return (
        <View style={mystyles.ContainerTraining}  >
          <TrainingDesign/>
          <VideoComponent  pauseControleEnabled={true} showSkipButton={true} url={"https://firebasestorage.googleapis.com/v0/b/speedlearning-fbd64.appspot.com/o/coding%2FTrainin.mp4?alt=media&token=ec5bf359-28b1-4d95-9513-fbefad89f60b"}  videoName={"intro"} showSkipButton={false} textLoading='welcome to your training journey!' onSkip={()=>{this.props.navigation.navigate('TrainingMenu')}}/>
          <BackButton onPress={()=>{this.props.navigation.navigate('TrainingMenu')}}/>

       

        </View>

                

       
  
            
        
          
      )
    }
  }
  export default TrainingSession1

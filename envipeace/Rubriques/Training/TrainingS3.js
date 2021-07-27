import React from 'react'
import {View} from 'react-native'
import CommingSoon from '../../utils/CommingSoon'
import {TrainingDesign} from '../../utils/TrainingDesign'
import { styles as mystyles } from '../../assets/styles'




class TrainingS3 extends React.PureComponent {

  render() {

      return (
          <View style={mystyles.ContainerTraining}>
            <TrainingDesign/>
            <CommingSoon  backToScreen='TrainingMenu' textColor='#FF8661' text='Session 3' />

             
              
             
           



          </View>

      )
  }
}




export default TrainingS3
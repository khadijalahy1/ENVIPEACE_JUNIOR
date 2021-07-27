import React from 'react'
import {View} from 'react-native'
import QuizWelcome from '../../../utils/QuizzWelcome'
import { styles as mystyles } from '../../assets/styles'




class WlcmLand extends React.PureComponent {

  render() {

      return (
         <QuizWelcome  backgroundColor='#8FDD3C' image={require('../../../assets/earthQuizz.png')} backTo='QuizMenu' text={'Welcome to \n Land'} showLoading={false}/>

      )
  }
}




export default WlcmLand
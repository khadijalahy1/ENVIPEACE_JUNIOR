import React from 'react'
import QuizWelcome from '../../../utils/QuizzWelcome'





class WlcmSpace extends React.PureComponent {

  render() {

      return (
         <QuizWelcome  backgroundColor='#FF8661' image={require('../../../assets/space.png')} backTo='QuizMenu' text={'Welcome to \n Space'} showLoading={false}/>

      )
  }
}




export default WlcmSpace
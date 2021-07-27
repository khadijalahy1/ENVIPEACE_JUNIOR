import React from 'react'
import QuizWelcome from '../../../utils/QuizzWelcome'





class WlcmOcean extends React.PureComponent {

  render() {

      return (
         <QuizWelcome  backgroundColor='#31C9F7' image={require('../../../assets/ocean.png')} backTo='QuizMenu' text={'Welcome to \n Ocean'} showLoading={false}/>

      )
  }
}




export default WlcmOcean
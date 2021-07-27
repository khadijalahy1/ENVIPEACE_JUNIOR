import React from 'react'
import QuizScreen from '../../../utils/quizScreen'
import WlcmOcean from'./wlcmOcean'




export default class LandQuiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     component : <WlcmOcean/>
    }
   }
   componentDidMount(){

    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
         // Add your logic for the transition
         this.setState({ component: <QuizScreen rubric='oceanQuiz'/> })
    }, 1000);
}

  render(){
    return(
      this.state.component
    
    )
  }
 

}
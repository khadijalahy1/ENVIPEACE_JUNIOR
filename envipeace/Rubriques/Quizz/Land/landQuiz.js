import React from 'react'
import QuizScreen from '../../../utils/quizScreen'
import WlcmLand from'./wlcmLand'




export default class LandQuiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     component : <WlcmLand/>
    }
   }
   componentDidMount(){

    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
         // Add your logic for the transition
         this.setState({ component: <QuizScreen rubric='earthQuiz'/> })
    }, 1000);
}

  render(){
    return(
      this.state.component
    
    )
  }
 

}

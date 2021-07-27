import React from 'react'
import QuizScreen from '../../../utils/quizScreen'
import WlcmSpace from'./wlcmSpace'




export default class SpaceQuiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     component : <WlcmSpace/>
    }
   }
   componentDidMount(){

    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
         // Add your logic for the transition
         this.setState({ component: <QuizScreen rubric='spaceQuiz'/> })
    }, 1000);
}

  render(){
    return(
      this.state.component
    
    )
  }
 

}
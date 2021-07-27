import React from 'react'
import { View, Text, Modal,Pressable } from 'react-native'
import CodingOutputScreenTemplate from '../../utils/codingOutputScreenTemplate'
import CodingLessonTemplate from '../../utils/codingLessonTemplate'
import { styles as mystyles } from '../../assets/styles'
import VideoComponent from '../../utils/VideoComponent'
import {BackButton} from '../../utils/BackButton'






class AnswerScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = true;
    this.error = "la valeur li3titlih flwl";






    this.state = {
      displayResult: false,
      answer: '',
      currentLevel: this.props.navigation.state.params.level,
      displayPopup: false,
      displayVideo:true


    }
    this.currentLevelString =(this.state.currentLevel+1).toString();




    console.log(this.currentLevel);
    this.LevelString = "Level" + this.currentLevelString;


  }
  L1_function = (answer) => {
    if (answer ==null || answer=='') {
      this.state = false;
      this.error = 'Please write a valid answer';
      console.log('Normally Ralat');


    }
    else {
      this.state = true;
      console.log('hadakxi li ktbti shih');
      this.setState({ answer: answer,displayResult:true });

    }

  }
  L2_function = (answer) => {
    
    if (!Number.isInteger(Number(answer))) {
      this.state = false;
      this.error = 'the input should be an integer (a natural number)'


    }
    else {
      this.state = true;
      this.setState({ answer: answer,displayResult:true });

    }

  }
  L3_function = (answer) => {
    if (Number.isFinite(Number(answer)) ) {
      this.state = true;
      this.setState({ answer: answer,displayResult:true });


    }
    else {
      this.state = false;
      this.error = ' the input should be a float'

    }

  }
  L4_function = (answer) => {
    console.log("halwl",answer.charAt(0));
    console.log("halkhr",answer.slice(-1));

    
    if ((answer.charAt(0)=="'"&&answer.slice(-1)=="'")||(answer.charAt(0)==='"'&&answer.slice(-1)=='"')) {
   
      this.state = true;
      console.log(answer.substr)
      
      this.setState({ answer:answer.substr(1,answer.length-2) ,displayResult:true });
      



    }
    else {
      this.state = false;
      this.error = ' the input should be a string probably you have forgotten to put your string between " " '
      

    }

  }







  _goToOutput = (childData) => {
    this.setState({answer:childData});
    this.Levels[this.state.currentLevel].checkFunction(childData);
    if (this.state===false){
      this.setState({displayPopup:true})

    }
   
   

    



  }
  _goNextLevel = () => {
    if (this.state.currentLevel < 3) {
      this.setState({
        displayResult: false,
        currentLevel: this.state.currentLevel + 1,
        displayVideo:true
      }

      )


    }
    else {
      this.props.navigation.navigate('CodingMenu')
    }

    console.log("dkhlt lfunction go_nextLevel");








  }
  Levels = [{
    link: "https://firebasestorage.googleapis.com/v0/b/speedlearning-fbd64.appspot.com/o/coding%2Fprint%20(online-video-cutter.com).mp4?alt=media&token=5bd7ccb9-6e49-42d6-86a9-67e44b5e1bfc",
    videoName:'Levl00',
    lesson: { title: 'Hello World', lessonText: 'Use the "print" function to print the line "Hey, <your name>, let’s protect our mother nature !"', imagebackground: require('../../assets/greencod.jpg'), keyword: 'print', beforeInput: '("Hey', afterInput: ', let us protect our mother nature !"' },
    output: { backgroundColor: "#79C02D", textBeforeInput: "Hey ", textAfterInput: " let us protect our mother nature!" },
    checkFunction: this.L1_function
  },

  {
    link: "https://firebasestorage.googleapis.com/v0/b/speedlearning-fbd64.appspot.com/o/coding%2Fint%20(online-video-cutter.com).mp4?alt=media&token=b8ad5de0-ab84-476a-a945-b9f8929e218f",
    videoName:'Lev1',
    lesson: { title: 'Integer', lessonText: "Use the type int to write the given quantities (natural numbers).", imagebackground: require('../../assets/bluecod.jpg'), keyword: 'myint=', beforeInput: ' ', afterInput: 'print("Our solar system is made up of", myint,"planets")' },
    output: { backgroundColor: "#31C9F7", textBeforeInput: "Our solar system is made up of ", textAfterInput: " planets" },
    checkFunction: this.L2_function
  },
  {
    link: "https://firebasestorage.googleapis.com/v0/b/speedlearning-fbd64.appspot.com/o/coding%2Ffloat%20(online-video-cutter.com).mp4?alt=media&token=99d364aa-b9e4-4801-9906-f74a9be2ae85",
    videoName:'Lev223',
    lesson: { title: 'Floats', lessonText: 'Use the type "float" to write the given quantities (all type of numbers)."', imagebackground: require('../../assets/greencod.jpg'), keyword: 'myfloat=', beforeInput: ' ', afterInput: 'print(myfloat)' },
    output: { backgroundColor: "#79C02D", textBeforeInput: " ", textAfterInput: " " },
    checkFunction: this.L3_function
  },
  {
    link: "https://firebasestorage.googleapis.com/v0/b/speedlearning-fbd64.appspot.com/o/coding%2Fstringf.mp4?alt=media&token=32c72cf6-3547-4b2b-a169-f6d1e13c66e1",
    videoName:'Lev33345',
    lesson: { title: 'Strings', lessonText: 'Use ‘string’ type to store a sequence of characters (in our case name a wild animal)', imagebackground: require('../../assets/bluecod.jpg'), keyword: 'mystring=', beforeInput: '', afterInput: "print(mystring ,'is a wild animal')" },
    output: { backgroundColor: "#31C9F7", textBeforeInput: "", textAfterInput: " is a wild animal" },
    checkFunction: this.L4_function
  }


  ]






  render() {
    this.outputText = this.Levels[this.state.currentLevel].output.textBeforeInput + this.state.answer + this.Levels[this.state.currentLevel].output.textAfterInput;
    console.log(this.state.displayResult);
    if(this.state.displayVideo==true){
      return(
        <View style={mystyles.Container}  >
         
        
        <VideoComponent  pauseControleEnabled={true} showSkipButton={true} url={this.Levels[this.state.currentLevel].link}  videoName={this.Levels[this.state.currentLevel].videoName} onSkip={()=>{this.setState({displayVideo:false})}  }   backToScreen={'CodingMenu'} sourceImage={this.Levels[this.state.currentLevel].lesson.imagebackground} textLoading={'Are you excited to start your journey as a young programmer ?'} showAnime={true}/>
        
     

      </View>
        
      )
    }
    else{
      if (this.state.displayResult == false) {
        return (
  
          <View style={mystyles.Container}>
           
            <CodingLessonTemplate
  
              sourceImage={this.Levels[this.state.currentLevel].lesson.imagebackground}
              titleText={this.Levels[this.state.currentLevel].lesson.title}
              lessonText={this.Levels[this.state.currentLevel].lesson.lessonText}
              textBeforeInput={this.Levels[this.state.currentLevel].lesson.beforeInput}
              textAfterInput={this.Levels[this.state.currentLevel].lesson.afterInput}
              parentCallback={this._goToOutput}
              keyword1={this.Levels[this.state.currentLevel].lesson.keyword}
              currentLevel={this.LevelString}
            />
           
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.displayPopup}
               
              >
                <View style={mystyles.centeredView}>
                  <View style={mystyles.modalView}>
                    <Text style={mystyles.modalText}>{this.error}</Text>
                    <Pressable
                      style={[mystyles.button, mystyles.buttonClose]}
                      onPress={() => this.setState({displayPopup:false})}
                    >
                      <Text style={mystyles.textStyle}>Retry</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            
          
  
          </View>
  
  
  
        )
      }
      else {
        return (
          <View style={mystyles.Container}>
            <CodingOutputScreenTemplate
              outputText={this.outputText}
              backgroundColor={this.Levels[this.state.currentLevel].output.backgroundColor}
              gonextLevel={this._goNextLevel}
  
            />
  
  
          </View>
        )
      }

    }
   

  }
}
export default AnswerScreen

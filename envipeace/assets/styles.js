import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    //LaunchVideo
    Container: {
        flex: 1,
        marginTop: 0,
        backgroundColor:'transparent'

    },
    LaunchVideo: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        marginTop: 0,


    },
    ImageBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        marginTop: 0

    },
    //homePage
    choiceButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: '30%'


    },
    choiceButton: {
        backgroundColor: "#9EEF79",
        height: '10%',
        width: '80%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30



    },
    choiceButtonText: {
        color: 'white',
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        textAlign:'center'




    },
    //WizardScreens
    choiceImageContainer: {
        width: '100%',
        height: '70%',
        position: 'absolute',
        bottom: '1%'
    }
    ,
    choiceImage: {
        flex: 1




    },
    wizardButton: {
        width: '85%',
        height: '15%',
        borderRadius: 10,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '10%'
    },
    wizardButtonTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 30,
     },

    wizardButtonTraining: {
        width: '85%',
        height: '15%',
        borderRadius: 10,
        backgroundColor: '#FF8661',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '10%'
    },
    wizardButtonQuiz: {
        width: '85%',
        height: '15%',
        borderRadius: 10,
        backgroundColor: '#9EEF79',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '10%'

    },
    wizardButtonCode: {
        width: '85%',
        height: '15%',
        borderRadius: 10,
        backgroundColor: '#96C5FD',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: '10%'
    },


    wizardContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',




    },
    wizardMainView:{
        flex: 1,
         backgroundColor: '#FBFBFB',
          flexDirection: 'column'
    },
    wizardButtonPrevious:{
        flex: 1, justifyContent: "center", alignItems: "flex-start",marginLeft:'2%',marginTop:'1%'

    },
    wizardButtonNext:{
        flex: 1, justifyContent: "center", alignItems: "flex-end",marginRight:'2%',marginBottom:'2%'

    },
    switchAndWizzardContainer:{
        flex: 20, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'
    },
    wizard1:{
        flex: 8, flexDirection: "row", paddingBottom: 0
    },
    wizard:{
        flex:2
    },
    switchContainer:{
        flex: 2, flexDirection: "row", marginTop: 0, alignItems: "center"
    },
    BackButton:{
       
            position: 'absolute',
            backgroundColor: 'transparent',
            top: '2%',
            left: '2%',
            width: '20%',
            height: '5%',
            alignItems:'flex-start',
            justifyContent:'center'
        
    },
    skipButton:{
       
        position: 'absolute',
        backgroundColor: 'transparent',
        top: '3%',
        right: '2%',
        width: '50%',
        height: '5%',
        alignItems:'flex-end',
        justifyContent:'center'
    
},
CommingSoonContainer:{
    position:'absolute',
    top:'40%',
    right:'10%',
    width:'80%',
    height:'15%',
    borderRadius:20,
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center'


    

},
ContainerTraining:{
    flex:1,
    backgroundColor:'#fafafa',
   
},
bird1Gif:{
    width: '80%',
        height: '40%',
     
        marginTop: '5%',
        position:'absolute'

},
bird2Gif:{
    width: '80%',
    height: '40%',
 
    bottom: '0%',
    position:'absolute'

},
bird3Gif:{
    width: '80%',
    height: '40%',
 
    bottom: '30%',
    position:'absolute'

},
Sun:{
    top:'0%',
    right:'0%',
    width: '40%',
    height: '40%',
    position:'absolute'

},
herbe:{
    top:'80%',
   
    width:'100%',
    height:'20%',
    marginBottom:0
},
modelTraining:{
    width:'100%',
    height:'100%',
    position:'absolute',
    alignItems:'center'
},
//QuizPart
ImageBackgroundQuiz: {
    width: '100%',
    height: '100%',
    position:'absolute',
    top:'13%'
    
 
   

},
quizScreen:{
    flex:1,
    backgroundColor:'green' ,
     flexDirection:'column'
},
welcomeContainer:{
    flex:3,alignItems:'center',paddingTop:'20%',paddingRight:'2%',paddingLeft:'2%'
}
,
welcomeText:{
    fontSize:RFPercentage(6.5),color:'white',fontWeight:'bold',fontFamily:'Revalia',textAlign:'center'
},
loadingBarContainer:{
    flex:0.5 ,alignItems:'center',justifyContent:'center'
},
textLoading:{
    fontSize:RFPercentage(3),color:'white',textAlign:'center'
},
questionPicture:{
    width: '100%',
    height: '35%',
    position:'absolute',
    bottom:'0%'
},
questionIdContainer:{
     flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start', paddingLeft: '5%' 
    
},
questionContainer:{
     flex: 1.5, justifyContent: 'center', alignItems: 'center', paddingLeft: '5%', paddingTop: '0%',paddingRight: '5%'
},
questionIdText:{ fontSize: RFPercentage(4), fontWeight:'bold',color: 'white' },
questionText:{ fontSize:  RFPercentage(3),fontWeight:'bold', color: 'black', textAlign: 'center' },
answersContainer:{ flex: 5, justifyContent: 'flex-start', alignItems: 'center' },
answerOptionContainer:{ width: '70%', height: '10%', backgroundColor: 'white', borderRadius: 20, marginBottom: '5%', justifyContent: 'center', alignItems: 'center' },
answerText:{ fontSize: RFPercentage(3), color: 'black', textAlign: 'center',fontWeight:'500' },
quizButton:{width:'80%',height:'10%',borderRadius:20,backgroundColor:'white',position:'absolute',bottom:'8%',alignItems:'center',justifyContent:'center',right:'10%'},
leaderBoardContainer:{flex:1},
//CodingPart
codingLessonTitleContainer:{
    flex:2,justifyContent:'flex-end',alignItems:'center'
},
codingTitleText:{
    fontSize:RFPercentage(4),fontWeight:'bold',textAlign:'auto'
},
codingLessonContainer:{
    flex:4,justifyContent:'center',alignContent:'center',margin:'5%',marginBottom:0,marginTop:'1%',borderRadius:20,backgroundColor:'#FAFAFA'
},
codingLessonText:{
    fontSize:RFPercentage(3.5),textAlign:'center'
},
inputContainer:{
    flex:1,justifyContent:'flex-start',alignItems:'flex-start',marginLeft:'5%',marginTop:0

},
inputText:{
    fontSize:RFPercentage(3),fontWeight:'bold',textAlign:'center',textDecorationLine:'underline'
},
codingTaskContainer:{
    flex:3,flexDirection:'column',justifyContent:'center',alignContent:'center',margin:'5%',marginTop:0,borderRadius:20,backgroundColor:'#FFFFFF80'
},
sameLineContainer:{
    flex:0.5,justifyContent:'center',alignItems:'center',flexDirection:'row'

},
taskText:{
    fontSize:RFPercentage(3),fontWeight:'bold',textAlign:'center'

},
keyWordText:{
    fontSize:RFPercentage(3),color:'#FF8661',fontWeight:'bold',textAlign:'auto'
},
runbuttonContainer:{
    flex:2,
    justifyContent:'flex-start',
    alignItems:'flex-end',
    marginRight:'2%',

},
runButton:{
    width:'30%',
    height:'40%',
    borderRadius:20,
    backgroundColor:'#FAFAFA',
    justifyContent:'center',
    alignItems:'center'
},
runButtonText:{
    fontSize:RFPercentage(3),textAlign:'center'


},
//OutputScreen Styles
resultScreenContainer: {
    flex: 1,
    marginTop: 0,
    backgroundColor:'transparent'

},
levelContainer:{
    flex:1,
    marginTop:'10%',
    marginLeft:'5%',
    justifyContent:'flex-end',
    alignItems:'flex-start',
   

},
leveltext:{
    fontSize:RFPercentage(4),
    color:'white',
    fontWeight:'bold',
    textAlign:'center'
},
wellDoneContainer:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
},
welDonetext:{
    fontSize:RFPercentage(6),
    color:'white',
    fontWeight:'bold',
    textAlign:'center'
    
},
outputLavelContainer:{
    flex:1,
   
    marginLeft:'5%',
    justifyContent:'center',
    alignItems:'flex-start'

},
outputLabelText:{
    fontSize:RFPercentage(4),
    color:'white',
    fontWeight:'bold',
    textAlign:'center'

},
outputContainer:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    backgroundColor:'#FFFFFF80',
    margin:'5%',
    marginTop:0
   
},
nextButtonContainer:{
    flex:3,
    justifyContent:'center',
    alignItems:'flex-end',


},
nextButton:{
    width:'30%',
    height:'30%',
    borderRadius:20,
    backgroundColor:'#FAFAFA',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:'10%',
    right:'1%'
},
nextButtonText:{
    textAlign:'center',
    fontSize:RFPercentage(3),
    fontWeight:'bold'
},

imageCoding:{
    bottom:0,
   
    width:'40%',
    height:'20%',
    marginBottom:'5%',
    position:'absolute',
    
    left:'30%'

},
//Modal styles
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  modalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
   
    
    shadowOffset: {
      width: 50,
      height: 20
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 0
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:'white'
  },
  codeintroText:{
      color:'#31C9F7',
      fontSize:RFPercentage(5),
      fontWeight:'bold',
      textAlign:'center',
      position:'absolute',
      marginTop:'13%',
      left:'10%',
      right:'10%'
  }





   
})
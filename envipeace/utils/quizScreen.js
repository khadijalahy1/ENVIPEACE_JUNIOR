import React from 'react'
import { View, TouchableOpacity, Text, Modal, StyleSheet, Pressable, Button ,TouchableHighlight,Pressa} from 'react-native'
import firestore from "@react-native-firebase/firestore"
import PropTypes from 'prop-types'
import { BackButton } from './BackButton'
import FastImage from 'react-native-fast-image'
import { styles as mystyles } from '../assets/styles'
import QuizWelcome from './QuizzWelcome'
import {withNavigation}from 'react-navigation'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Sound from 'react-native-sound';


 class QuizScreen extends React.Component {
    LevelText = '';
  


    state = {
        currentLevel: 0,
        quizLevelExist: false,
        Quiz: [],
        currentQuestionId: 0,
        score: 0,
        showScoreboard: false,
        showPopup: false,
        PopupText: '',
        displayCommingSoon: false,
        answerColor:'white'



    }



    constructor(props) {
        super(props)
        this.quizPictures = [require('../assets/o1.png'), require('../assets/o2.png'), require('../assets/o3.png'), require('../assets/o4.png'), require('../assets/o5.png')];
        this.losePicture = require('../assets/olose.png');
        this.winPicture = require('../assets/owin.png');
        this.backgroundColor='#31C9F7';
        this.wlcmPicture=require('../assets/ocean.png');



       
        console.log("_________________________________________________________________________________________________")
        console.log("ana f lconstructor :", this.state.Quiz)
        let value = mystyles.answerOptionContainer
      this.myStyle = Object.assign({}, value, {
            backgroundColor: this.state.answerColor,
         })




    }

    componentWillMount() {
      
     switch(this.props.rubric){

        case('earthQuiz'):
        this.quizPictures = [require('../assets/e1.png'), require('../assets/e2.png'), require('../assets/e3.png'), require('../assets/e4.png'), require('../assets/e5.png')];
        this.losePicture = require('../assets/elose.png');
        this.winPicture = require('../assets/ewin.png');
        this.backgroundColor='#8FDD3C';
        this.wlcmPicture=require('../assets/earthQuizz.png');

        break;
        case('oceanQuiz'):
        this.quizPictures = [require('../assets/o1.png'), require('../assets/o2.png'), require('../assets/o3.png'), require('../assets/o4.png'), require('../assets/o5.png')];
        this.losePicture = require('../assets/olose.png');
        this.winPicture = require('../assets/owin.png');
        this.backgroundColor='#31C9F7';
        this.wlcmPicture=require('../assets/ocean.png');
        break;
        case('spaceQuiz'):
        this.quizPictures = [require('../assets/space1.png'), require('../assets/space2.jpg'), require('../assets/space3.png'), require('../assets/space4.png'), require('../assets/space5.png')];
        this.losePicture = require('../assets/spacelose.png');
        this.winPicture = require('../assets/spacewin.png');
        this.backgroundColor='#FF8661';
        this.wlcmPicture=require('../assets/space.png');
        break;

        


     
    
    }




    }
    componentDidMount() {
        this.getQuiz(this.props.rubric, "L0");


    }
    _displaySoundCorrectAnswer = () =>{
        Sound.setCategory('Playback');
        var mySound = new Sound('correct.mp3',Sound.MAIN_BUNDLE,(error)=>{
            if(error){
            console.log('Error loading sound: ' + error);
            return;
            }else{
            mySound.play((success)=>{
            if(success){
           
           this._nextQuestion();
         

            
            }else{
            console.log('Issue playing file');
            }
            })
            }
            });
            
            
            
          
    }
    _DisplaySoundWrongAnswer = () =>{
        Sound.setCategory('Playback');
        var mySound = new Sound('wrong.mp3',Sound.MAIN_BUNDLE,(error)=>{
            if(error){
            console.log('Error loading sound: ' + error);
            return;
            }else{
            mySound.play((success)=>{
            if(success){
                
                this._nextQuestion();
                
            
            }else{
            console.log('Issue playing file');
            }
            })
            }
            });
            
            
            
          
    }

    //to review again

    getQuiz = async (rubric, idLevel) => {


        const userDocExist = await (await firestore().collection(rubric).doc(idLevel).get()).exists
        const userDocument = await firestore().collection(rubric).doc(idLevel).get();
        if (userDocExist) {
            this.setState({
                Quiz: userDocument.data().quiz,
                quizLevelExist: true

            })
            console.log("ana f l function :", this.state.Quiz)

            //quiz exists





        }
        else {
            this.setState(
                {
                    displayCommingSoon: true
                }
            )

        }

    }
    _OnResponse(isCorrect) {
        if (this.state.currentQuestionId == 4) {
            this.setState({
                showScoreboard: true
            })
            if (isCorrect) {
                let currentScore = this.state.score + 1;
                this.setState({ score: currentScore, answerColor:'green' });
                this._displaySoundCorrectAnswer();
                //display won sound
            }
            else{
                this.setState({answerColor:'#F61010'});
                this._DisplaySoundWrongAnswer();
            }
        }
        else {
            this.setState({ showPopup: true });
            if (isCorrect) {
                let currentScore = this.state.score + 1;
                this.setState({ score: currentScore, answerColor:'green'});
                this._displaySoundCorrectAnswer();
                //display won sound
            }
            else {
                this.setState({ answerColor:'#F61010' });
                this._DisplaySoundWrongAnswer();
            }
        }



    }
    _nextQuestion() {
        let currentId = this.state.currentQuestionId + 1;
        this.setState({
            currentQuestionId: currentId,
            showPopup: false,
            answerColor:'white'
        })

    }
    _gonextLevel() {
        this.setState({ quizLevelExist: false })
        let Level = 'L' + (this.state.currentLevel + 1).toString()
        console.log(Level)
        this.getQuiz(this.props.rubric, Level);
        this.setState({
            score: 0,
            showScoreboard: false,
            currentQuestionId: 0,
            currentLevel: this.state.currentLevel + 1,
            answerColor:'white'

        })
    }
    _retry() {
        this.setState({
            score: 0,
            showScoreboard: false,
            currentQuestionId: 0,


        })

    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        this.LevelText = 'Level ' + (this.state.currentLevel).toString()

        if (this.state.quizLevelExist) {

            if (this.state.showScoreboard) {
                console.log('ana fldakhl dyal scoreBoard')

                if (this.state.score >= 3) {
                    console.log('db khasni ngolih rah rbeh')

                    return (
                        <View style={mystyles.leaderBoardContainer}>
                            <QuizWelcome backgroundColor={this.backgroundColor} image={this.winPicture} backTo='QuizMenu' text={'Congratulation ! \n You Win'} showLoading={false} />
                            <TouchableOpacity style={mystyles.quizButton} onPress={() => { this._gonextLevel() }}>
                                <Text style={{ color: this.backgroundColor, fontSize: RFPercentage(4), textAlign: 'center', fontWeight: 'bold' }}>
                                    Next Level
                                </Text>

                            </TouchableOpacity>

                        </View>


                    )

                }
                else {
                    console.log('db khasni ngolih rah khsser')
                    return (
                        <View style={mystyles.leaderBoardContainer}>
                            <QuizWelcome backgroundColor={this.backgroundColor} image={this.losePicture} backTo='QuizMenu' text={'Oups ! \n You lose'} showLoading={false} />
                            <TouchableOpacity style={mystyles.quizButton} onPress={() => { this._retry() }}>
                                <Text style={{ color: this.backgroundColor, fontSize: RFPercentage(4), textAlign: 'center', fontWeight: 'bold' }}>
                                    Replay
                                </Text>

                            </TouchableOpacity>
                        </View>



                    )
                }

            }
            else {
                return (
                    <View style={{ flex: 1, backgroundColor: this.backgroundColor }}>
                        <BackButton onPress={()=>{this.props.navigation.navigate('QuizMenu')}}/>
                        <View style={mystyles.questionIdContainer}>
                            <Text style={mystyles.questionIdText}>Question {this.state.currentQuestionId + 1}/5 : </Text>
                        </View>
                        <View style={mystyles.questionContainer} >
                            <Text style={mystyles.questionText}>{this.state.Quiz[this.state.currentQuestionId].question}</Text>


                        </View>
                        <View style={mystyles.answersContainer}>
                            {this.state.Quiz[this.state.currentQuestionId].answers.map((answers) => (
                                
                                
                                <TouchableOpacity style={{ width: '70%', height: '10%', backgroundColor: this.state.answerColor, borderRadius: 20, marginBottom: '5%', justifyContent: 'center', alignItems: 'center' }}  onPressIn={() => { this._OnResponse(answers.isCorrect) }} onPressOut={()=>{this.setState({answerColor:'white'})}} >
                                    <Text style={mystyles.answerText} >
                                        {answers.answerText}
                                    </Text>
                                </TouchableOpacity>

                            ))}

                        </View>
                        <FastImage
                            style={mystyles.questionPicture}
                            source={this.quizPictures[this.state.currentQuestionId]}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        






                    </View>


                )




            }



        }
        /////////////////////////////////////////////////////////the level is Loading or comming Soon///////////////////////////////////////////////////////////////////////////////////////



        else {
            if (this.state.displayCommingSoon) {
                return (
                    <QuizWelcome backgroundColor={this.backgroundColor} image={this.wlcmPicture} backTo='QuizMenu' text={'The next level is comming soon....'} showLoading={false} />
                )
            }
            else {
                return (
                    <QuizWelcome backgroundColor={this.backgroundColor} image={this.wlcmPicture} backTo='QuizMenu' text={this.LevelText} showLoading={true} />
                )

            }


        }


    }
}
QuizScreen.propTypes = {

    rubric: PropTypes.string,


}
export default withNavigation(QuizScreen)


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});




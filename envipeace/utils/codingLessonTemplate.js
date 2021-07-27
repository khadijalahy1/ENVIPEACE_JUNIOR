import React from 'react'
import { Text, TouchableOpacity, View, TextInput, Button } from 'react-native'
import { BackButton } from './BackButton'
import FastImage from 'react-native-fast-image'
import { styles as mystyles } from '../assets/styles'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { Input } from 'react-native-elements';

class CodingLessonTemplate extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            answer:""

        }

    }
    onRun=(event)=>{
        this.props.parentCallback(this.state.answer);
        event.preventDefault();
        console.log('I am inside the function onRun :)');
        this.setState({answer:''})


    }
    
    handleAnswer = (text) => {
        this.setState({ answer: text })
        
     }

    render() {
        return (
            <View style={mystyles.Container}>


                <FastImage
                    style={mystyles.ImageBackground}
                    source={this.props.sourceImage}
                    resizeMode={FastImage.resizeMode.stretch}
                />
                <View style={mystyles.Container}>
                    <BackButton onPress={()=>{this.props.navigation.navigate('CodingMenu')}} />
                    <View style={mystyles.codingLessonTitleContainer} >
                        <Text style={mystyles.codingTitleText}>
                            {this.props.titleText}

                        </Text>

                    </View>
                    <View style={mystyles.codingLessonContainer}>
                        <Text style={mystyles.codingLessonText}>
                            {this.props.lessonText}

                        </Text>

                    </View>
                    <View style={mystyles.inputContainer}>
                        <Text style={mystyles.inputText}>
                            Input :

                    </Text>

                    </View>
                    <View style={mystyles.codingTaskContainer}>
                        <View style={mystyles.sameLineContainer}>
                            <Text style={mystyles.keyWordText}>
                                {this.props.keyword1}




                            </Text>
                            <Text style={mystyles.taskText}>{this.props.textBeforeInput}

                            </Text>
                            <TextInput style={{
                                margin: 15,
                                height: 40,
                                borderColor: '#8FDD3C',
                                borderWidth: 1
                            }}
                                underlineColorAndroid="transparent"
                                placeholder="write your answer here"
                                placeholderTextColor="#8FDD3C"
                                autoCapitalize="none"
                                onChangeText={this.handleAnswer}
                                value={this.state.answer}
                                 />
                                

                        </View>


                        <Text style={mystyles.taskText}>
                            {this.props.textAfterInput}

                        </Text>


                    </View>
                    <View style={mystyles.runbuttonContainer}>
                        <TouchableOpacity style={mystyles.runButton} onPress={this.onRun}>
                            <Text style={mystyles.runButtonText}>
                                Run
                        </Text>

                        </TouchableOpacity>

                    </View>




                </View>




            </View>

        )
    }
}

// This enforces props type
CodingLessonTemplate.propTypes = {
    titleText: PropTypes.string,
    lessonText: PropTypes.string,
    textBeforeInput: PropTypes.string,
    keyword1: PropTypes.string,
    textAfterInput: PropTypes.string,
    sourceImage: PropTypes.func,
    answerScreen: PropTypes.string,
    parentCallback:PropTypes.func
}
export default withNavigation(CodingLessonTemplate)
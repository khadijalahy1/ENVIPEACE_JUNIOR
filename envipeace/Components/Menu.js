import React, { useRef, useState } from "react"
import { SafeAreaView, Button, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native"
import Wizard from "react-native-wizard"
import navigation from "../Navigation/navigation"
import { styles as mystyles } from '../assets/styles'
import { RFPercentage } from "react-native-responsive-fontsize";
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/AntDesign';
import {WizardChoiceButton} from '../utils/wizardChoiceButton'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const Menu = ({ navigation }) => {

    let showTheButton;

    const wizard = useRef()
    const [isFirstStep, setIsFirstStep] = useState(true)
    const [isLastStep, setIsLastStep] = useState(false)
    const [currentStep, setCurrentStep] = useState(0);

    showTheButton=(isLastStep)?false:true;


    const stepList = [
        {
            content:
                <View  style={mystyles.wizardContainer}>

                    <WizardChoiceButton  color={'#8FDD3C'} text={'QUIZ'} onPress={()=>{navigation.navigate('QuizMenu')}}/>
                    <View style={mystyles.choiceImageContainer}>
                        <FastImage
                            style={mystyles.ImageBackground}
                            source={
                                require('../assets/quiz.gif')
                            }
                            resizeMode={FastImage.resizeMode.contain}
                        />


                    </View>



                </View>

            ,
        },
        {
            content:
                <View style={mystyles.wizardContainer}>

                    <WizardChoiceButton color={"#31C9F7"} text={'LET US CODE'} onPress={()=>{navigation.navigate('CodingMenu')}}/>
                    <View style={mystyles.choiceImageContainer}>
                        <FastImage
                            style={mystyles.ImageBackground}
                            source={
                                require('../assets/codingIcon.gif')
                            }
                            resizeMode={FastImage.resizeMode.contain}
                        />


                    </View>



                </View>

            ,
        },
        {
            content:
                <View style={mystyles.wizardContainer}>
                    <WizardChoiceButton color='#FF8661' text='TRAINING' onPress={()=>{navigation.navigate('TrainingMenu')}}/>

                    
                    <View style={mystyles.choiceImageContainer}>
                        <FastImage
                            style={mystyles.ImageBackground}
                            source={
                                require('../assets/trainingIcon.gif')
                            }
                            resizeMode={FastImage.resizeMode.contain}
                        />


                    </View>



                </View>



        },

    ]
    const goToprevious = () => {
        if (isFirstStep == true) {
            navigation.navigate('HomePage');
        }
        else {
            wizard.current.prev();
        }




    }
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

    return (
       
        
      <GestureRecognizer
      
      onSwipeUp={() => navigation.navigate('HomePage')}
      onSwipeDown={() => navigation.navigate('HomePage')}
      onSwipeLeft={() =>wizard.current.next() }
      onSwipeRight={() =>goToprevious() }
      config={config}
      style={mystyles.wizardMainView
        }
      >
        

<TouchableOpacity style={mystyles.wizardButtonPrevious} >
    <Icon name="arrowleft" size={RFPercentage(6)} color="black" onPress={() => goToprevious()} />
</TouchableOpacity>

<View style={mystyles.switchAndWizzardContainer}>

    <View style={mystyles.wizard1}>

        <View style={mystyles.wizard}>
            <Wizard
                ref={wizard}
                steps={stepList}
                isFirstStep={val => setIsFirstStep(val)}
                isLastStep={val => setIsLastStep(val)}
                
                currentStep={({ currentStep, isLastStep, isFirstStep }) => {
                    setCurrentStep(currentStep)
                }}
            />

        </View>





    </View>

    <View style={mystyles.switchContainer}>
        {stepList.map((val, index) => (
            <View
                key={"step-indicator-" + index}
                style={{
                    width: 25,
                    marginHorizontal: 6,
                    height: 25,
                    borderWidth: 1,
                    borderRadius: 14,

                    backgroundColor: index === currentStep ? "#D3C9C7" : "white",


                }}
            />
        ))}
    </View>
</View>
{ showTheButton&&
    <TouchableOpacity style={mystyles.wizardButtonNext}   >
    <Icon name="arrowright" size={RFPercentage(6)} color="black"  onPress={() => wizard.current.next()}/>
</TouchableOpacity>

   
}



      
    </GestureRecognizer>
      
    )
}

export default Menu;
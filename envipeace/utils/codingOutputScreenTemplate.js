import React from 'react' 
import { View,Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { styles as mystyles } from '../assets/styles'
import { BackButton } from './BackButton'

import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

class CodingOutputScreenTemplate extends React.PureComponent {
 
    constructor(props){
        super(props)
        let value = mystyles.Container
      this.myStyle = Object.assign({}, value, {
            backgroundColor: this.props.backgroundColor,
         })

    }
    onNext=(event)=>{
        this.props.gonextLevel();
        event.preventDefault();
        console.log('I am inside the function onNext:)')


    }
    render(){
        return(
            <View style={this.myStyle}>
                
              
                <View style={mystyles.resultScreenContainer}>
                    <View style={mystyles.levelContainer}>
                        <Text style={mystyles.leveltext}>
                            Level {this.props.currentLevel}
                        </Text>

                    </View>
                    <View style={mystyles.wellDoneContainer}>
                        <Text style={mystyles.welDonetext}>
                            Well done  !
                        </Text>

                    </View>
                    <View style={mystyles.outputLavelContainer}>
                        <Text style={mystyles.outputLabelText}>
                            Output :

                        </Text>
                    </View>
                    <View style={mystyles.outputContainer}>
                        <Text style={mystyles.nextButtonText}>
                            {this.props.outputText}

                            
                        </Text>
                    </View>
                    <View style={mystyles.nextButtonContainer}>
                        <TouchableOpacity style={mystyles.nextButton} onPress={this.onNext}>
                            <Text style={mystyles.nextButtonText}>
                                Next

                            </Text>

                        </TouchableOpacity>
                       
                    </View>

                </View>
                <FastImage
                    style={mystyles.imageCoding}
                    source={require('../assets/e.png')}
                    resizeMode={FastImage.resizeMode.stretch}
                />
                <BackButton onPress={()=>{this.props.navigation.navigate('CodingMenu')}}/>


            </View>

        )
    }
}
export default withNavigation(CodingOutputScreenTemplate)

// This enforces props type
CodingOutputScreenTemplate.propTypes = {
   currentLevel:PropTypes.string,
   backgroundColor:PropTypes.string,
   picture:PropTypes.string,
   outputText:PropTypes.string,
   gonextLevel:PropTypes.func

 
}
//Navigation/navigation.js
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, HeaderBackground } from 'react-navigation-stack'
import Intro from '../Components/Intro'
import HomePage from '../Components/HomePage'
import Menu from '../Components/Menu'
import TrainingMenu from '../Rubriques/Training/TrainingMenu'
import TrainingSession1 from '../Rubriques/Training/TrainingSession1'
import TrainingS2 from '../Rubriques/Training/TrainingS2'
import TrainingS3 from '../Rubriques/Training/TrainingS3'
import QuizMenu from '../Rubriques/Quizz/QuizMenu'
import WlcmLand from '../Rubriques/Quizz/Land/wlcmLand'
import WlcmOcean from '../Rubriques/Quizz/ocean/wlcmOcean'
import WlcmSpace from '../Rubriques/Quizz/space/wlcmSpace'
import LandQuiz from '../Rubriques/Quizz/Land/landQuiz'
import OceanQuiz from '../Rubriques/Quizz/ocean/oceanQuiz'
import SpaceQuiz from '../Rubriques/Quizz/space/spaceQuiz'
import AnswerScreen from '../Rubriques/Coding/answerScreen'
import CodingMenu from '../Rubriques/Coding/codingMenu'
const SearchStackNavigator = createStackNavigator({

   Intro: {
      screen: Intro,
      navigationOptions: {
         headerShown: false,
         title: 'Intro',
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      },
   },
   HomePage: {
      screen: HomePage,
      navigationOptions: {
         headerShown: false,
         title: 'HomePage',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      },
   },
   Menu:{
      screen: Menu,
      navigationOptions: {
         headerShown: false,
         title: 'Menu',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      },

   },
   TrainingMenu:{
      screen: TrainingMenu,
      navigationOptions: {
         headerShown: false,
         title: 'TrainingMenu',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }
   },
   TrainingSession1:{
      screen:TrainingSession1,
      navigationOptions: {
         headerShown: false,
         title: 'TrainingSession1',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   }
   ,
   TrainingS2:{
      screen:TrainingS2,
      navigationOptions: {
         headerShown: false,
         title: 'TrainingS2',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   }
   ,
   TrainingS3:{
      screen:TrainingS3,
      navigationOptions: {
         headerShown: false,
         title: 'TrainingS3',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   }
 
,
   QuizMenu:{
      screen:QuizMenu,
      navigationOptions: {
         headerShown: false,
         title: 'QuizMenu',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   },
   WlcmLand:{
      screen:WlcmLand,
      navigationOptions: {
         headerShown: false,
         title: 'WlcmLand',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   },
   WlcmOcean:{
      screen:WlcmOcean,
      navigationOptions: {
         headerShown: false,
         title: 'WlcmOcean',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   },
   WlcmSpace:{
      screen:WlcmSpace,
      navigationOptions: {
         headerShown: false,
         title: 'WlcmSpace',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   },
   LandQuiz:{
      screen:LandQuiz,
      navigationOptions: {
         headerShown: false,
         title: 'LandQuiz',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   },
   OceanQuiz:{
      screen:OceanQuiz,
      navigationOptions: {
         headerShown: false,
         title: 'OceanQuiz',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   },
   SpaceQuiz:{
      screen:SpaceQuiz,
      navigationOptions: {
         headerShown: false,
         title: 'SpaceQuiz',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   },
   AnswerScreen:{
      screen:AnswerScreen,
      navigationOptions: {
         headerShown: false,
         title: 'AnswerScreen',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   },
   CodingMenu:{
      screen:CodingMenu,
      navigationOptions: {
         headerShown: false,
         title: 'CodingMenu',
         headerLeft: null,
         headerStyle: {
            backgroundColor: 'transparent',
         },
         headerTintColor: 'white',
      }


   },
   


  








   initialRouteName: 'Intro',
})

export default createAppContainer(SearchStackNavigator)
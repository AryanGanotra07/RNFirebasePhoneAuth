import {createStackNavigator} from 'react-navigation-stack';
import AuthScreen from './Auth';
import OTPScreen from './OTPScreen';

export default createStackNavigator({
    AuthScreen : {
        screen :AuthScreen,
    },
    OTPScreen :{
        screen : OTPScreen,
    } 
},{
    initialRouteName : 'AuthScreen',
    
})
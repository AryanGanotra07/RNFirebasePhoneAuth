import {createStackNavigator} from 'react-navigation-stack';
import AuthScreen from './Auth';

export default createStackNavigator({
    AuthScreen : AuthScreen
},{
    initialRouteName : 'AuthScreen',
    
})
import {createStackNavigator} from 'react-navigation-stack';
import Home from './home';
import Auth from './auth';
import {createAppContainer} from 'react-navigation';

const stack = createStackNavigator ({
    Home : {
        screen : Home,
    },
    Auth : {
        screen : Auth
    }
}, 
{
    initialRouteName : 'Auth',
    headerMode : "none"
});


export default createAppContainer(stack);

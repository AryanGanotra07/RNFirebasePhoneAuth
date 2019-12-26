import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

export default createStackNavigator({
    HomeScreen : HomeScreen
},
{
    initialRouteName : 'HomeScreen',
    headerMode:'none'
});
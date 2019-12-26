import React from 'react';
import {View,Text} from 'react-native';

const HomeScreen = ({navigation}) => {
    const user = navigation.getParam('user')
    return (
        <View style = {{justifyContent:'center',flex:1, padding:20}}>
            <Text style = {{color : 'black', fontSize:30}}>User id is {user.uid}</Text>
        </View>
    )
}

HomeScreen.navigationOptions = ({navigation}) => (
    {

    title: navigation.getParam('user').phoneNumber
})

export default HomeScreen;
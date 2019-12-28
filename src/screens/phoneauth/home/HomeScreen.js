import React from 'react';
import {View,Text,Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
    const user = navigation.getParam('user')
    return (
        <View style = {{justifyContent:'center',flex:1, padding:20}}>
            <Text style = {{color : 'black', fontSize:30}}>User id is {user.uid}</Text>
            <Button style = {{marginVertical:10}}
            title = "Logout"
            onPress = {()=> {
                auth().signOut()
                    .then(function() {
                        navigation.navigate('AuthScreen');
                    })
                    .catch(function(error) {
                        // An error happened
                    });
            }}
            >

            </Button>
        </View>
    )
}

HomeScreen.navigationOptions = ({navigation}) => (
    {

    title: navigation.getParam('user').phoneNumber
})

export default HomeScreen;
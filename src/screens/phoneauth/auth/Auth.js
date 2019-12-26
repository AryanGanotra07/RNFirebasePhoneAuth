import React, {useState} from 'react';
import {View,Text, TextInput, Button, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import OTPScreen from './OTPScreen';


const Auth = ({navigation}) => {
    const defaultphn = '+919827352522'
    const [phno, onChangePhno] = useState('');
    return(
        <View style = {{flex:1,padding:10, justifyContent:'flex-end'}}>
            <View style = {{flex:3, justifyContent:'center'}}>
            <Image 
            source = {require('../../../../assets/images/firebase-logo.png')}
            style = {{height:100, width:'auto'}}
            />
            </View>
            <View style = {{flex:2}}>
            <Text style = {{marginVertical : 4, fontWeight : 'bold', color:'black'}}>Phone Number</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical : 8}}
            onChangeText={text => onChangePhno(text)}
            value={phno}
            placeholder = {defaultphn}
            />
            <View
             style = {{marginVertical : 8}}>
            <Button
            title  = 'Generate OTP'
            onPress = {()=> {
                navigation.navigate('OTPScreen');
            }}
            >
            </Button>
            </View>
            </View>

        </View>
    )
}

Auth.navigationOptions = () => ({
    title : 'PhoneAuth'
})



export default Auth;
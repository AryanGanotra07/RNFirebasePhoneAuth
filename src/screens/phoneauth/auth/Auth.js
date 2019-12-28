import React, {useState} from 'react';
import {View,Text, TextInput, Button, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import OTPScreen from './OTPScreen';


const Auth = ({navigation}) => {
    const user = auth().currentUser;
    if(user)
    {
        navigation.navigate('HomeScreen',{user : user})
    }
    const defaultphn = '+919827352522'
    const [phno, onChangePhno] = useState('');
    const [err, setErr] = useState('')
    console.reportErrorsAsExceptions = false;
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
            keyboardType="phone-pad"
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
                if(phno){
                    signIn(phno)
                .then((confirmation)=>{
                    setErr('')
                    console.log(confirmation.confirm)
                    navigation.navigate('OTPScreen',{confirmation : confirmation, phno : phno})
                })
                .catch(error => {
                    setErr(error.message.toString())
                })  
            }
            else
            {
                setErr('Field can\'t be empty')
            }
        }
                }
                
            >
            </Button>
            {err?<Text style = {{color:'red',marginVertical:5}}>{err}</Text>:null}
            </View>
            </View>

        </View>
    )
}

const signIn = async(phno) => {
    const confirmation = await auth().signInWithPhoneNumber(phno)
    return confirmation
    
}

Auth.navigationOptions = () => ({
    title : 'PhoneAuth'
})



export default Auth;
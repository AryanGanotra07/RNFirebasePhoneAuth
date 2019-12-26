import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const {height, width} = Dimensions.get('window');
const OTPScreen = ({navigation}) => {
    return (
    <View style = {{padding:10,flex:1}}>
        <Text style = {{fontWeight:'bold',color:'black', marginVertical:5}}>Enter verification code</Text>
        <OTPInputView
    style={{width: width*0.75, height:50, marginVertical:5,alignSelf:'center'}}
    pinCount={6}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
<TouchableOpacity
 style = {{marginVertical:10, alignSelf:'flex-end'}}
 onPress = {()=>{navigation.goBack()}}
 >
    <Text style= {{color:'#42a5f5'}}>Edit phone</Text>
</TouchableOpacity>
    </View>
    );
}

OTPScreen.navigationOptions = () => ({
    title : 'OTP'
})

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "black",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
  
   
  });
  

export default OTPScreen;
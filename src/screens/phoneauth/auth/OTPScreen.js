import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import auth from '@react-native-firebase/auth';

const {height, width} = Dimensions.get('window');

const timerTime = 6
class OTPScreen extends React.Component{
    constructor(props: Object) {
        super(props);
        this.state ={
             timer: timerTime,
             timerOn : true,
             phno : props.navigation.getParam('phno'),
            confirmation : props.navigation.getParam('confirmation'),
            err : ''
             
            }
        
      }
      
      componentDidMount(){
          let phno = this.props.navigation.getParam('phno')
        // this.signIn(JSON.stringify(phno))
        // .then(confirmation => {this.setState((prevState)=>({confirmation : confirmation}))})
        // .catch(err => {this.setState((prevState)=> ({err : err}))})
        this.interval = setInterval(
          () => this.setState((prevState)=> ({ timerOn : true, timer: prevState.timer - 1 })),
          1000
        );
      }
      
      componentDidUpdate(){
        if(this.state.timer === 1){ 
            this.setState((prevState)=>({timer:0,
                timerOn : false}))
          clearInterval(this.interval);
        }
      }
      
      componentWillUnmount(){
       clearInterval(this.interval);
      }

    
    signIn = async(phno) => {
        const confirmation = await auth().signInWithPhoneNumber(phno)
        return confirmation
        
    }

      verifyCode = async(code) => {
        let response = null
        try{
          response = await this.state.confirmation.confirm(code)
        }
        catch (e) {
            this.setState((prevState)=>({err:e}))
        }
        return response;
      }
      
    render(){
        auth().onAuthStateChanged(user => {
            if (user) {
              // Stop the login flow / Navigate to next page
            }
          });
        return (
       <View style = {{padding:10,flex:1}}>
        <Text style = {{fontWeight:'bold',color:'black', marginVertical:5}}>Enter verification code</Text>
        <OTPInputView
        style={{width: width*0.75, height:50, marginVertical:5,alignSelf:'center'}}
        pinCount={10}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        onCodeFilled = {(code => {
            this.verifyCode(code).then(response => {
                if(response)
                {
                    this.props.navigation.navigate('HomeScreen',{user : response})
                }
            })
        })}
        />
        <View style = {{marginVertical:10, flexDirection:'row',justifyContent:'space-between'}}>
        <View>
        <Text style = {{color:'#ef5350'}}>00:{this.state.timer}</Text>
        {this.state.timerOn?null:
         <TouchableOpacity
         onPress = {()=>{
             this.signIn(JSON.stringify(this.state.phno))
             .then(confirmation => {this.setState((prevState)=>({confirmation:confirmation}))})
             .catch(err=>{this.setState((prevState)=>({err:err}))});
             this.setState((prevState)=>({timer:timerTime, timerOn:true}));
             this.interval = setInterval(
            () => this.setState((prevState)=> ({
                 timerOn : true, timer: prevState.timer - 1 })),
            1000
          );}}
         style = {{alignSelf:'center'}}
         >
        <Text style = {{color : '#42a5f5'}}>Resend code</Text>
        </TouchableOpacity>
        }
        </View>
        <View style = {{alignSelf:'center'}}>
        {this.state.err?<Text style = {{color:'red'}}>Wrong code. Try again.</Text>:null}
        <TouchableOpacity
        onPress = {()=>{this.props.navigation.goBack()}}
        style = {{alignSelf:'flex-end'}}
        >
        <Text style= {{color:'#42a5f5',alignSelf:'flex-end'}}>Edit phone</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
     );
}
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
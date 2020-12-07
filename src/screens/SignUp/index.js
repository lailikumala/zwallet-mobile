import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import {Button, Text, TextInput, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRegister } from '../../redux/actions/Auth';




const SignUp = ({navigation}) => {
  const inputEmail = React.useRef();
  const inputPassword = React.useRef();
  const inputPin = React.useRef();
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [pin, setPin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(true)
  const dispatch = useDispatch();

  const onSubmit = () => {


    if(!name && !email && !password && !pin) {
      ToastAndroid.show(`you must fill in the data correctly`, ToastAndroid.SHORT)
      return false
    }
    if(!name){
      ToastAndroid.show(`username can't be empty`, ToastAndroid.SHORT)
      return false
    }
    if(!email){
      ToastAndroid.show(`email can't be empty`, ToastAndroid.SHORT)
      return false
    }
    if(!password){
      ToastAndroid.show(`password can't be empty`, ToastAndroid.SHORT)
      return false
    }
    if(!pin){
      ToastAndroid.show(`pin can't be empty`, ToastAndroid.SHORT)
      return false
    }
    setLoading(true);
    dispatch(AuthRegister({
      name: name,
      email: email,
      password: password,
      pin: pin,
    }),
    setName(''),
    setEmail(''),
    setPassword(''),
    setPin('')
  );
};
  const { data } = useSelector((s) => s.Auth)
  if(data.email) {
    navigation.navigate('ee', {email: data.email})
  } else {
    console.log('hh')
  }
  return (
    <>
      <ScrollView style={{backgroundColor: '#e9eef7'}}>
        <Text 
        style={{
          textAlign: "center", 
          padding: 70,
          fontWeight: "bold",
          color: "#6379f4",
          fontSize: 30
          }}>
          zwallet
        </Text>
        <View style={style.card}>
          <View style={{padding: 15}}>
            <Text style={style.signUpText}>Sign Up</Text>
            <Text style={style.signUpSpan}>Create your account to access zwallet.</Text>
          </View>
            <View style={style.inputWrap}>
              <View style={style.inputItem}>
              <View style={{ position: 'absolute', right: 0 }}>
            </View >
              
              <TextInput
                  style={style.input}
                  placeholder="  Enter Your Username"
                  autoCapitalize={'none'}
                  value={name}
                  onChangeText={(text) => setName(text)}
                  onSubmitEditing={() => inputEmail.current.focus()}
                  returnKeyType="next"
              />
              <View style={style.lock}>
                <Image 
                source={require('../../assets/img/user.png')}
                style={{width: 20, height: 20}} 
                />
              </View>
              </View>
              <View style={style.inputItem}>
                <TextInput
                  style={style.input}
                  ref={inputEmail}
                  value={email}
                  placeholder="  Enter Your E-mail"
                  onChangeText={(text) => setEmail(text)}
                  onSubmitEditing={() => inputPassword.current.focus()}
                  returnKeyType="next"
                />
                <View style={style.lock}>
                  <Image 
                  source={require('../../assets/img/envelope.png')} 
                  style={{width: 20, height: 20}}
                  />
              </View>
              </View>
              <View style={style.inputItem}>
                <TextInput
                  style={style.input}
                  ref={inputPassword}
                  value={password}
                  placeholder="  Create Your Password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword}
                  onChangeText={(text) => setPassword(text)}
                  onSubmitEditing={() => inputPin.current.focus()}
                  returnKeyType="next"
                />
                <View style={style.lock}>
                  <Image 
                  source={require('../../assets/img/padlock.png')}
                  style={{width: 20, height: 20}} 
                  />
              </View>
              <View style={{position: 'absolute', right: 10, top: 15}}>
                <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Image 
                source={require('../../assets/img/eye-crossed1.png')}
                style={{width: 20, height:20}}/>
                </TouchableOpacity>
              </View>
              </View>
              <View style={style.inputItem}>
                <TextInput
                  style={style.input}
                  ref={inputPin}
                  value={pin}
                  placeholder="  Create Your Pin"
                  returnKeyType="send"
                  onChangeText={(Number) => setPin(Number)}
                  keyboardType={"number-pad"}
                  onSubmitEditing={() => onSubmit()}
                />
                <View style={style.lock}>
                  <Image 
                  source={require('../../assets/img/push-pin.png')} 
                  style={{width: 20, height:20}}
                  />
              </View>
              </View>
            </View>
          </View>
      </ScrollView>
      <View style={{padding: 5, backgroundColor: '#fff'}}>
        <Button
          onPress={() => onSubmit()}
          backgroundColor="#6379f4"
          mode="contained">
          Sign UP
        </Button>
      </View>
      <View style={{padding: 25, paddingBottom: 20, backgroundColor: '#fff'}}>
        <Text style={style.signUp}>Alredy have an account? <TouchableOpacity
          onPress={()=> navigation.navigate('Login')}
          activeOpacity={.8}
          style={{marginTop: 40, marginLeft: 5}}
          >
          <Text style={style.subSignUp}>
            Login
          </Text></TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

export default SignUp;

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowRadius: 10
  },
  inputWrap: {
    padding: 15,
  },
  inputItem: {
    padding: 5,
    borderWidth: 0,
    borderBottomColor: '#6379f4',
    marginVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#e9eef7',
    height:50,
    width: '95%',
    marginLeft:13,
    backgroundColor: '#fff'
  },
  lock: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: -34,
    marginLeft: 3
  },
  signUpText: {
    fontSize: 25, 
    color: '#444', 
    textAlign: 'center',
    marginBottom: 25 
  },
  signUpSpan: {
    fontSize: 15, 
    color: '#444', 
    textAlign: 'center',
    marginBottom: 25 
  },
  button: {
    backgroundColor: '#116242',
    padding: 25,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 5,
  },
  signUp: {
    textAlign: 'center',
  },
  subSignUp: {
    color: '#6379f4'
  },
  icon: {
    position: 'absolute', 
    right: 0, 
  },
  subIcon: {color: '#444'}
  
});
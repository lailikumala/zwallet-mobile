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
import { ResetPass } from '../../redux/actions/ResetPassword';


const ResetPassword = (props) => {
  const inputPassword = React.useRef();
  const inputNewPassword = React.useRef();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(null);
  const [newPassword, setNewPassword] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true)
  const [hidePassword1, setHidePassword1] = React.useState(true)
  const dispatch = useDispatch();

  const onSubmit = () => {
   
    dispatch(ResetPass({
      email: email,
      password: newPassword
    }),
    setEmail(''),
    setPassword(''),
    setNewPassword('')
    ),
    props.navigation.navigate('Login');

};
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
            <Text style={style.signUpText}>Reset Password</Text>
            <Text style={style.signUpSpan}>Enter your Zwallet-email so we can send</Text>
            <Text style={style.signUpSpan}>you a password link</Text>
          </View>
            <View style={style.inputWrap}>
              <View style={style.inputItem}>
              <View style={{ position: 'absolute', right: 0 }}>
            </View >
            <TextInput
                  style={style.input}
                  value={email}
                  placeholder="  Enter Your Email"
                  autoCapitalize={'none'}
                  onChangeText={(e) => setEmail(e)}
                 
                  returnKeyType="next"
                />
                <View style={style.lock}>
                  <Image 
                  source={require('../../assets/img/envelope.png')} 
                  style={{width: 20, height: 20}}
                  />
                </View>
              </View>
          </View>
          <View style={style.inputWrap}>
              <View style={style.inputItem}>
              <View style={{ position: 'absolute', right: 0 }}>
            </View >
            <TextInput
                  style={style.input}
                  value={password}
                  placeholder="  Enter Your New Password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword}
                  onChangeText={(e) => setPassword(e)}
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
          </View>
          <View style={style.inputWrap}>
              <View style={style.inputItem}>
              <View style={{ position: 'absolute', right: 0 }}>
            </View >
              <TextInput
                  style={style.input}
                  ref={inputNewPassword}
                  placeholder="  Confirm New Password"
                  autoCapitalize={'none'}
                  value={newPassword}
                  secureTextEntry={hidePassword1}
                  onChangeText={(e) => setNewPassword(e)}
                  onSubmitEditing={() => onSubmit()}
                  returnKeyType="send"
              />
                <View style={style.lock}>
                  <Image 
                  source={require('../../assets/img/padlock.png')} 
                  style={{width: 20, height: 20}}
                  />
                </View>
                <View style={{position: 'absolute', right: 10, top: 15}}>
                  <TouchableOpacity onPress={() => setHidePassword1(!hidePassword1)}>
                  <Image 
                  source={require('../../assets/img/eye-crossed1.png')}
                  style={{width: 20, height:20}}/>
                  </TouchableOpacity>
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
          Reset Password
        </Button>
      </View>
    </>
  );
};

export default ResetPassword;

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: 500,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowRadius: 10
  },
  inputWrap: {
    padding: 15,
    marginVertical: -13
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
    marginBottom: 14 
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



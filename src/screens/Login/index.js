
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  Keyboard,
  BackHandler,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';
import {Button, IconButton, TextInput, Text} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { AuthLogin } from '../../redux/actions/Auth';
import Eye from '../../assets/img/pass1.png';


const Login = (props) => {
  const inputPassword = React.useRef();
  const [email, setUserEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(true)
  const [width, setWidth] = React.useState(300);
  const [exitApp, setExitApp] = React.useState(0)
  const dispatch = useDispatch()

  const onSubmit = () => {

    if(!email && !password) {
      ToastAndroid.show(`you must fill in the data correctly`, ToastAndroid.SHORT)
      return false
    }
    if(!email){
      ToastAndroid.show('email is required', ToastAndroid.SHORT)
      return false
    }
    if(!password){
      ToastAndroid.show('password is required', ToastAndroid.SHORT)
      return false
    }

    Keyboard.dismiss();
    setLoading(true);
    dispatch(AuthLogin({
      email: email,
      password: password
    })
  );
};
const backAction = () => {
  setTimeout(() => {
    setExitApp(0);
  }, 2000); // 2 seconds to tap second-time

  if (exitApp === 0) {
    setExitApp(exitApp + 1);

    ToastAndroid.show('Press again to exit the application', ToastAndroid.SHORT);
  } else if (exitApp === 1) {
    BackHandler.exitApp();
  }
  return true;
};
React.useEffect(() => {
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );
  Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
  Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

  // cleanup function
  return () => {
    backHandler.remove();
    Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
  };
}, [exitApp]);
const _keyboardDidShow = () => {
  setWidth(100);
};

const _keyboardDidHide = () => {
  setWidth(300);
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
            <Text style={style.login}>Login</Text>
            <Text style={[style.loginSpan]}>Login to your existing account to access</Text>
            <Text style={[style.loginSpan]}>all the features in zwallet</Text>
          </View>
            <View style={style.inputWrap}>
              <View style={style.inputItem}>
                <TextInput
                  style={style.input}
                  placeholder="  Enter Your E-mail"
                  autoCapitalize={'none'}
                  value={email}
                  onChangeText={(text) => setUserEmail(text)}
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
                  placeholder="  Enter Your Password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword}
                  returnKeyType="send"
                  onChangeText={(text) => setPassword(text)}
                  onSubmitEditing={() => onSubmit()}
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
              <View style={{padding: 50}}>
                <TouchableOpacity
                  onPress={()=> props.navigation.navigate('ResetPassword')}>
                  <Text style={style.password}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </ScrollView>
      <View style={{padding: 5, backgroundColor: '#fff'}}>
        <Button
          onPress={() => onSubmit()}
          backgroundColor="#6379f4"
          mode="contained">
          Login
        </Button>
      </View>
      <View style={{padding:35, paddingTop: 10, backgroundColor: '#fff'}}>
        <Text style={style.signUp}>Don't have an account? Let's <TouchableOpacity
          onPress={()=> props.navigation.navigate('SignUp')}
          activeOpacity={.8}
          style={{marginTop: 40, marginLeft: 5}}
          >
          <Text style={style.subSignUp}>
            Sign Up
          </Text></TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

export default Login;

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowRadius: 10
  },
  login: {
    fontSize: 25, 
    color: '#444', 
    textAlign: 'center',
    marginBottom: 25
  },
  loginSpan: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    lineHeight: 25,
  },
  inputWrap: {
    padding: 15,
  },
  inputItem: {
    padding: 5,
    borderWidth: 0,
    borderColor: '#333',
    marginVertical: 5,
    borderRadius: 5,
    marginTop: 10
  },
  input: {
    backgroundColor: '#e9eef7',
    height:50,
    width: '95%',
    marginLeft:15,
    backgroundColor: '#fff'
  },
  lock: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: -38,
    marginLeft: 3
  },
  password: {
    textAlign: 'right',
    padding: 20, 
    marginVertical: -20,
    marginHorizontal: -60

    
  },
  button: {
    backgroundColor: '#116242',
    borderRadius: 5,
    alignItems: 'center',
    elevation: 5,
  },
  signUp: {
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  subSignUp: {
    color: '#6379f4',
    marginTop: 15,
    bottom: 0
  },

});


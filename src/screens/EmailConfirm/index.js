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
import {ResetPass} from '../../redux/actions/PatchUser'


const EmailConfirm = (props) => {
  const [email, setEmail] = React.useState(null);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if(!email){
      ToastAndroid.show(`email can't be empty`, ToastAndroid.SHORT)
      return false
    }
    // dispatch(ResetPass({
    //   email: email,
    // })),
    // props.navigation.navigate('ResetPassword')

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
                  placeholder="  Enter Your Email"
                  autoCapitalize={'none'}
                  value={email}
                  onChangeText={(e) => setEmail(e)}
                  onSubmitEditing={() => onSubmit()}
                  returnKeyType="send"
              />
                <View style={style.lock}>
                  <Image 
                  source={require('../../assets/img/mail.png')} 
                  />
                </View>
              </View>
            </View>
          </View>
      </ScrollView>
      <View style={{padding: 5, backgroundColor: '#fff'}}>
        <Button
          onPress={()=> props.navigation.navigate('ResetPassword')}
          backgroundColor="#6379f4"
          mode="contained">
          Confirm
        </Button>
      </View>
    </>
  );
};

export default EmailConfirm;


const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: 550,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowRadius: 10
  },
  inputWrap: {
    padding: 15,
    marginVertical: -50
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


import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button, Text, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ResetPass } from '../../redux/actions/ResetPassword';

const PinSuccess = (props) => {


  
  return (
    <>
      <ScrollView style={{backgroundColor: '#e9eef7'}}>
        <Text 
        style={style.zwallet}>
          zwallet
        </Text>
        <View style={style.card}>
          <View style={style.success}>
            <Image source={require('../../assets/img/success.png')} 
            style={style.imageSuccess}/>
          </View>
          <View style={{padding: 15, marginTop: 40}}>
            <Text style={style.signUpSpan}>Your PIN was successfully created and you can </Text>
            <Text style={style.signUpSpan}>now access all the features in Zwallet. Login to</Text>
            <Text style={style.signUpSpan}>your new account and start exploring!</Text>
          </View> 
        </View>
      </ScrollView>
      <View style={{padding: 5, backgroundColor: '#fff'}}>
        <Button
          onPress={() => onSubmit()}
          backgroundColor="#6379f4"
          mode="contained">
          Login Now
        </Button>
      </View>
    </>
  );
};

export default PinSuccess;

const style = StyleSheet.create({
  zwallet: {
    textAlign: "center", 
    padding: 70,
    fontWeight: "bold",
    color: "#6379f4",
    fontSize: 30
  },
  success: {
    alignItems:'center',
    marginTop: 30
  },
  imageSuccess: {
    height: 60,
    width: 60,
  },
  card: {
    backgroundColor: '#fff',
    height: 400,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowRadius: 10,
    marginTop:100
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
    marginBottom: 25,
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
  subIcon: {color: '#444'},
  input: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputText: {
    width: 50,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 3
  }
  
});
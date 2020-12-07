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

const CreatePin = (props) => {
  const inputPin2 = React.useRef();
  const inputPin3 = React.useRef();
  const inputPin4 = React.useRef();
  const inputPin5 = React.useRef();
  const inputPin6 = React.useRef();

  const [pin1, setPin1] = React.useState(null);
  const [pin2, setPin2] = React.useState(null);
  const [pin3, setPin3] = React.useState(null);
  const [pin4, setPin4] = React.useState(null);
  const [pin5, setPin5] = React.useState(null);
  const [pin6, setPin6] = React.useState(null);

  const pin = pin1 + pin2 + pin3 + pin4 + pin5 + pin6

  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);

  const onSubmit = () => {

    dispatch(PatchPin({
      id: Auth.data.token.id,
      token: Auth.data.token.token,
      pin: pin,
    }),
      setPin1(''),
      setPin2(''),
      setPin3(''),
      setPin4(''),
      setPin5(''),
      setPin6(''),
      
  )
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
            <Text style={style.signUpText}>Create Security Pin</Text>
            <Text style={style.signUpSpan}>Create a PIN that's contain 6 digits number for</Text>
            <Text style={style.signUpSpan}>sucerity purpose in Zwallet.</Text>
          </View>
          <View style={style.input}>
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            value={pin1}
            returnKeyType="next"
            borderWidth={1}
            onChangeText={(e) => setPin1(e)}
            onSubmitEditing={() => inputPin2.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin2}
            value={pin2}
            returnKeyType="next"
            borderWidth={1}
            onChangeText={(e) => setPin2(e)}
            onSubmitEditing={() => inputPin3.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin3}
            value={pin3}
            returnKeyType="next"
            borderWidth={1}
            onChangeText={(e) => setPin3(e)}
            onSubmitEditing={() => inputPin4.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin4}
            value={pin4}
            returnKeyType="next"
            borderWidth={1}
            onChangeText={(e) => setPin4(e)}
            onSubmitEditing={() => inputPin5.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin5}
            value={pin5}
            returnKeyType="next"
            borderWidth={1}
            onChangeText={(e) => setPin5(e)}
            onSubmitEditing={() => inputPin6.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin6}
            value={pin6}
            returnKeyType="send"
            borderWidth={1}
            onChangeText={(e) => setPin6(e)}
            onSubmitEditing={() => onSubmit()}
          />
        </View>
        </View>
      </ScrollView>
      <View style={{padding: 5, backgroundColor: '#fff'}}>
        <Button
          onPress={()=> props.navigation.navigate('PinSuccess')}
          backgroundColor="#6379f4"
          mode="contained">
          Confirm
        </Button>
      </View>
    </>
  );
};

export default CreatePin;

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
    marginTop: -10 
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
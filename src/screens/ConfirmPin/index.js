import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
// import { AuthRegister } from '../../redux/actions/Auth';
 import { PatchPin } from '../../redux/actions/ChangePin';
import Axios from 'axios'


const ConfirmPin = (props) => {
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
}

  return (
    <>
      <ScrollView style={{backgroundColor: '#e9eef7'}} keyboardShouldPersistTaps='always'>
        <View>
          <TouchableOpacity
            onPress={()=> props.navigation.navigate('Confirm')}>
            <Image 
              source={require('../../assets/img/arrow-left.png')} 
              style={style.arrowLeft}/>
          </TouchableOpacity>
          <Text style={style.findReciever}>Enter Your Pin</Text>
          <View style={style.notes}>
            <Text style={style.subNotes}>Enter your 6 digits PIN form confirmation to</Text>
            <Text style={style.subNotes}>continue transfering money.</Text>
          </View>
        </View>
        <View style={style.input}>
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            value={pin1}
            returnKeyType="next"
            onChangeText={(e) => setPin1(e)}
            onSubmitEditing={() => inputPin2.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin2}
            value={pin2}
            returnKeyType="next"
            onChangeText={(e) => setPin2(e)}
            onSubmitEditing={() => inputPin3.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin3}
            value={pin3}
            returnKeyType="next"
            onChangeText={(e) => setPin3(e)}
            onSubmitEditing={() => inputPin4.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin4}
            value={pin4}
            returnKeyType="next"
            onChangeText={(e) => setPin4(e)}
            onSubmitEditing={() => inputPin5.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin5}
            value={pin5}
            returnKeyType="next"
            onChangeText={(e) => setPin5(e)}
            onSubmitEditing={() => inputPin6.current.focus()}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            ref={inputPin6}
            value={pin6}
            returnKeyType="send"
            onChangeText={(e) => setPin6(e)}
            onSubmitEditing={() => onSubmit()}
          />
        </View>       
      </ScrollView>
      <View style={{padding: 5, backgroundColor: '#e9eef7'}}>
        <Button
          onPress={()=> props.navigation.navigate('Success')}
          backgroundColor="#6379f4"
          mode="contained">
          Transfer now
        </Button>
      </View>
    </>
  );
};

export default ConfirmPin;

const style = StyleSheet.create({
  arrowLeft: {
    width: 30, 
    height: 30, 
    marginVertical: 40,
    marginLeft: 20
  },
  findReciever: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: -68,
    marginHorizontal: 80
  },
  notes: { marginTop: 30},
subNotes: {
  alignItems: 'center',
  color: '#666',
  marginLeft: 30
},
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
  marginHorizontal: 3,
  borderWidth: 2
}
});
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
 import { Transfer } from '../../redux/actions/Transfer';

const ConfirmPin = ({navigation, route}) => {

  const [pin1, setPin1] = React.useState(null);
  const [pin2, setPin2] = React.useState(null);
  const [pin3, setPin3] = React.useState(null);
  const [pin4, setPin4] = React.useState(null);
  const [pin5, setPin5] = React.useState(null);
  const [pin6, setPin6] = React.useState(null);

  const pin = pin1 + pin2 + pin3 + pin4 + pin5 + pin6

  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {data} = useSelector((s) => s.Transfer);
  const {name} = data;
  const {data: dataUser} = useSelector((s) => s.User);
  const pinUser = dataUser.pin;
  console.log(pinUser, pin)

  const id = route.params.id;
  const notes = route.params.notes;
  const amount = route.params.amount;
  const reciever = route.params.reciever
  const id_sender = Auth.data.token.id
  

  const onSubmit = () => {
    if(pin == pinUser) {
      dispatch(Transfer({
        token: Auth.data.token.token,
        id_sender: id_sender,
        id_reciever: id,
        reciever: reciever,
        amount: amount,
        notes: notes
      }));
      navigation.navigate('Success', {
        id: id,
        amount: amount, 
        notes: notes, 
        reciever: reciever,
      });
    } else {
      ToastAndroid.show(
        `pin is worng`,
        ToastAndroid.SHORT,
    );
    }
};

  return (
    <>
      <ScrollView style={{backgroundColor: '#e9eef7'}} keyboardShouldPersistTaps='always'>
        <View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Confirm')}>
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
            textAlign="center"
            fontSize={20}
            fontWeight="bold"
            onChangeText={(e) => setPin1(e)}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            value={pin2}
            returnKeyType="next"
            textAlign="center"
            fontSize={20}
            fontWeight="bold"
            onChangeText={(e) => setPin2(e)}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            value={pin3}
            returnKeyType="next"
            textAlign="center"
            fontSize={20}
            fontWeight="bold"
            onChangeText={(e) => setPin3(e)}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            value={pin4}
            returnKeyType="next"
            textAlign="center"
            fontSize={20}
            fontWeight="bold"
            onChangeText={(e) => setPin4(e)}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            value={pin5}
            returnKeyType="next"
            textAlign="center"
            fontSize={20}
            fontWeight="bold"
            onChangeText={(e) => setPin5(e)}
          />
          
          <TextInput style={style.inputText}
            keyboardType={"number-pad"}
            value={pin6}
            returnKeyType="send"
            textAlign="center"
            fontSize={20}
            fontWeight="bold"
            onChangeText={(e) => setPin6(e)}
            onSubmitEditing={() => onSubmit()}
          />
        </View>       
      </ScrollView>
      <View style={{padding: 5, backgroundColor: '#e9eef7'}}>
        <Button
          onPress={() => onSubmit()}
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
  marginHorizontal: 3
}
});
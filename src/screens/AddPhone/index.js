import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';
import {Button, Text, TextInput,} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { PatchPhone } from '../../redux/actions/ChangePhone';

const AddPhone = (props) => {
  const inputPhone = React.useRef();
  const [phone, setPhone] = React.useState(null);

  const dispatch = useDispatch()
  const Auth = useSelector((s)=> s.Auth)
  const onSubmit = () => {
    dispatch(PatchPhone({
      id: Auth.data.token.id,
      token: Auth.data.token.token,
      phone: phone,
    }),
      setPhone(''),
      props.navigation.navigate('Profile'),
  )
  };
  return (
    <>
      <ScrollView style={{backgroundColor: '#e9eef7'}} keyboardShouldPersistTaps='always'>
        <View>
        <TouchableOpacity
          onPress={()=> props.navigation.navigate('PersonalInfo')}>
          <Image 
            source={require('../../assets/img/arrow-left.png')} 
            style={style.arrowLeft}/>
        </TouchableOpacity>
        <Text style={style.findReciever}>Add Phone Number</Text>
        <View style={style.notes}>
          <Text style={style.subNotes}>Add at least one phone number for the transfer</Text>
          <Text style={style.subNotes}>ID so you can start transfering your money to</Text>
          <Text style={style.subNotes}>another user.</Text>
        </View>
        </View>
        <View style={style.inputWrap}>
          <View style={style.inputItem}>
            <TextInput
              style={style.subInputItem}
              ref={inputPhone}
              value={phone}
              keyboardType={"number-pad"}
              placeholder="   Enter your number phone"
              autoCapitalize={'none'}
              returnKeyType="send"
              onChangeText={(e) => setPhone(e)}
              onSubmitEditing={() => onSubmit()}
              underlineColorAndroid="#fff"
            />
            <View style={style.lock}>
              <Image 
              source={require('../../assets/img/phone.png')} 
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{padding: 5, backgroundColor: '#e9eef7'}}>
        <Button
          onPress={() => onSubmit()}
          backgroundColor="#6379f4"
          mode="contained">
          Add Phone
        </Button>
      </View>
    </>
  );
};

export default AddPhone;

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
number: {
  position: 'relative'
},
subInputItem: {
  backgroundColor: '#e9eef7',
  textAlign: 'center',
  marginLeft: 14
},
button: {
  padding: 15, 
  backgroundColor: '#6379f4',
  borderRadius: 15
},
subButton: {
  color: '#fff'
},
lock: {
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  marginTop: -40,
  marginLeft: 3
},
});

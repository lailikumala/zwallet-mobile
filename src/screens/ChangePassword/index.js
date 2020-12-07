import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';
import {Button, Text, IconButton, TextInput,} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
// import { AuthRegister } from '../../redux/actions/Auth';
 import { PatchProfile } from '../../redux/actions/PatchUser';
import Axios from 'axios'

const ChangePassword = (props) => {
  
  const inputCurrentPassword = React.useRef();
  const inputNewPassword = React.useRef();
  const inputReapetPassword = React.useRef();
  const [currentPassword, setCurrentPassword] = React.useState(null);
  const [newPassword, setNewPassword] = React.useState(null);
  const [reapetPassword, setReapetPassword] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true)
  const [hidePassword1, setHidePassword1] = React.useState(true)
  const [hidePassword2, setHidePassword2] = React.useState(true)
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch()
  const Auth = useSelector((s)=> s.Auth)

  const onUpdateSubmit = () => {
    if(currentPassword && newPassword && newPassword === reapetPassword) {
      dispatch(PatchProfile({
            id: Auth.data.token.id,
            token: Auth.data.token.token,
            password: reapetPassword,
          }),
      setCurrentPassword(''),
      setNewPassword(''),
      setReapetPassword('')
        );
    } else {
      ToastAndroid.show(
        `new password & reapet password no match`,
        ToastAndroid.SHORT,
    );
    }
};
  return (
    <>
      <ScrollView style={{backgroundColor: '#e9eef7'}} keyboardShouldPersistTaps='always'>
        <View>
        <TouchableOpacity
          onPress={()=> props.navigation.navigate('Profile')}>
          <Image 
            source={require('../../assets/img/arrow-left.png')} 
            style={style.arrowLeft}/>
        </TouchableOpacity>
        <Text style={style.findReciever}>Change Password</Text>
        <View style={style.notes}>
          <Text style={style.subNotes}>You must enter your current password and then</Text>
          <Text style={style.subNotes}>type your new password twice</Text>
        </View>
        </View>
        <View style={style.inputItem}>
          <TextInput
            style={style.input}
            ref={inputCurrentPassword}
            value={currentPassword}
            placeholder="  Current Password"
            autoCapitalize={'none'}
            secureTextEntry={hidePassword}
            onChangeText={(e) => setCurrentPassword(e)}
            onSubmitEditing={() => inputNewPassword.current.focus()}
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
              ref={inputNewPassword}
              value={newPassword}
              textAlign={'center'}
              placeholder="  New Password"
              autoCapitalize={'none'}
              secureTextEntry={hidePassword1}
              onChangeText={(e) => setNewPassword(e)}
              onSubmitEditing={() => inputReapetPassword.current.focus()}
              returnKeyType="next"
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
        <View style={style.inputItem}>
          <TextInput
            style={style.input}
            ref={inputReapetPassword}
            value={reapetPassword}
            placeholder="  Repeat Password"
            autoCapitalize={'none'}
            secureTextEntry={hidePassword2}
            onChangeText={(e) => setReapetPassword(e)}
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
            <TouchableOpacity onPress={() => setHidePassword2(!hidePassword2)}>
            <Image 
            source={require('../../assets/img/eye-crossed1.png')}
            style={{width: 20, height:20}}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{padding: 5, backgroundColor: '#e9eef7'}}>
        <Button
          onPress={() => onUpdateSubmit()}
          backgroundColor="#6379f4"
          mode="contained">
          Change Password
        </Button>
      </View>
    </>
  );
};

export default ChangePassword;


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
  textAlign: 'center'
},
button: {
  padding: 15, 
  backgroundColor: '#6379f4',
  borderRadius: 15
},
subButton: {
  color: '#fff'
},
input: {
  backgroundColor: '#e9eef7',
  height:50,
  width: '95%',
  marginLeft:13,
  
},
lock: {
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  marginTop: -30,
  marginLeft: 3
},
icon: {
  position: 'absolute', 
  right: 0, 
},
subIcon: {color: '#444'}
});

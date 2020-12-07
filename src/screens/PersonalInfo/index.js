import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from '../../redux/actions/User';


const PersonalInfo = (props) => {
  
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((s)=> s.User)
  const Auth = useSelector((s)=> s.Auth)
  console.log(Auth.data.token, 'll')
  const username = data.name.split(' ');
  const firstName = username[0];
  const lastName = () => {
    if (username.length > 0) return username[1];
  };

  React.useEffect(()=> {
    dispatch(GetUser({
      id: Auth.data.token.id,
      token: Auth.data.token.token
    }))
    console.log(data, 'mm')
  }, []);

  return (
        <>
          <ScrollView style={{backgroundColor: '#e9eef7'}}>
            <TouchableOpacity
              onPress={()=> props.navigation.navigate('Profile')}>
              <Image 
                source={require('../../assets/img/arrow-left.png')} 
                style={style.arrowLeft}/>
            </TouchableOpacity>
            <Text style={style.findReciever}>Personal Informasi</Text>
            <View style={style.notes}>
              <Text style={style.subNotes}>We got you personal information from the sign</Text>
              <Text style={style.subNotes}>up process. If you want to make change on</Text>
              <Text style={style.subNotes}>your information, contact our support</Text>
            </View>
            <View style={style.card}>
              <View style={style.desc}>
                <Text style={style.subDesc}>FIrst Name</Text>
                <Text style={style.name}>{firstName}</Text>
              </View>
            </View>
            <View style={style.card}>
              <View style={style.desc}>
                <Text style={style.subDesc}>Last Name</Text>
                <Text style={style.name}>{lastName()}</Text>
              </View>
            </View>
            <View style={style.card}>
              <View style={style.desc}>
                <Text style={style.subDesc}>Verified E-mail</Text>
                <Text style={style.name}>{data.email}</Text>
              </View>
            </View>
            <View style={style.card}>
              <View style={style.desc}>
                <Text style={style.subDesc}>Phone Number</Text>
                <Text style={style.name}>+62 {data.phone}</Text>
                <TouchableOpacity
                  onPress={()=> props.navigation.navigate('ManagePhone')}
                  style={style.manage}>
                  <Text style={style.subManage}>
                    Manage
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </>
  
  );
};

export default PersonalInfo;

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
    marginLeft: 20,
    color: '#666',
    lineHeight: 23,
  },
  card: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#fff',
    marginTop: 20
  },
  desc: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  subDesc: {marginBottom: 13},
  name: {fontWeight: 'bold'},
  manage: {
    position: 'relative',
    alignItems: 'flex-end',
  },
  subManage: {
    color: '#6379f4',
    marginRight: 30,
    marginTop: -5
  }
  
  });
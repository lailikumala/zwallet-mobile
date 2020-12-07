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
import { PatchPhone } from '../../redux/actions/ChangePhone';

const ManagePhone = (props) => {
  
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((s)=> s.User)
  const Auth = useSelector((s)=> s.Auth)
  console.log(Auth.data.token, 'll')

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
            <Text style={style.findReciever}>Manage Phone Number</Text>
            <View style={style.notes}>
              <Text style={style.subNotes}>You can only delete the phone number and then</Text>
              <Text style={style.subNotes}>you mast add another phone number.</Text>
            </View>
            <View style={style.card}>
              <View style={style.desc}>
                <Text style={style.subDesc}>Phone Number</Text>
                <Text style={style.name}>+62 {data.phone}</Text>
                <View>
                  <TouchableOpacity
                  onPress={()=> 
                    
                    props.navigation.navigate('AddPhone')}
                  style={style.trash}>
                      <Image 
                      source={require('../../assets/img/Vector.png')} 
                      />
                  </TouchableOpacity>
              </View>
              </View>
            </View>
          </ScrollView>
        </>
  
  );
};

export default ManagePhone;

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
    color: '#6379f4',
  },
  manage: {
    marginTop: -14,  
    position: 'relative', 
    alignItems: 'flex-end'
  },
  subManage: {
    marginTop: -20,
    color: '#6379f4', 
    marginRight: 30
  },
  trash: {
    position: 'relative',
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop:-30
  },
  
  });
  

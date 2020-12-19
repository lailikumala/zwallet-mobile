import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUser, SearchNameUser, GetUser } from '../../redux/actions/User';
import Axios from 'axios';

import { UserById } from '../../redux/actions/GetById';


const Transfer = ({navigation}) => {
const [name, setName] = React.useState(null)
  const dispatch = useDispatch()
  const Auth = useSelector((s)=> s.Auth)
  console.log(Auth.data.token, 'll')

  const SearchInput = (query) =>
    {
        const headers = { headers: {'auth-token': `${Auth.data.token.token}`}}  
        console.log(Auth.data.token.token)
        Axios.get(`https://db-zwallet.herokuapp.com/api/users/search?name=${query}&sortBy=name&sortType=ASC`,headers)
        .then(res =>{
            let result = res.data
            setName(result)
            console.log('data search: ', result)
        }).catch(err => {
          console.log(err)
        });
    }

    
  const renderItem = ({item}) => {
    return (
      <View style={style.cardContact}>
        <TouchableOpacity
        onPress={() => { navigation.navigate('Amount')
        }}>
      <View>
      {item.photo? (
        <Image 
        source={{uri: `https://db-zwallet.herokuapp.com/images/${item.photo}`}}
        style={style.imgProfile}/>
      ) : (
        <Image 
        source={require('../../assets/images/blank.png')}
        style={style.imgProfile}/>
      )}
      </View>
      <View>
        <View style={style.detail}>
          <TouchableOpacity>
            <Text style={style.name}>{item.name}</Text>
          </TouchableOpacity>
          <Text style={style.phone}>+62 {item.phone}</Text>
        </View>
      </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <ScrollView style={{backgroundColor: '#e9eef7'}}>
        <TouchableOpacity
          onPress={()=> navigation.navigate('Home')}>
          <Image 
            source={require('../../assets/img/arrow-left.png')} 
            style={style.arrowLeft}/>
        </TouchableOpacity>
        <Text style={style.findReciever}>Find Reciever</Text>
        <View>
          <TextInput          
            style={style.search}
            placeholder="  Search Reciever Here"
            autoCapitalize={'none'}
            onChangeText={(e) => SearchInput(e)}
            />
        </View>
        <Text style={style.contact}>All Contact</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={name}
          renderItem={renderItem}
        />
      </ScrollView>
    </>
  
  );
};

export default Transfer;

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
  search: {
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderColor: 0
  },
  contact: {
    marginTop: 20,
    marginLeft: 23,
    fontSize: 18
  },
  found: {
    marginLeft: 23,
    marginTop: 15
  },
  cardContact: {
    width: '100%',
    borderRadius: 7,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  image: {
    width: 50, 
    marginLeft: 0, 
    height: 50, 
    marginVertical: 22
  },
  detail: {
    marginTop: -70,
    alignItems: 'flex-start',
    marginHorizontal: 80,
  },
  name: {
    marginTop: 10,
    marginBottom: 9,
    marginLeft: 10
  },
  phone: {
    marginLeft: 10
  },
  imgProfile: {
    width: 53, height: 53, 
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
    borderRadius: 5
  },
  });
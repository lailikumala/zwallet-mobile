import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GetTopup } from '../../redux/actions/Topup';


const TopUp = (props) => {
  const dispatch = useDispatch()
  const { data, error } = useSelector((s)=> s.Topup)
  const Auth = useSelector((s)=> s.Auth)
  console.log(Auth.data.token, 'll')

  React.useEffect(()=> {
    dispatch(GetTopup({
      token: Auth.data.token.token
    }))
    console.log(data, 'mm')
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={style.cardTopUp}>
        <Text style={style.number}>{index + 1}</Text>
        <View>
    <Text style={style.subStep}>{item.detail}</Text>
        </View>
      </View>
    );
  };


  return (
        <>
          <ScrollView style={{backgroundColor: '#e9eef7'}}>
            <TouchableOpacity
              onPress={()=> props.navigation.navigate('Home')}>
              <Image 
                source={require('../../assets/img/arrow-left.png')} 
                style={style.arrowLeft}/>
            </TouchableOpacity>
            <Text style={style.findReciever}>Top Up</Text>
            <View style={style.cardContact}>
              <View>
                <Image 
                source={require('../../assets/img/logo.png')} 
                style={style.image}/>
              </View>
              <View>
                <View style={style.detail}>
                  <TouchableOpacity>
                    <Text style={style.name}>Virtual Account Number</Text>
                  </TouchableOpacity>
                  <Text style={style.virtual}>2389 081393877946</Text>
                </View>
              </View>
            </View>
            <View style={style.notes}>
              <Text style={style.subNotes}>We Provide your virtual account number for top</Text>
              <Text style={style.subNotes}>up via nearest ATM</Text>
            </View>
            <View>
              <Text style={style.step}>
                How to Top-Up
              </Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          </ScrollView>
        </>
  
  );
};

export default TopUp;

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
    width: '96%',
    borderRadius: 7,
    backgroundColor: '#fff',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    width: 50, 
    marginLeft: 20, 
    height: 50, 
    marginVertical: 22
  },
  detail: {
    marginTop: -70,
    alignItems: 'flex-start',
    marginHorizontal: 80,
  },
  name: {marginBottom: 9},
  virtual: {fontWeight: 'bold'},
  notes: { marginTop: 20},
  subNotes: {
    textAlign: 'center',
    color: '#444',
    lineHeight: 23
  },
  step: {
    marginLeft: 20,
    marginTop: 25,
    fontWeight: '700',
    fontSize: 16
  },
  cardTopUp: {
    width: '96%',
    borderRadius: 7,
    backgroundColor: '#fff',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    
  },
  number: {
    alignItems: 'flex-start',
    color: '#6379f4',
    fontWeight: 'bold',
    fontSize:18,
    marginVertical: 20,
  
    marginLeft: 20
  },
  subStep: {
    position: 'relative',
    marginTop: -44,
    marginLeft: 40,
    fontSize: 14, 
    
    
  }
  
  });
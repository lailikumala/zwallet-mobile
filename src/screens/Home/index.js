import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from '../../redux/actions/User';
import { History } from '../../redux/actions/History';

const Home = ({navigation}) => {
  const dispatch = useDispatch()
  const Auth = useSelector((s)=> s.Auth)
  const { data } = useSelector((s)=> s.User)
  const {name, photo, phone, balance} = data;
  const { data: dataHistory } = useSelector((s)=> s.History)
  console.log(Auth.data.token, 'll')
  // const [balance, setBalance] = React.useState('');
  // const [itemId, setItemId] = React.useState(18);
  // const socket = io('http://192.168.43.239:8000', {query: {itemId}});

  React.useEffect(()=> {
    dispatch(GetUser({
      id: Auth.data.token.id,
      token: Auth.data.token.token
    }))
    dispatch(History({
      id: Auth.data.token.id,
      token: Auth.data.token.token
    }))
    console.log(data, 'mm')
    // socket.emit('init-user', 18);
    // socket.on('get-data', (data) => {
    //   setBalance(data);
    // });
  }, []);

    // React.useEffect(() => {
    //   return () => {
    //     socket.off('get-data');
    //   };
    // }, []);

  const renderItem = ({item}) => {
    return (
      <View style={style.cardContact}>
      <View>
        <Image 
        source={require('../../assets/images/blank.png')} 
        style={style.image}/>
      </View>
      <View>
        <View style={style.notes}>
          <Text>{item.reciever}</Text>
          <Text>Transfer</Text>
        </View>
        <View style={style.price1}>
          <Text style={style.subPrice}>
            -Rp.{item.amount}
          </Text>
        </View>                
      </View>
    </View>
    );
  };


  return (
        <>
        
        <ScrollView style={{backgroundColor: '#e9eef7'}}>
          <View style={style.body}>
            <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
              {photo? (
                <Image 
                source={{uri: `https://db-zwallet.herokuapp.com/images/${photo}`}}
                style={style.imgProfile}/>
              ) : (
                <Image 
                source={require('../../assets/images/blank.png')}
                style={style.imgProfile}/>
              )}
            </TouchableOpacity>
            <View style={style.profile}>
              <Text
                style={style.hello}>
                Hello,
              </Text>                
              <View>
                <TouchableOpacity
                  onPress={()=> navigation.navigate('Profile')}>
                  <Text
                    style={style.profileName}>
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.bell}>
              <TouchableOpacity
              onPress={()=> navigation.navigate('')}>
                <Image 
                  source={require('../../assets/img/bell.png')} 
                  style={style.subBell}/>
              </TouchableOpacity>
            </View>
            <View style={style.card}>
                <View style={style.detail}>
                  <Text style={style.subDetail}>Balance</Text>
                  <Text style={style.price}>Rp.{balance}</Text>
                  <Text style={style.subDetail}>
                    {
                    phone ? `+62 ${phone}` : 
                    <TouchableOpacity
                      onPress={()=> navigation.navigate('AddPhone')}>
                      <Text style={style.addPhone}>Add Phone</Text>
                    </TouchableOpacity>
                    }</Text>
                </View>
              </View>
              <View style={style.button}>
                <Button 
                  onPress={()=> navigation.navigate('Transfer')}
                  style={style.transfer}>
                    <Image
                    style={style.arrowUp} 
                    source={require('../../assets/img/arrow-up.png')} />
                  <Text style={style.subTransfer}>Transfer</Text>
                </Button>
                <Button 
                onPress={()=> navigation.navigate('TopUp')}
                style={style.topup}>
                <Image
                    style={style.arrowUp} 
                    source={require('../../assets/img/plus.png')} />
                    <Text style={style.subTransfer}>Top Up</Text>
                </Button>
              </View>
              <View>
                <Text style={style.history}>Transaction History</Text>
              </View>
              <View>
                <TouchableOpacity
                    style={style.seeAll}>
                    <Text style={style.subSeeAll}>
                      See All
                    </Text>
                </TouchableOpacity>
              </View>
              <FlatList
            showsVerticalScrollIndicator={false}
            data={dataHistory}
            // keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          /> 
                           
          </View>
        </ScrollView>
        </>
  
  );
};

export default Home;

const style = StyleSheet.create({
  body: {
    backgroundColor: '#e9eef7', 
    height: '100%'
  },
  imgProfile: {
    width: 55, height: 55, 
    marginTop: 60,
    marginLeft: 25,
    borderRadius: 5,
    elevation: 6
  },
  profile: {
    marginVertical: -50, 
    marginHorizontal: 90
  },
  hello: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    backgroundColor: '#e9eef7', 
  },
  bell: {
    marginVertical: 10,
    position: 'relative',
    alignItems: 'flex-end',
    marginRight: 30
  },
  subBell: {
    width: 25, 
    height: 25, 
  },
  card: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#6379f4',
    marginTop: 40,
    elevation: 5,
  },
  detail: {
    marginTop: 13,
    marginLeft: 20,
  },
  subDetail: {
    color: '#fff',
    marginBottom: 15,
    marginTop: 10
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 10
  },
  button: {
    display: 'flex',
    elevation: 4,
  },
  transfer: {
    alignItems: 'flex-start',
    width: 140,
    backgroundColor: '#ccc',
    marginTop: 20,
    marginLeft: 30,
    elevation: 4,
  },
  subTransfer: {
    color: '#000',
    textAlign: 'right',
    fontSize: 13
  },
  topup: {
    width: 140,
    position: 'relative',
    marginTop: -37,
    marginLeft: 190,
    backgroundColor: '#ccc',
    elevation: 4,
  },
  arrowUp: {
    width: 17,
    height: 17,
    marginLeft: 5
  },
  history: {
    fontWeight: 'bold',
    marginLeft: 25,
    fontSize: 15,
    marginTop: 15
  },
  seeAll: {
    marginTop: -14,  
    position: 'relative', 
    alignItems: 'flex-end'
  },
  subSeeAll: {
    color: '#6379f4', 
    marginRight: 30
  },
  cardContact: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 15,
    height: 80,
    elevation: 4,
  },
  image: {
    width: 45, 
    marginLeft: 20, 
    height: 45, 
    marginVertical: 18,
    marginBottom: 20
  },
  notes: {
    marginVertical: -60,
    alignItems: 'flex-start',
    marginHorizontal: 75
  },
  price1: {
    marginTop:-50,
    marginBottom: 30,
    marginRight: 30,
    position: 'relative', 
    alignItems: 'flex-end'
  },
  subPrice: {
    color: '#FF0000',
    fontWeight: 'bold' 
  },
  addPhone: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  }
  });
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  IconButton,
  Button,
  TextInput
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from '../../redux/actions/User';
import {io} from 'socket.io-client'


const Home = (props) => {
  const dispatch = useDispatch()
  console.log(props)
  const { data } = useSelector((s)=> s.User)
  const Auth = useSelector((s)=> s.Auth)
  // const [balance, setBalance] = React.useState('');
  // const [itemId, setItemId] = React.useState(18);
  // const socket = io('http://192.168.43.239:8000', {query: {itemId}});
  console.log(Auth.data.token, 'll')
  React.useEffect(()=> {
    dispatch(GetUser({
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

  return (
        <>
        <ScrollView style={{backgroundColor: '#e9eef7'}}>
          <View style={style.body}>
            <TouchableOpacity onPress={()=> props.navigation.navigate('Profile')}>
              {data.photo? (
                <Image 
                source={{uri: `https://db-zwallet.herokuapp.com/images/${data.photo}`}}
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
                onPress={()=> props.navigation.navigate('Profile')}>
                  <Text
                    style={style.profileName}>
                    {data.name}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.bell}>
              <TouchableOpacity
              onPress={()=> props.navigation.navigate('')}>
                <Image 
                  source={require('../../assets/img/bell.png')} 
                  style={style.subBell}/>
              </TouchableOpacity>
            </View>
              <View style={style.card}>
                <View style={style.detail}>
                  <Text style={style.subDetail}>Balance</Text>
                  <Text style={style.price}>Rp.{data.balance}</Text>
                  <Text style={style.subDetail}>+62 {data.phone}</Text>
                </View>
              </View>
              <View style={style.button}>
                <Button 
                  onPress={()=> props.navigation.navigate('Transfer')}
                  style={style.transfer}>
                    <Image
                    style={style.arrowUp} 
                    source={require('../../assets/img/arrow-up(1).png')} />
                  <Text style={style.subTransfer}>Transfer</Text>
                </Button>
                <Button 
                onPress={()=> props.navigation.navigate('TopUp')}
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
              <View style={style.cardContact}>
                <View>
                  <Image 
                  source={require('../../assets/images/michael.png')} 
                  style={style.image}/>
                </View>
                <View>
                  <View style={style.notes}>
                    <Text>Michael lee</Text>
                    <Text>Transfer</Text>
                  </View>
                  <View style={style.price1}>
                    <Text style={style.subPrice}>
                      -50.000
                    </Text>
                  </View>                
                </View>
              </View>
              <View style={style.cardContact}>
                <View>
                  <Image 
                  source={require('../../assets/images/jessica.png')} 
                  style={style.image}/>
                </View>
                <View>
                  <View style={style.notes}>
                    <Text>jessica</Text>
                    <Text>Transfer</Text>
                  </View>
                  <View style={style.price1}>
                    <Text style={style.subPrice}>
                      -50.000
                    </Text>
                  </View>                
                </View>
              </View>              
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
    borderRadius: 5
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
    display: 'flex'
  },
  transfer: {
    alignItems: 'flex-start',
    width: 140,
    backgroundColor: '#ccc',
    marginTop: 20,
    marginLeft: 30
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
    backgroundColor: '#ccc'
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
    height: 80
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
});

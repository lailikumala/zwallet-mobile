import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import { UserById } from '../../redux/actions/Transfer';
import { useDispatch, useSelector } from 'react-redux';

const Confirm = ({navigation, route}) => {

  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {data} = useSelector((s) => s.Transfer);
  const {name, photo, phone} = data;
  const {data: dataUser} = useSelector((s) => s.User);
  const balance = dataUser.balance;
  const date = new Date().toLocaleString();
  
  const id = route.params.id;
  const notes = route.params.notes;
  const amount = route.params.amount;
  const balanceLeft = balance - amount;

  React.useEffect(() => {
    dispatch(
      UserById({
        id: route.params.id,
        token: Auth.data.token.token,
      }),
    );
  }, []);


  return (
    <ScrollView style={style.scrollview}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={()=> navigation.navigate('Amount')}>
          <Image 
            source={require('../../assets/img/arrow-left.png')} 
            style={style.arrowLeft}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'column'}}>
          <Text
            style={style.transfer}>
            Confirmation
          </Text>
        </View>
      </View>
      <View>
        <Text style={style.title}>Transfer To</Text>
      </View>
      <View style={{margin: 20}}>
      <View style={style.cardContact}>
        <View>
          {photo? (
            <Image 
            source={{uri: `https://db-zwallet.herokuapp.com/images/${photo}`}} 
            style={style.image}/>
          ) : (
            <Image 
            source={require('../../assets/images/blank.png')}
            style={style.imgProfile}/>
          )}
        </View>
        <View>
          <View style={style.detail}>
            <TouchableOpacity>
              <Text style={style.name}>{name}</Text>
            </TouchableOpacity>
            <Text style={{color: '#aaa'}}>{phone ? `+62 ${phone}` : '-'}</Text>
          </View>               
        </View>
      </View> 
      </View> 
      <View>
        <Text style={style.title}>Details</Text>
      </View>
      <View style={{margin: 20}}>
        <View style={style.cardContact}>
          <View>
          <View style={style.desc}>
              <Text style={style.descTitle}>Amount</Text>
            <Text style={style.descNotes}>{amount}</Text>
          </View>               
          </View>
        </View> 
        <View style={style.cardContact}>
          <View>
          <View style={style.desc}>
              <Text style={style.descTitle}>Balance Left</Text>
            <Text style={style.descNotes}>{balanceLeft}</Text>
          </View>               
          </View>
        </View> 
        <View style={style.cardContact}>
          <View>
            <View style={style.desc}>
                <Text style={style.descTitle}>Date & Time </Text>
              <Text style={style.descNotes}>{date}</Text>
            </View>               
          </View>
        </View>
        <View style={style.cardContact}>
          <View>
            <View style={style.desc}>
                <Text style={style.descTitle}>Notes </Text>
              <Text style={style.descNotes}>{notes}</Text>
            </View>               
          </View>
        </View>
        <View style={{marginTop: 50}}>
            <Button
              onPress={() =>
                navigation.navigate('ConfirmPin', {
                  id: id,
                  amount: amount,
                  notes: notes,
                  reciever: name,
                })
              }
              backgroundColor="#6379f4"
              mode="contained">
              continue
            </Button>
        </View> 
      </View> 
    </ScrollView>
  );
};

export default Confirm;

const style = StyleSheet.create({
  scrollview: {
    backgroundColor: '#e9eef7'
  },
  arrowLeft: {
    width: 30, 
    height: 30, 
    marginVertical: 40,
    marginLeft: 20
  },
  transfer: {
    paddingLeft: 20,
    marginTop: 40,
    fontSize: 20,
    color: '#4D4B57',
    fontWeight: 'bold',
  },
  title: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardContact: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 80,
    marginBottom: 15
  },
  image: {
    width: 45, 
    marginLeft: 20, 
    height: 45, 
    marginVertical: 18,
    marginBottom: 20
  },
  detail: {
    marginTop: -70,
    alignItems: 'flex-start',
    marginHorizontal: 80,
  },
  name: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#444'
  },
  phone: {color: '#aaa'},
 available: {
  marginTop: 20,
  textAlign: 'center',
  fontSize: 16,
  fontWeight: 'bold',
  color: '#7C7895',
 },
 inputPrice: {
  textAlign: 'center',
  marginTop: 70,
  color: '#6379F4',
  fontSize: 42,
  fontWeight: 'bold',
 },
inputNotes: {
  paddingLeft: 40,
  marginTop: 70,
  height: 40,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(169, 169, 169, 0.6)',
  fontSize: 16,
},
desc: {
  marginLeft: 20, marginTop: 15
},
descTitle: {fontSize: 14, color: '#aaa'},
descNotes: {fontWeight: 'bold', fontSize: 18, color: '#444'}
});
import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

const Success = ({navigation}) => {
  return (
    <ScrollView style={style.scrollview}>
      <View style={style.success}>
        <Image source={require('../../assets/img/success.png')} 
        style={style.imageSuccess}/>
      </View>
      <View>
        <Text style={style.title}>Details</Text>
      </View>
      <View style={{margin: 20}}>
        <View style={style.cardContact}>
          <View>
          <View style={style.desc}>
              <Text style={style.descTitle}>Amount</Text>
            <Text style={style.descNotes}>Rp. 1000</Text>
          </View>               
          </View>
        </View> 
        <View style={style.cardContact}>
          <View>
          <View style={style.desc}>
              <Text style={style.descTitle}>Balance Left</Text>
            <Text style={style.descNotes}>Rp. 190000</Text>
          </View>               
          </View>
        </View> 
        <View style={style.cardContact}>
          <View>
            <View style={style.desc}>
                <Text style={style.descTitle}>Date, Time </Text>
              <Text style={style.descNotes}>May 11, 2020 - 12.20</Text>
            </View>               
          </View>
        </View>
        <View style={style.cardContact}>
          <View>
            <View style={style.desc}>
                <Text style={style.descTitle}>Notes </Text>
              <Text style={style.descNotes}>For buying some socks</Text>
            </View>               
          </View>
        </View>
        <View>
        <Text style={style.title}>Transfer To</Text>
      </View>
      <View style={{margin: 3}}>
        <View style={style.cardContact}>
          <View>
            <Image 
            source={require('../../assets/images/michael.png')} 
            style={style.image}/>
          </View>
          <View>
          <View style={style.detail}>
            <Text style={style.name}>samuel</Text>
            <Text style={style.phone}>+62 0987654</Text>
          </View>               
          </View>
        </View> 
      </View> 
        <View style={{marginTop: 50}}>
            <Button
              onPress={()=> navigation.navigate('Home')}
              backgroundColor="#6379f4"
              mode="contained">
              Back To Home
            </Button>
          </View> 
      </View> 
    </ScrollView>
  );
};

export default Success;

const style = StyleSheet.create({
  scrollview: {
    backgroundColor: '#e9eef7'
  },
  success: {
    alignItems:'center',
    marginTop: 30
  },
  imageSuccess: {
    height: 60,
    width: 60,
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
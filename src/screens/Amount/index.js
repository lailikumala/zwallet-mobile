import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

const Amount = ({navigation}) => {
  return (
    <ScrollView style={style.scrollview}>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Transfer')}>
        <Image 
          source={require('../../assets/img/arrow-left.png')} 
          style={style.arrowLeft}/>
      </TouchableOpacity>
        <View style={{flexDirection: 'column'}}>
          <Text
            style={style.transfer}>
            Transfer
          </Text>
        </View>
      </View>
      <View>
      <View style={{margin: 20}}>
        <View style={style.cardContact}>
          <View>
            <Image 
            source={require('../../assets/images/michael.png')} 
            style={style.image}/>
          </View>
          <View>
          <View style={style.detail}>
            <TouchableOpacity>
              <Text style={style.name}>samuel</Text>
            </TouchableOpacity>
            <Text>+62 0987654</Text>
          </View>               
          </View>
        </View> 
      </View> 
        <View>
          <Text
            style={style.available}>
            Rp. 120.000 Available
          </Text>
          <TextInput
            style={style.inputPrice}
            placeholder="0.00"
          />
          <TextInput
            style={style.inputNotes}
            placeholder="Add some notes"
          />
          <View style={{marginTop: 50}}>
            <Button
              onPress={()=> navigation.navigate('Confirm')}
              backgroundColor="#6379f4"
              mode="contained">
              continue
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Amount;

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
  cardContact: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 80
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
    fontSize: 18
  },
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
}
});
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {useDispatch} from 'react-redux';
import { ScrollView } from 'react-native';


const Notification = (props) => {
  const dispatch = useDispatch();
  return (
        <>
          <ScrollView style={{backgroundColor: '#e9eef7'}}>
            <TouchableOpacity
              onPress={()=> props.navigation.navigate('Profile')}>
              <Image 
                source={require('../../assets/img/arrow-left.png')} 
                style={style.arrowLeft}/>
            </TouchableOpacity>
            <Text style={style.findReciever}>Notification</Text>
            <Text style={style.found}>Today</Text>
            <View style={style.cardContact}>
              <View>
                <Image 
                source={require('../../assets/img/income.png')} 
                style={style.image}/>
              </View>
              <View>
                <View style={style.detail}>
                  <TouchableOpacity>
                    <Text>Transfered from Joshua Lee</Text>
                  </TouchableOpacity>
                  <Text style={style.name}>Rp220.000</Text>
                </View>
              </View>
            </View>
            <Text style={style.found}>This Week</Text>
            <View style={style.cardContact}>
              <View>
                <Image 
                source={require('../../assets/img/expense.png')} 
                style={style.image}/>
              </View>
              <View>
                <View style={style.detail}>
                  <TouchableOpacity>
                    <Text >Transfer to Jessica Lee</Text>
                  </TouchableOpacity>
                  <Text style={style.name}>Rp100.000</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
  
  );
};

export default Notification;

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
    marginTop: 14,
    color: '#666'
  },
  cardContact: {
    width: '100%',
    borderRadius: 7,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  image: {
    width: 30, 
    marginLeft: 20, 
    height: 30, 
    marginVertical: 22
  },
  detail: {
    marginTop: -60,
    alignItems: 'flex-start',
    marginHorizontal: 80,
  },
  name: {
    marginBottom: 9,
    fontWeight: 'bold'
    
  }
  });

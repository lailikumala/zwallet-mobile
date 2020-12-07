import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Login, 
  SignUp,
  CreatePin,
  PinSuccess,
  EmailConfirm, 
  ResetPassword,
  Home, 
  Transfer,
  Amount,
  Confirm,
  ConfirmPin,
  Success,
  TopUp,
  Profile,
  PersonalInfo,
  ManagePhone,
  AddPhone,
  ChangePassword,
  ChangePin,
  Notification
} from '../screens';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const HomeStack = () => {

  const Auth = useSelector((s)=> s.Auth)
  return (
      <Stack.Navigator>
      {Auth.data.token ? (
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
      ):(
        <Stack.Screen  
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
      )}
        <Stack.Screen  
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="CreatePin" 
          component={CreatePin} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="PinSuccess" 
          component={PinSuccess} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="EmailConfirm" 
          component={EmailConfirm} 
          options={{ headerShown: false }}
        />
         <Stack.Screen  
          name="ResetPassword" 
          component={ResetPassword} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="Transfer" 
          component={Transfer} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="Amount" 
          component={Amount} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="Confirm" 
          component={Confirm} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="ConfirmPin" 
          component={ConfirmPin} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="Success" 
          component={Success} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="TopUp" 
          component={TopUp} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="Profile" 
          component={Profile} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="PersonalInfo" 
          component={PersonalInfo} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="ManagePhone" 
          component={ManagePhone} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="AddPhone" 
          component={AddPhone} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="ChangePassword" 
          component={ChangePassword} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="ChangePin" 
          component={ChangePin} 
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="Notification" 
          component={Notification} 
          options={{ headerShown: false }}
        />
        
    </Stack.Navigator>
  );
};

const MainNavigator = (props) => {
    return(
        <NavigationContainer>
            <HomeStack navigation={props.navigation} />
        </NavigationContainer>
    )
}

export default MainNavigator
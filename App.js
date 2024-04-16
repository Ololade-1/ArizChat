import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './SRC/Screens/LoginSignup/login/login';
import signup_enteremail from './SRC/Screens/LoginSignup/signup/signup_enteremail';
import signup_enterverificationcode from './SRC/Screens/LoginSignup/signup/signup_enterverificationcode';
import signup_chooseusername from './SRC/Screens/LoginSignup/signup/signup_chooseusername';
import signup_choosepassword from './SRC/Screens/LoginSignup/signup/signup_choosepassword';
import signup_accountcreated from './SRC/Screens/LoginSignup/signup/signup_accountcreated';

import forgetpassword_enteremail from './SRC/Screens/LoginSignup/forgetpassword/forgetpassword_enteremail';
import forgetpassword_enterverificationcode from './SRC/Screens/LoginSignup/forgetpassword/forgetpassword_enterverificationcode';
import forgetpassword_accountrecovered from './SRC/Screens/LoginSignup/forgetpassword/forgetpassword_accountrecovered';
import forgetpassword_choosepassword from './SRC/Screens/LoginSignup/forgetpassword/forgetpassword_choosepassword';
import mainpage from './SRC/Screens/mainpage/mainpage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animination: 'slide_from_right'
      }}>
        <Stack.Screen name="login" component={login} 
        options = {{
          // animination : 'slide_from_right'
        }}/>
        <Stack.Screen name="signup_enteremail" component={signup_enteremail} />
        <Stack.Screen name="signup_enterverificationcode" component={signup_enterverificationcode} />
        <Stack.Screen name="signup_chooseusername" component={signup_chooseusername} />
        <Stack.Screen name="signup_choosepassword" component={signup_choosepassword} />
        <Stack.Screen name="signup_accountcreated" component={signup_accountcreated} />

        <Stack.Screen name="forgetpassword_enteremail" component={forgetpassword_enteremail} />
        <Stack.Screen name="forgetpassword_enterverificationcode" component={forgetpassword_enterverificationcode} />
        <Stack.Screen name="forgetpassword_accountrecovered" component={forgetpassword_accountrecovered} />
        <Stack.Screen name="forgetpassword_choosepassword" component={forgetpassword_choosepassword} />
      
        <Stack.Screen name="mainpage" component={mainpage} />
      

      
      
      
      
      
      
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

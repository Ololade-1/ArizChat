import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import logo from "../../../../assets/logo.png";
import { containerFull, hr80, logo1 } from '../../../CommonCss/pagecss';
import { formBtn, formHead, formInput, formTextLinkCenter, formTextLinkRight } from "../../../CommonCss/formcss";

const Login = ({navigation}) => {
  return (
    <View style={containerFull}>
      <Image source={logo} style={styles.logo} />
      <Text style = {formHead}>Login</Text>
      <TextInput placeholder='Enter your Email' style={formInput} />
      <TextInput placeholder='Enter your Password' style={formInput}
       secureTextEntry = {true} />

    <Text style ={formTextLinkRight}
            onPress={() => navigation.navigate
            ('forgetpassword_enteremail')}>Forgot Password</Text>

<Text style ={formBtn}
            onPress={() => navigation.navigate
            ('mainpage')}>Submit</Text>

            <View style ={hr80}></View>

            <Text style ={formTextLinkCenter}>Don't have an account ?
            <Text style ={{color:'white'}} onPress={() =>
               navigation.navigate('signup_enteremail')}>Signup</Text> </Text>

    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 400,
  },
});

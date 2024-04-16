import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss';
import { MaterialIcons } from '@expo/vector-icons';
import logo from "../../../../assets/logo.png";
import { formHead2, formInput, formBtn } from '../../../CommonCss/formcss';

const forgotpasswordEnterVerificationCode = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={goback}>
        <MaterialIcons name="arrow-back" size={24} color="grey" />
        <Text style={{
          color: 'grey',
          fontSize: 15,
          marginLeft: 5,
          fontWeight: 'bold',
        }}>
          Go Back
        </Text>
      </TouchableOpacity>

      <Image source={logo} style={styles.logo} />
     
      <Text style={formHead2}>A verification code has been sent to your Email</Text>
     
      <TextInput placeholder="Enter your 6-digit code" style={formInput} />
      
  
       <Text style ={formBtn}
       onPress={() => navigation.navigate('forgetpassword_choosepassword')}>
         Next</Text>
    

    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 400, 
    resizeMode: 'contain'
  },
});

export default forgotpasswordEnterVerificationCode;

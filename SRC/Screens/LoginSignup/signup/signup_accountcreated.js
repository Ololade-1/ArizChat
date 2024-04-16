import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { containerFull, goback, logo1, row } from '../../../CommonCss/pagecss';
import { MaterialIcons } from '@expo/vector-icons';
import logo from "../../../../assets/logo.png";
import { formHead2, formInput, formBtn, } from '../../../CommonCss/formcss';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const signup_accountcreated= ({ navigation }) => {
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
     
        <View style={row}>
        <MaterialCommunityIcons name="check-decagram" size={24} color="green" />
        <Text style={formHead2}> Account created successfully </Text>
        </View>
    
        <Text style ={formBtn}
       onPress={() => navigation.navigate('login')}>
         Let's Roll </Text>
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

export default signup_accountcreated;

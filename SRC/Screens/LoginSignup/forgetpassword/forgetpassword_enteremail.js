import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss';
import { MaterialIcons } from '@expo/vector-icons';
import logo from "../../../../assets/logo.png";
import { formHead2, formInput , formBtn } from '../../../CommonCss/formcss';

const forgetpassword_enteremail= ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={goback}>
        <MaterialIcons name="arrow-back" size={24} color="grey" />
        <Text style={{
          color:'grey',
          fontSize:15,
          marginLeft:5,
          fontWeight: 'bold',
        }}>
          Go Back
        </Text>
      </TouchableOpacity>

      <Image source={logo} style={styles.logo1} />
     
      <Text style ={formHead2}>Verify your Email </Text>
     
     <TextInput placeholder= "Enter your Email" style={formInput} />
     <Text style ={formBtn}
            onPress={() => navigation.navigate('forgetpassword_enterverificationcode')}>
              Next</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  logo1: {
    width: 400, 
    height: 400, 
    resizeMode: 'contain'
  },
});

export default forgetpassword_enteremail;




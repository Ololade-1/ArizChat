import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { containerFull, goback } from '../../../CommonCss/pagecss';
import { MaterialIcons } from '@expo/vector-icons';



const Signup_EnterEmail = ({ navigation }) => {
  return (
    <View style={containerFull}>

      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={goback}>
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
      {/* <Text>signup_EnterEmail</Text> */}
    </View>
  );
}

export default Signup_EnterEmail;

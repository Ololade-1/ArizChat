import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import logo from '../../assets/logo.png';
import { icon1, logo2} from '../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';


const Topnavbar = () => {
  return (
    <View style={styles.container}>
      {/* Image component with specified style */}
      <Image source={logo} style={styles.logo} />
      <Ionicons name="chatbubbles" size={24} color="black" style ={icon1}/>
    </View>
  );
};

export default Topnavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    top: 0,
    zIndex: 100,
    backgroundColor: "#111111",
  },
  logo: {
    width: 100,
    height: 70,
  }
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Bottomnavbar = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="home-variant" size={24} color="white" />
      <Fontisto name="search" size={24} color="white" />
      <Ionicons name="ios-heart" size={24} color="white" />
      <FontAwesome name="user-circle" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: "#111111",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 100,
    paddingVertical: 10,
  },
});

export default Bottomnavbar;

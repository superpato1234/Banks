import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListBanks from '../components/listBanks/ListBanks';

const Home = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>{'List banks App'}</Text>
      <ListBanks />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    color: '#55916c',
    marginBottom: 8,
  },
});

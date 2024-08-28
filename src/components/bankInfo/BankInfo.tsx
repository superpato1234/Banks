import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {bankInfo} from '../../types/banks';

const BankInfo = () => {
  const {params} = useRoute();
  const {age, bankName, description, url} = params?.bank as bankInfo;
  return (
    <View style={BankInfoStyles.bank}>
      <View style={BankInfoStyles.bankWrap}>
        <Image style={BankInfoStyles.image} source={{uri: url}} />
        <View style={BankInfoStyles.info}>
          <Text style={BankInfoStyles.title}>{'Nombre: ' + bankName}</Text>
          <Text style={BankInfoStyles.description}>
            {'Descripcion: ' + description}
          </Text>
          <Text style={BankInfoStyles.age}>{age + ' años'}</Text>
        </View>
      </View>
    </View>
  );
};

export default BankInfo;

const BankInfoStyles = StyleSheet.create({
  bank: {
    flex: 1,
    maxWidth: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 150,
  },
  bankWrap: {
    backgroundColor: '#6caa83',
    borderRadius: 16,
    overflow: 'visible',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 90,
    padding: 8,
  },
  image: {
    width: 160,
    aspectRatio: 1,
    borderRadius: 150,
    top: -80,
    position: 'absolute',
  },
  info: {
    width: '65%',
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    color: '#fff',
    paddingBottom: 8,
    textAlign: 'center',
  },
  age: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

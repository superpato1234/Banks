import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {bankInfo} from '../../types/banks';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../screens/screensNames';

interface ListBanksItemProps {
  item: bankInfo;
}
const ListBanksItem = ({item}: ListBanksItemProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate({
      name: screenNames.BankInfo,
      params: {bank: item},
    } as never);
  };

  return (
    <TouchableOpacity style={styles.itemWrap} onPress={handlePress}>
      <Image style={styles.image} source={{uri: item.url}} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.bankName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.age}>{item.age + ' años'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListBanksItem;

const styles = StyleSheet.create({
  itemWrap: {
    flexDirection: 'row',
    marginVertical: 8,
    borderRadius: 16,
    maxWidth: '100%',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: '#6caa83',
  },
  image: {
    width: '30%',
    aspectRatio: 1,
  },
  info: {
    width: '65%',
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  description: {
    fontSize: 12,
    fontWeight: '300',
    color: '#fff',
    paddingBottom: 8,
  },
  age: {
    color: '#fff',
  },
});

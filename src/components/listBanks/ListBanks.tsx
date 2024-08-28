import React, {useCallback} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import ListBanksItem from './ListBanksItem';
import {bankInfo} from '../../types/banks';
import useStorage from '../../hooks/useStorage';
interface ListBanksProps {
  bankList?: Array<bankInfo>;
}

const ListBanks = ({bankList}: ListBanksProps) => {
  const {value: listBank, loader, refresh} = useStorage('banks');

  const onRefresh = useCallback(() => {
    refresh();
  }, []);

  return (
    <FlatList
      data={bankList ? bankList : listBank}
      renderItem={({item}) => <ListBanksItem item={item} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={EmptyList}
      refreshControl={
        <RefreshControl refreshing={loader} onRefresh={onRefresh} />
      }
    />
  );
};

export default ListBanks;

const EmptyList = () => {
  return (
    <View style={EmptyListStyles.wrap}>
      <Text style={EmptyListStyles.text}>
        {'No se encontraron bancos \nDesliza para volver a cargar'}
      </Text>
    </View>
  );
};

const EmptyListStyles = StyleSheet.create({
  wrap: {
    paddingTop: 32,
    paddingBottom: 200,
  },
  text: {textAlign: 'center', color: '#6caa83'},
});

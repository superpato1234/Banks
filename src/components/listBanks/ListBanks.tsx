import React from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import ListBanksItem from './ListBanksItem';
import {bankInfo} from '../../types/banks';
const mock = [
  {
    age: 10,
    bankName: 'Paga Todo',
    description: 'Banco Paga Todo es Para Todos',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20',
  },
  {
    age: 11,
    bankName: 'BBVA Bancomer',
    description: 'BBVA Bancomer Creando Oportunidades',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-bbva.jpeg?alt=media&token=435ed70e-061b-4a80-a216-c69cea04f068',
  },
  {
    age: 9,
    bankName: 'Scotiabank México',
    description: 'Scotiabank Creando Tú decides, Nosotros te Asesoramos',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo.scotiabank.jpg?alt=media&token=1029cc0b-7bff-4f5c-90f7-d96ca60f9619',
  },
  {
    age: 7,
    bankName: 'Citibanamex',
    description: 'Citibanamex, lo mejor de México, lo mejor del mundo.',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-citi.png?alt=media&token=da97f3ad-34b2-4f7d-ae59-3169238993c7',
  },
  {
    age: 5,
    bankName: 'Banregio',
    description: 'Banregio: Somos el banco de creadores',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-banregio.png?alt=media&token=ae605bda-5698-4bf8-9639-d4fdc9579b5c',
  },
  {
    age: 10,
    bankName: 'Paga Todo',
    description: 'Banco Paga Todo es Para Todos',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20',
  },
  {
    age: 11,
    bankName: 'BBVA Bancomer',
    description: 'BBVA Bancomer Creando Oportunidades',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-bbva.jpeg?alt=media&token=435ed70e-061b-4a80-a216-c69cea04f068',
  },
  {
    age: 9,
    bankName: 'Scotiabank México',
    description: 'Scotiabank Creando Tú decides, Nosotros te Asesoramos',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo.scotiabank.jpg?alt=media&token=1029cc0b-7bff-4f5c-90f7-d96ca60f9619',
  },
  {
    age: 7,
    bankName: 'Citibanamex',
    description: 'Citibanamex, lo mejor de México, lo mejor del mundo.',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-citi.png?alt=media&token=da97f3ad-34b2-4f7d-ae59-3169238993c7',
  },
  {
    age: 5,
    bankName: 'Banregio',
    description: 'Banregio: Somos el banco de creadores',
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-banregio.png?alt=media&token=ae605bda-5698-4bf8-9639-d4fdc9579b5c',
  },
];
const mockk = [];

interface ListBanksProps {
  bankList?: Array<bankInfo>;
}

const ListBanks = ({bankList}: ListBanksProps) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <FlatList
      data={bankList ? bankList : mock}
      renderItem={({item}) => <ListBanksItem item={item} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={EmptyList}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
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

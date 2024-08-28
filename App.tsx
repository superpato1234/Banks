import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BankStack from './src/router/BankStack';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const getBanks = async () => {
  //   const res = await fetch(
  //     'https://dev.obtenmas.com/catom/api/challenge/banks',
  //   );
  //   const data = await res.json();

  //   setBankList(data);
  // };

  // useEffect(() => {
  //   getBanks();
  // }, []);
  // useEffect(() => {
  //   console.log(bankList);
  // }, [bankList]);

  return (
    <SafeAreaView style={[styles.safeAreaView, backgroundStyle]}>
      <NavigationContainer>
        <BankStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;

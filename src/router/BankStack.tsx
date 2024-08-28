import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import BankInfo from '../components/bankInfo/BankInfo';
import {screenNames} from '../screens/screensNames';
import {RootStackParamList} from '../types/stackScreenTypes';

const Stack = createStackNavigator<RootStackParamList>();

const BankStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.ListBank}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenNames.BankInfo}
        component={BankInfo}
        options={({route}) => ({
          title: route?.params?.bank?.bankName,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default BankStack;

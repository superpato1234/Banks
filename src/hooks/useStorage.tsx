import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {bankInfo} from '../types/banks';

const useStorage = (key: string) => {
  const [value, setValue] = useState(null);
  const [loader, setLoader] = useState(false);

  const getData = async () => {
    try {
      setLoader(true);
      const jsonValue = await AsyncStorage.getItem(key);
      setValue(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
    } finally {
      setLoader(false);
    }
  };

  const setData = async (object: Array<bankInfo>) => {
    try {
      setLoader(true);
      const jsonValue = JSON.stringify(object);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
    } finally {
      setLoader(false);
    }
  };

  const getBanks = async () => {
    const res = await fetch(
      'https://dev.obtenmas.com/catom/api/challenge/banks',
    );
    const data = await res.json();
    setData(data);
  };

  const refresh = () => {
    getBanks();
  };

  useEffect(() => {
    if (!value) {
      getBanks();
    }
    getData();
  }, [key]);

  return {value, refresh, loader};
};

export default useStorage;

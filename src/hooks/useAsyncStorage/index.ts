import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorage<K>() {
    const setStorageItem = async (key: string, value: K | any) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
          console.info(e);
        }
    }

    const getStorageItem = async (key: string) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          return jsonValue != null ? JSON.parse(jsonValue) : setStorageItem(key, {});
        } catch(e) {
          console.info(e);
        }
    }

    return { getStorageItem, setStorageItem }
}
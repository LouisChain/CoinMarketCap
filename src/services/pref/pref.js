import { AsyncStorage } from "react-native";

const storeData = async (key, values) => {
  try {
    await AsyncStorage.setItem(key, values);
  } catch (error) {
    console.log("Error saving pref: " + key + "-" + error);
  }
};

const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(value);
      return value;
    }
    return null;
  } catch (error) {
    console.log("Error fetching pref: " + key + "-" + error);
  }
};

export { storeData, retrieveData };

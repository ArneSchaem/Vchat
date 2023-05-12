import AsyncStorage from '@react-native-async-storage/async-storage';

// Überprüfen, ob der Benutzer angemeldet ist
export const isUserLoggedIn = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user !== null;
  } catch (error) {
    console.log('Error checking if user is logged in:', error);
    return false;
  }
};

// Benutzer automatisch einloggen
export const autoLogin = async (navigation) => {
  try {
    const user = await AsyncStorage.getItem('user');
    if (user !== null) {
      // Benutzer einloggen
      // ...
      navigation.navigate('Home'); // Navigation zur Hauptseite
    } else {
      navigation.navigate('Welcome'); // Navigation zur Anmeldeseite
    }
  } catch (error) {
    console.log('Error auto-logging in user:', error);
    navigation.navigate('Welcome');
  }
};

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet,Button,TouchableOpacity,navigation } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Settings = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsSwitch = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeSwitch = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const handleLogout = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    navigation.navigate('Welcome');
  };
  
  
  


  return (
    <View style={styles.container }>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsSwitch}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dark mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={handleDarkModeSwitch}
        />
      </View>
      <Button title="Logout" onPress={handleLogout} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 90,
   // marginTop: 200,
    
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Settings;

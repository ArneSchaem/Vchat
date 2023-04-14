import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsSwitch = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeSwitch = () => {
    setDarkModeEnabled(!darkModeEnabled);
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

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>Content goes here</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: Platform.OS === 'android' ? 20 : 0, // adjust the value until the icons are positioned where you want them
      height: 20,
      marginBottom: 10,
    },
  });
  
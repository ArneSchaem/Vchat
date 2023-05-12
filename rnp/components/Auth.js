import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { View, Text, Settings, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import SettingsPage from './SettingsPage';
import HomePage from './HomePage';
import Welcome from './Welcome';


import ImageGallery from "./ImageGallery"
import camerapage from './CameraPage';
import MessagePage from "./MessagePage";
import ChatScreen from './ChatScreen';
import CameraPage from './CameraPage';
import AsyncStorage from '@react-native-async-storage/async-storage';









const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 


const PeopleIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name="person-outline"
        size={32}
        color="black"
      />
    </TouchableOpacity>
  );
};



function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator    //UNTERE LEISTE
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          overflow: 'hidden',
          elevation: 0,
          backgroundColor: '#fff',
          height: 70,
          paddingBottom: 10
        },
        tabBarLabelStyle: {
          display: 'none'
        }
      }}
    > 

      


<Tab.Screen
  name="HomePage"
  component={HomePage}
  options={{
    tabBarIcon: ({ color, size }) => (
<Feather name="home" size={24} color="black" />    ),
    headerShown: true,
    
    headerTitle: '',
    headerStyle: {
      height: 110,
      backgroundColor: '#fff',
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerLeft: () => (
      <View style={{height: 50, }} >
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width: 430, }}>
        <View style={{ flexDirection: 'row' }}>
        {[...Array(10)].map((_, i) => (
          <View style={{ marginHorizontal: 23 }} key={i}>
          <PeopleIcon onPress={() => navigation.navigate('ChatScreen')} />
          </View>
        ))}
      </View>
      
      </ScrollView>
      </View>

      
    ),
    
  }}
/>

   <Tab.Screen name="MessagePage" component={MessagePage} options={{
        tabBarIcon: ({ color, size }) => (
<Ionicons name="chatbox-outline" size={24} color="black" />       ),
         headerShown: true,
        headerTitle: '',
        headerStyle: {
        height: 110,
        backgroundColor: 'white',
        borderBottomWidth: 0,
        elevation: 0,
          
        },
        headerLeft: () => (
          <View style={{height: 50, }} >
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width: 430, }}>
            <View style={{ flexDirection: 'row' }}>
            {[...Array(10)].map((_, i) => (
              <View style={{ marginHorizontal: 23 }} key={i}>
          <PeopleIcon onPress={() => navigation.navigate('ChatScreen')} />
              </View>
            ))}
          </View>
          
          </ScrollView>
          </View>
    
          
        ),
      }}
      />
      
        
      <Tab.Screen name="CameraPage" component={CameraPage} 
  options={{
    tabBarIcon: ({ color, size }) => (
      <Feather name="camera" size={24} color="black" />
    ),
    headerRight: "",
    headerTitle: '',
    headerStyle: {
      height: 110,
    },
    tabBarVisible: false, // hier hinzufügen
    tabBarStyle: { display: 'none' },
  }}
/>

<Tab.Screen name="ImageGallery" component={ImageGallery} options={{
        tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="view-grid-outline" size={24} color="black" />),        headerShown: true,
        headerTitle: '',
        headerShown: false,
        headerStyle: {
          height: 110,
          backgroundColor: '#fff',
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={32}
            color="black"
            style={{ marginLeft: 10 }}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="notifications-outline"
            size={32}
            color="black"
            style={{ marginRight: 10 }}
          />

          
          
          
        ),
      }}
      />




      <Tab.Screen name="SettingsPage" component={SettingsPage} options={{
        tabBarIcon: ({ color, size }) => (
<Feather name="settings" size={24} color="black" />        ),
        headerRight: "",
        headerTitle: '',
        headerStyle: {
          height: 110,}
        
      }}
      />
    </Tab.Navigator>
  );
}





export default function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const status = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(status === 'true');
    };
    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    // Return a loading indicator or splash screen
    return null;
  }

  
  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal"
        }}
        initialRouteName={isLoggedIn ? "Home" : "Welcome"} // Set the initial screen based on login status
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

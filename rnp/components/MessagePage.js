import React, { useState, useEffect } from 'react';
import { View, Image,Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ChatList = ({ navigation }) => {
  const [chats, setChats] = useState([
    { id: '1', name: 'Person', message: 'Text', time: '11:45' },
    { id: '2', name: 'Person', message: 'Text', time: '11:45' },
    { id: '3', name: 'Person', message: 'Text', time: '11:45' },
    { id: '4', name: 'Person', message: 'Text', time: '11:45' },
    { id: '5', name: 'Person', message: 'Text', time: '11:45' },
    { id: '6', name: 'Person', message: 'Text', time: '11:45' },
    { id: '7', name: 'Person', message: 'Text', time: '11:45' },
    { id: '8', name: 'Person', message: 'Text', time: '11:45' },
    { id: '9', name: 'Person', message: 'Text', time: '11:45' },
    { id: '10', name: 'Person', message: 'Text', time: '11:45' },
    { id: '11', name: 'Person', message: 'Text', time: '11:45' },
    { id: '12', name: 'Person', message: 'Text', time: '11:45' },
    { id: '13', name: 'Person', message: 'Text', time: '11:45' },




  ]);

  const handleChatPress = (item) => {
    navigation.navigate('ChatScreen', { chat: item });
  };
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=14')
      .then(response => response.json())
      .then(data => {
        const imageUrls = data.results.map(result => result.picture.large);
        setImages(imageUrls); 
      })
      .catch(error => console.log(error));
  }, []);
  
  const getImageForItem = (index) => {
    return images[index % images.length];
  }
  
  const renderChat = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => handleChatPress(item)}>
        <View style={styles.chatContainer}>
          <View style={styles.chatIconContainer}>
            <Image style={styles.image} source={{ uri: getImageForItem(index) }} />
          </View>
          <View style={styles.chatContent}>
            <View style={styles.chatHeader}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatTime}>{item.time}</Text>
            </View>
            <Text style={styles.chatMessage}>{item.message}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  

  return (
    <FlatList
  data={chats}
  renderItem={renderChat}
  keyExtractor={item => item.id}
  contentContainerStyle={{ paddingBottom: 69 }} // add some padding to the bottom
/>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#f1f1f1',
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatTime: {
    color: '#666',
  },
  chatMessage: {
    color: '#666',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});

export default ChatList;

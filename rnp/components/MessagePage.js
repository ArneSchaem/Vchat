import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
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

  const renderChat = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleChatPress(item)}>
        <View style={styles.chatContainer}>
          <View style={styles.chatIconContainer}>
            <Ionicons name="person-outline" size={24} color="#555" />
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
    padding: 10,
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
});

export default ChatList;

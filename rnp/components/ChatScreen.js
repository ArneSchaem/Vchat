import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ChatScreen = ({ navigation }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, inputMessage.trim()]);
      setInputMessage('');
    }
  };
  const handleBack = () => {
    navigation.navigate('MessagePage');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View key={index} style={styles.message}>
            <Text>{message}</Text>
          </View>
        ))}
      </ScrollView> 
      <TouchableOpacity style={styles.buttonLeft} onPress={handleBack}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
          placeholder="Type a message..."
          placeholderTextColor="#999"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Senden</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 25,
    borderRadius: 20,
    

    
  },
  messagesContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingVertical: 16,
    paddingHorizontal: 22,

  },
  message: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 18,

    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:28,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ddd',
    marginBottom: 10,
    borderRadius: 25,
    height: 100,

  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,

  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonLeft: {
    position: 'absolute',
    top: 0,
    left: 20,
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
    marginTop: 40,
  },
});

export default ChatScreen;

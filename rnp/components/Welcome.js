import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  Dimensions, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Pressable,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import { AntDesign } from '@expo/vector-icons';

import facebookLogo from './img/facebook.png';
import appleLogo from './img/apple.png';
import googleLogo from './img/google.png';

export default function Welcome() {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate('Home');
  };

  
 


  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const bottomSheetRefTwo = useRef(null);

  const closeref = () => {
    bottomSheetRefTwo.current.open();    
  };

  const screenWidth = Dimensions.get('window').width;
  const marginHorizontal = screenWidth * 0.04; 
  const borderWidth = 1;

  const Logo = ({ source, size }) => {
    return (
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          resizeMode: 'contain',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.lineStyle} />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={openBottomSheet}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>test</Text>
        </Pressable>
  
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        height={750}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          wrapper: { //hintegrund
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: { //leiste
            backgroundColor: '#000',
            width: 60,
          },
        }}>
     
        <View style={styles.logincontainer}>
          <Text style={styles.logo}>Welcome back!</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="black"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: borderWidth, flex: 1, marginLeft: marginHorizontal }} />
      <Text style={{ marginHorizontal: marginHorizontal / 2 }}>or</Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: borderWidth, flex: 1, marginRight: marginHorizontal }} />
    </View>
    <View style={styles.container2}>
      <View style={styles.square}>
        <Logo source={facebookLogo} size={40} />
      </View>
      <View style={styles.square}>
        <Logo source={appleLogo} size={70} />
      </View>
      <View style={styles.square}>
        <Logo source={googleLogo} size={45} />
      </View>
    </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
  <View>
    <View style={styles.bottomButtonContainer}>
      <TouchableOpacity style={styles.bottomButton} onPress={closeref}>
        <Text style={styles.bottomButtonText}>button 2</Text>
      </TouchableOpacity>
    </View>  
  </View>
    </View>
      </BottomSheet>
        <BottomSheet
          ref={bottomSheetRefTwo}
          height={750}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            wrapper: { //hintegrund
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            draggableIcon: { //leiste
              backgroundColor: '#000',
              width:50,
            } ,
          }}>
        <View style={styles.bottomSheet}>
          <Text style={styles.bottomSheetText}>Hello</Text>
        </View>
      </BottomSheet>
    </View>
    
  );
}






const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  textClickable: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textShadowColor: '#888',
  },
  textClickableNoShadow: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  
  
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 70,
    height: 70,
    margin: 10,
    marginTop:40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 7,

  },
  imagelogo: {
    flex: 1,
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  
  
  

  logincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginBottom: 70,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 7,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginButton: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 11,
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#121212',
    marginTop: 50,
    marginBottom: 30,
  },
  descriptionContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 30,
  },
  bottomSheetButtonText1: {
    color: 'blue',
    

  },
  
  bottomSheetButtonText2: {
    color: 'green',
    marginTop: 20,

  },


  description: {
    fontSize: 20,
    color: '#121212',
    marginLeft: 10,
    marginRight: 30,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 120,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#282828',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 31,
    letterSpacing: 3.25,
    color: '#fff',
    fontWeight: 'bold',
  },
  
});

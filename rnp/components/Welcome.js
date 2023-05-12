import React, { useRef, useState, useEffect, } from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  Button,
  TouchableWithoutFeedback,
  CustomInput,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import BottomSheet from 'react-native-raw-bottom-sheet';
import facebookLogo from './img/facebook.png';
import appleLogo from './img/apple.png';
import googleLogo from './img/google.png';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';





  //  'Nexa-Trial-Bold': require('/Users/arne/Documents/Projekte/Vchat/rnp/assets/fonts/Nexa-Trial-Bold.ttf'),



export default function WelcomePage({ navigation }) {
    

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    try {
      if (email === '1' && password === '2') {
        // Speichern Sie den Anmeldestatus als "true" im Speicher
        await AsyncStorage.setItem('isLoggedIn', 'true');
        // Navigieren Sie zur Hauptseite
        closeBottomSheet();
         navigation.navigate('Home');
      } else {
        // Zeigen Sie eine Fehlermeldung an, wenn die Anmeldeinformationen falsch sind
        Alert.alert('Falsche Anmeldeinformationen');
      }
    } catch (error) {
      console.log('Fehler beim Speichern des Anmeldestatus:', error);
    }
  };

    
    
    
  

    

    const buttonAnimation = useRef(new Animated.Value(1)).current;
    
    const onPressIn = () => {
      Animated.timing(buttonAnimation, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };

  
    const onPressOut = () => {
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };
    const scaleStyle = {
      transform: [{ scale: buttonAnimation }],
    };

  
 

  
  const bottomSheetRef = useRef(null);
  const bottomSheetRef2 = useRef(null);

  const handlePress = () => {
    navigation.navigate('Home');
    closeBottomSheet();
  };

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const openBottomSheetTwo = () => {
    bottomSheetRef2.current.open();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
  };

  const closeBottomSheetTwo = () => {
    bottomSheetRef2.current.close();
  };

  const openBottomSheet3 = () => {
    console.log('Button Sheet pressed!');
    closeBottomSheetTwo();
    setTimeout(() => {
      openBottomSheet();
    }, 300);
  };

  const onPressButtonSheet = () => {
    console.log('pressed');
    closeBottomSheet();
    setTimeout(() => {
      openBottomSheetTwo();
    }, 300);
  };

  const screenWidth = Dimensions.get('window').width;
  const marginHorizontal = screenWidth * 0.04;
  const borderWidth = 1;

  const Logo = ({ source, size, posi, marginLeft,
  }) => {
    return (
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          resizeMode: 'contain',
          position:posi,
          marginLeft:marginLeft,

        }}
      />
    );
  };

  const [loaded] = useFonts({
    'Nexa-Trial-Bold': require('/Users/arne/Documents/Projekte/Vchat/rnp/assets/fonts/Nexa-Trial-Bold.ttf'),
    'RobotoCondensed-Bold': require('/Users/arne/Documents/Projekte/Vchat/rnp/assets/fonts/RobotoCondensed-Bold.ttf'),

    
  });
  
    if (!loaded) {
      return null;
    }
    

      
      const logicbutton = () => {
        handleLogin(email, password);
        openBottomSheet();
        
      };
   
        






  return (
    <View style={styles.container}>
      
      <View style={styles.lineStyle} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={openBottomSheet}>
      <Animated.View style={[styles.firstloginButton, scaleStyle]}>
          <Text style={styles.firstbuttonText}>Log in</Text>
          </Animated.View>
        </TouchableOpacity>


        <View style={styles.rowContainer}>
          <Text style={styles.textLabel}>Don't have an account?</Text>
          <Pressable
            onPress={openBottomSheetTwo}
            android_ripple={{ color: 'transparent' }}
            style={styles.signUpButtonContainer}
          >
            <Text style={styles.signUpButtonText}> Sign up</Text>
          </Pressable>
        </View>
      </View>

      <BottomSheet
  onPress={openBottomSheetTwo}
  ref={bottomSheetRef}
  height={750}
  closeOnDragDown={true}
  closeOnPressMask={true}
  customStyles={{
    container: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    wrapper: { // hintegrund
      backgroundColor: 'rgba(0,0,0,0.0)',
    },
    draggableIcon: { // leiste
      backgroundColor: '#000',
      width: 60,
    },
  }}
>
  <View style={styles.logincontainer}>
    <Text style={styles.buttonsheettitle}>Welcome back!</Text>
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        placeholderTextColor="black"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email} onChangeText={setEmail}
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
        
        value={password} onChangeText={setPassword} 
      />
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:20, }}>
      <View style={{ borderBottomColor: '#62676D', borderBottomWidth: borderWidth, flex: 1, marginLeft: marginHorizontal }} />
      <Text style={{ color:"#62676D",marginHorizontal: marginHorizontal / 2 ,}}>or</Text>
      <View style={{ borderBottomColor: '#62676D', borderBottomWidth: borderWidth, flex: 1, marginRight: marginHorizontal }} />
    </View>
    <View style={styles.container2}>
      <TouchableOpacity>
        <View style={styles.square}>
          <Logo source={facebookLogo} size={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.square}>
          <Logo source={appleLogo} size={70} />
        </View>
      </TouchableOpacity>
      <View style={styles.square}>
        <TouchableOpacity>
          <Logo source={googleLogo} size={45} />
        </TouchableOpacity>
      </View>
    </View>
    
    <TouchableOpacity
    activeOpacity={1}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
   
    onPress={logicbutton}>
      <Animated.View style={[styles.loginButton, scaleStyle]}>
          <Text style={styles.loginText}>Log in</Text>
          </Animated.View>
    </TouchableOpacity>
    
    <View style={styles.rowContainer2}>
      <Text style={styles.textLabel2}>Don't have an account?</Text>
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          onPress={onPressButtonSheet}
          android_ripple={{ color: 'transparent' }}
          style={styles.signUpButtonContainer2}
        >
          <Text style={styles.signUpButtonText2}> Sign up</Text>
        </Pressable>
      </View>
    </View>
    <View>
    </View>
  </View>
</BottomSheet>
<BottomSheet
  ref={bottomSheetRef2}
  height={750}
  closeOnDragDown={true}
  closeOnPressMask={true}
  customStyles={{
    container: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    wrapper: { // hintegrund
      backgroundColor: 'rgba(0,0,0,0.0)',
    },
    draggableIcon: { // leiste
      backgroundColor: '#000',
      width:40,
    } ,
  }}
>
<View style={styles.signcontainer}>
  <Text style={styles.secondbuttonsheettext}>Create</Text>
  <Text style={styles.secondbuttonsheettext2}>an Account</Text>

<TouchableOpacity style={styles.facebookbuttoncontainer}>
      
                <Logo source={facebookLogo} size={30} posi={"absolute"} marginLeft={10}/>

      <Text style={styles.facebookbuttontext}>Continue with Facebook</Text>
    </TouchableOpacity>


<TouchableOpacity style={styles.googlebuttoncontainer}>
      
                <Logo source={googleLogo} size={30} posi={"absolute"} marginLeft={10}/>

      <Text style={styles.googlebuttontext}>Continue with Google</Text>
    </TouchableOpacity>



<TouchableOpacity style={styles.applebuttoncontainer}>
      
                <Logo source={appleLogo} size={60} posi={"absolute"} marginLeft={-5} />

      <Text style={styles.applebuttontext}>Continue with Apple</Text>
    </TouchableOpacity>
    <View style={styles.separator}>
      <View style={[styles.sepline, { borderBottomWidth: borderWidth, marginLeft: marginHorizontal }]} />
      <Text style={[styles.septext, { color: '#62676D' }]}>or</Text>
      <View style={[styles.sepline, { borderBottomWidth: borderWidth, marginRight: marginHorizontal }]} />
    </View>


<TouchableOpacity style={styles.mailbuttoncontainer} onPress={openBottomSheet3}>
      
<AntDesign name="mail" size={28} color="black" posi={"absolute"} marginLeft={-5} />
      <Text style={styles.mailbuttontext}>Continue with Mail</Text>
    </TouchableOpacity>
</View>
</BottomSheet>

    </View>
    
  );
}






const styles = StyleSheet.create({
  // Text styles
  secondbuttonsheettext: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:-10,
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 38,
    marginBottom: -5,
  

  },
  
  secondbuttonsheettext2: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 38,
    marginBottom:70,
    fontFamily: 'RobotoCondensed-Bold',


  },
  
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sepline: {
    borderBottomColor: '#62676D',
    flex: 1,
  },
  septext: {
    marginHorizontal: 8,
    color: '#000',

  },
  facebookbuttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    height: 50,
    marginBottom: 20,
    width: '90%',
    borderWidth: 1,
    borderColor: '#1D1F42',
    paddingHorizontal: 20,
  },
  googlebuttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    height: 50,
    marginBottom: 20,
    width: '90%',
    borderWidth: 1,
    borderColor: '#1D1F42',
    paddingHorizontal: 20,
  },
  applebuttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    height: 50,
    marginBottom: 30,
    width: '90%',
    borderWidth: 1,
    borderColor: '#1D1F42',
    paddingHorizontal: 20,
  },
  mailbuttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    height: 50,
    marginTop: 30,
    marginBottom: 20,
    width: '90%',
    borderWidth: 1,
    borderColor: '#1D1F42',
    paddingHorizontal: 20,
  },
 
  facebookbuttontext: {
    fontSize: 18,
    marginLeft:30,
    color: '#1D1F42',
    fontFamily: 'Nexa-Trial-Bold',

  },
  googlebuttontext: {
    fontSize: 18,
    marginLeft:30,
    color: '#1D1F42',
    fontFamily: 'Nexa-Trial-Bold',

  },
  applebuttontext: {
    fontSize: 18,
    marginLeft:30,
    color: '#1D1F42',
    fontFamily: 'Nexa-Trial-Bold',

  },
  mailbuttontext: {
    fontSize: 18,
    marginLeft:10,
    color: '#1D1F42',
    fontFamily: 'Nexa-Trial-Bold',

  },

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

// Container styles
container: {
  flex: 1,
  backgroundColor: "#3647E2",
  alignItems: 'center',
  justifyContent: 'center',
},
container2: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "#fff",
},
logincontainer: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  
},

// Logo styles
buttonsheettitle: {
  fontSize: 45,
  color: 'black',
  marginBottom: 70,
  fontFamily: 'Nexa-Trial-Bold',
},
square: {
  width: 70,
  height: 70,
  margin: 10,
  marginTop:40,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#1D1F42',
  borderRadius: 10,
},
imagelogo: {
  flex: 1,
  width: '80%',
  height: '80%',
  resizeMode: 'contain',
},

// Input styles
inputView: {
  width: '90%',
  backgroundColor: 'white',
  borderRadius: 7,
  height: 50,
  marginBottom: 20,
  justifyContent: 'center',
  padding: 20,

  
  borderWidth: 1,
  borderColor: '#1D1F42',
},

inputView2: {
  flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    height: 50,
    
    marginBottom: 20,
    width: '90%',
    borderWidth: 1,
    borderColor: '#1D1F42',
},

inputText: {
  height: 50,
  color: 'black',
},
inputText1: {
 

  width: '100%', // Breite auf 100% setzen

  color: 'black',
},
inputText2: {
  color: 'black',
  width: '100%', // Breite auf 100% setzen
},
inputText3: {
  width: '100%', // Breite auf 100% setzen

  color: 'black',
},
inputText4: {
  color: 'black',
  width: '100%', // Breite auf 100% setzen

},

// Button styles
firstloginButton: {
  alignItems: 'center',
  paddingVertical: 16,
  paddingHorizontal: 60,
  borderRadius: 20,
  elevation: 3,
  backgroundColor: '#fff',
  marginBottom: 10,
  shadowColor: '#ddd',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 1.25,
  shadowRadius: 0,
  elevation: 5,
},

firstbuttonText: {
  color: 'black',
  fontSize: 20,
  fontFamily: 'Nexa-Trial-Bold',

},


loginButton: {
  alignItems: 'center',
  paddingVertical: 16,
  paddingHorizontal: 30,
  borderRadius: 20,
  elevation: 3,
  color: 'black',

  backgroundColor: '#fff',
  marginBottom: 10,
  shadowColor: '#ddd',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity:1.25,
  shadowRadius: 0,
  elevation: 5,
  },
loginText: {
  color: 'black',
  fontSize: 20,
  fontFamily: 'Nexa-Trial-Bold',

},
forgot: {
  color: 'black',
  fontSize: 11,
},
buttonContainer: {
  position: 'absolute',
  bottom: 10,
  left: 0,
  right: 0,
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 120,
},


description: {
  fontSize: 20,
  color: '#121212',
  marginLeft: 10,
  marginRight: 30,
  },
  
  // Button styles
  buttonContainer: {
  position: 'absolute',
  bottom: 10,
  left: 0,
  right: 0,
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 120,
  },
  button: {
  alignItems: 'center',
  paddingVertical: 16,
  paddingHorizontal: 120,
  borderRadius: 20,
  elevation: 3,
  backgroundColor: '#fff',
  marginBottom: 40,
  shadowColor: '#ddd',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity:1.25,
  shadowRadius: 0,
  elevation: 5,
  },
  buttonText: {
  fontSize: 16,
  lineHeight: 31,
  letterSpacing: 3.25,
  color: '#040832',
  fontWeight: 'bold',
  fontFamily: 'Nexa-Trial-Bold',
  
  

  },
  rowContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop:20,

  },
  textLabel: {
  fontSize: 16,
  color: '#fff',
  fontWeight: '300',
  
  },
  signUpButtonContainer: {
  alignSelf: 'flex-start',
  
  },
  signUpButtonText: {
  fontSize: 16,
  color: 'white',
  fontWeight: 'bold',

  fontFamily: 'Nexa-Trial-Bold',

  },

  // Description styles
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
  description: {
    fontSize: 20,
    color: '#121212',
    marginLeft: 10,
    marginRight: 30,
    },
  
  // Sign In styles
  signcontainer: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  rowContainer2: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop:30,

  },
  textLabel2: {
  fontSize: 16,
  color: 'black',
  fontWeight: '300',
  },
  signUpButtonContainer2: {
  alignSelf: 'flex-start',
  },
  signUpButtonText2: {
  fontSize: 16,
  color: 'black',
  },
  signcontainer2: {
  flex: 1,
  backgroundColor: '#ddd',
  alignItems: 'center',
  justifyContent: 'center',
  },

});


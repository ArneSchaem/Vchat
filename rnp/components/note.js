/*import React from 'react';
import { FlatList, StyleSheet, View, Image } from 'react-native';

const images = [
  {
    id: '1',
    source: require('./img/picture1.jpg'),
  },
  {
    id: '2',
    source: require('./img/picture2.jpg'),
  },
  {
    id: '3',
    source: require('./img/picture3.jpg'),
  },
  {
    id: '4',
    source: require('./img/picture4.jpg'),
  },
  {
    id: '5',
    source: require('./img/picture5.jpg'),
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} />
    </View>
  );
};

const ImageList = () => {
  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  imageContainer: {
    height: 250,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});

export default ImageList;



// other version 
import React from 'react';
import { FlatList, StyleSheet, View, Image } from 'react-native';

const images = [
  {
    id: '1',
    source: require('./img/picture1.jpg'),
  },
  {
    id: '2',
    source: require('./img/picture2.jpg'),
  },
  {
    id: '3',
    source: require('./img/picture3.jpg'),
  },
  {
    id: '4',
    source: require('./img/picture4.jpg'),
  },
  {
    id: '5',
    source: require('./img/picture5.jpg'),
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} />
    </View>
  );
};

const ImageList = () => {
  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  imageContainer: {
    height: 250,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});

export default ImageList;


//HomeScreen 
import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width - 20;

const images = [
  { id: 1, uri: 'https://picsum.photos/id/10/800/800' },
  { id: 2, uri: 'https://picsum.photos/id/20/800/800' },
  { id: 3, uri: 'https://picsum.photos/id/30/800/800' },
  { id: 4, uri: 'https://picsum.photos/id/40/800/800' },
  { id: 5, uri: 'https://picsum.photos/id/50/800/800' },
  { id: 6, uri: 'https://picsum.photos/id/60/800/800' },
  { id: 7, uri: 'https://picsum.photos/id/70/800/800' },
  { id: 8, uri: 'https://picsum.photos/id/80/800/800' },
  { id: 9, uri: 'https://picsum.photos/id/90/800/800' },
];

const LikeButton = () => (
  <TouchableOpacity onPress={() => console.log(`Like `)}>
    <MaterialIcons name="favorite-border" size={24} color="black" style={styles.icon} />
  </TouchableOpacity>
);

const ShareButton = () => (
  <TouchableOpacity onPress={() => console.log(`Share `)}>
    <MaterialIcons name="share" size={24} color="black" style={styles.icon} />
  </TouchableOpacity>
);

const MailButton = () => (
  <TouchableOpacity onPress={() => console.log(`Mail `)}>
    <MaterialIcons name="mail-outline" size={24} color="black" style={styles.icon} />
  </TouchableOpacity>
);

export default function Gallery() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        snapToAlignment="start"
        snapToInterval={imageWidth}
        decelerationRate={0.9}
      >
        {images.map(image => (
          <View key={image.id} style={styles.imageContainer}>
            <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 370,
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: imageWidth,
    height: imageWidth,
    marginBottom: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    flexDirection: 'column',
    alignItems: 'center'
  },
});




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









    HOMESCREEN 
import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

export default function MyComponent() {
  const [firstModalVisible, setFirstModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const openFirstModal = () => {
    setFirstModalVisible(true);
  };

  const closeFirstModal = () => {
    setFirstModalVisible(false);
  };

  const openSecondModal = () => {
    closeFirstModal(); // Schließe das erste Modal
    setSecondModalVisible(true); // Öffne das zweite Modal
  };

  const closeSecondModal = () => {
    setSecondModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Open First Modal" onPress={openFirstModal} />
      <Modal visible={firstModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>First Modal Content</Text>
          <Button title="Open Second Modal" onPress={openSecondModal} />
          <Button title="Close First Modal" onPress={closeFirstModal} />
        </View>
      </Modal>
      <Modal visible={secondModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Second Modal Content</Text>
          <Button title="Close Second Modal" onPress={closeSecondModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});








//NEU 


import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openBottomSheet} style={styles.button}>
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>
      <BottomSheet ref={bottomSheetRef} height={200}>
        <TouchableOpacity onPress={toggleModal} style={styles.sheetButton}>
          <Text style={styles.sheetButtonText}>Open Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeBottomSheet} style={styles.sheetButton}>
          <Text style={styles.sheetButtonText}>Close Bottom Sheet</Text>
        </TouchableOpacity>
        <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>This is a modal inside a bottom sheet!</Text>
            <TouchableOpacity onPress={toggleModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sheetButton: {
    backgroundColor: 'lightgrey',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  sheetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

*/




import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';

const App = () => {
  const bottomSheetRef = useRef(null);
  const bottomSheetRef2 = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };
  const openBottomSheet2 = () => {
    bottomSheetRef2.current.open();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
  };
  const closeBottomSheet2 = () => {
    bottomSheetRef2.current.close();
  };
  const openBottomSheet3 = () => {
    console.log('Button Sheet pressed!');
    closeBottomSheet2();
    setTimeout(() => {
      openBottomSheet();
    }, 200);
  };


  const onPressButtonSheet = () => {
    console.log('pressed');
    closeBottomSheet();
    setTimeout(() => {
      openBottomSheet2();
    }, 200); 
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openBottomSheet} style={styles.button}>
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>
      <BottomSheet ref={bottomSheetRef} height={200}
      >
        <TouchableOpacity onPress={onPressButtonSheet} style={styles.sheetButton}>
          <Text style={styles.sheetButtonText}>Button Sheet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeBottomSheet} style={styles.sheetButton}>
          <Text style={styles.sheetButtonText}>Close Bottom Sheet</Text>
        </TouchableOpacity>
      </BottomSheet>
      <BottomSheet ref={bottomSheetRef2} height={200}>
        <TouchableOpacity onPress={onPressButtonSheet} style={styles.sheetButton}>
          <Text style={styles.sheetButtonText}>Button Sheet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openBottomSheet3} style={styles.sheetButton}>
          <Text style={styles.sheetButtonText}>Clssssose Bottom Sheet</Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sheetButton: {
    backgroundColor: 'lightgrey',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  sheetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

// Text styles
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
logo: {
  fontWeight: 'bold',
  fontSize: 50,
  color: 'black',
  marginBottom: 70,
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

// Input styles
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

// Button styles
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
},
buttonText: {
  fontSize: 16,
  lineHeight: 31,
  letterSpacing: 3.25,
  color: '#040832',
  fontWeight: "bold",
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
  },
  buttonText: {
  fontSize: 16,
  lineHeight: 31,
  letterSpacing: 3.25,
  color: '#040832',
  fontWeight: 'bold',
  },
  rowContainer: {
  flexDirection: 'row',
  alignItems: 'center',
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
  backgroundColor: '#ddd',
  alignItems: 'center',
  justifyContent: 'center',
  },
  rowContainer2: {
  flexDirection: 'row',
  alignItems: 'center',
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
    
    
    container2: { //CONTAINER LOGOS
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#fff",
    },
   
    square: { //CONAINTER LOGOS
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
    
    
    
  
    logincontainer: { //BUTTON SHEET CONTAINER
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    
    logo: { //SHEET ONE TITEL
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
    loginButton: {  // SHEET ONE 
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
      backgroundColor: "#3647E2",
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
    buttonContainer: { //Button HOMESCREEN
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 120,
    },
    button: { //Button Home Screen
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 120,
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#fff',
      marginBottom: 40,
     
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 31,
      letterSpacing: 3.25,
      color: '#040832',
      fontWeight: "bold",
    },
  
    rowContainer: { // TEXT UNTER BUTTON HOME SCREEN
      flexDirection: 'row',
      alignItems: 'center',
    },
    textLabel: {
      fontSize: 16,
      color:"#fff",
      fontWeight: "300",
    },
    signUpButtonContainer: {
      alignSelf: 'flex-start',
      
    },
    signUpButtonText: {
    
      fontSize: 16,
      color:"white",
    },
  
  
    signcontainer: {
      flex: 1,
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    rowContainer2: { // TEXT UNTER BUTTON Login
      flexDirection: 'row',
      alignItems: 'center',
    },
    textLabel2: {
      fontSize: 16,
      color:"black",
      fontWeight: "300",
    },
    signUpButtonContainer2: {
      alignSelf: 'flex-start',
      
    },
    signUpButtonText2: {
    
      fontSize: 16,
      color:"black",
    },
  
  
    signcontainer2: {
      flex: 1,
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    
  
  
  
  });
  
  


  import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const handleBack = () => {
    navigation.navigate('MessagePage');
  };
  const handleForth = () => {
    navigation.navigate('ImageGallery');
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleFlash = () => {
    setIsFlashOn(!isFlashOn);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonLeft} onPress={handleBack}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={ref => setCameraRef(ref)} flashMode={isFlashOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}>
      </Camera>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Take Picture')}>
        <View style={styles.buttonInner}>
          <View style={styles.buttonIcon}>
            <AntDesign name="camera" size={30} color="transparent" />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLibrary} onPress={handleForth}>
      <Feather name="image" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLighter} onPress={handleFlash}>
        <View style={styles.buttonLight}>
          <View style={styles.ButtonIconLight}>
            {isFlashOn ? (
              <MaterialCommunityIcons name="lightning-bolt" size={24} color="yellow" />
            ) : (
              <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="white" />
            )}
          </View>
        </View>
      </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
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
  button: {
    position: 'absolute',
    bottom: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInner: {
    width: 64,
    height: 64,
    borderRadius: 180,
    backgroundColor: '#fff',
  },
  
  
  buttonLighter: {
    position: 'absolute',
    bottom: 45,
    left: 45,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  buttonLight: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLibrary: {
    position: 'absolute',
    bottom: 45,
    right: 45,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  
  
 
  

});

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

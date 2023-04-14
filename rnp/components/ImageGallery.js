import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text ,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




const GalleryScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate('HomePage');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.buttonLeft} onPress={handleBack}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>        
      <Text style={styles.headerText}>Photo </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.grid}>
          <Image
            source={{ uri: 'https://picsum.photos/id/1/200/300' }}
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://picsum.photos/id/10/200/300' }}
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://picsum.photos/id/100/200/300' }}
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://picsum.photos/id/101/200/300' }}
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://picsum.photos/id/102/200/300' }}
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://picsum.photos/id/103/200/300' }}
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://picsum.photos/id/104/200/300' }}
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://picsum.photos/id/105/200/300' }}
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://picsum.photos/id/106/200/300' }}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 50,
    left: 140,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',


    

  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '32%',
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonLeft :{
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

export default GalleryScreen;

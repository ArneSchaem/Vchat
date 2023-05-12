import React from 'react';
import { View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, Button  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';






const { width, height } = Dimensions.get('window');
const imageWidth = width;
const imageHeight = height - 180; // Tab-Leiste hat eine Höhe von 50 Header von 100

const images = [
  { id: 1, uri: 'https://via.placeholder.com/375x487'},
  { id: 2, uri: 'https://via.placeholder.com/750x974'},
  { id: 3, uri: 'https://via.placeholder.com/1500x1948'},
  { id: 4, uri: 'https://via.placeholder.com/3075x487'},
  { id: 5, uri: 'https://via.placeholder.com/2040x360', horizontal: true },
  { id: 6, uri: 'https://via.placeholder.com/1040x360',horizontal: true  },
  { id: 7, uri: 'https://via.placeholder.com/2000x1000' ,vertical: true  },
  { id: 8, uri: 'https://via.placeholder.com/375x487'},
  { id: 9, uri: 'https://via.placeholder.com/375x487'},
];

const Home = () => {
  

  
  const renderItem = ({ item }) => {
    const isHorizontal = item.uri.includes('/1200/800');
    const itemWidth = isHorizontal ? width : imageWidth;
    const itemHeight = isHorizontal ? imageHeight : imageHeight;
    return (
      <View style={styles.imageContainer}>

        {item.horizontal ? (
          <Image source={{ uri: item.uri }} style={styles.horizontalImage} />
        ) : (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
        <TouchableOpacity style={styles.heartIcon}>
          <AntDesign name="mail" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIcon}>
        <AntDesign name="sharealt" size={24} color="black" />       
         </TouchableOpacity>
         <TouchableOpacity style={styles.mailIcon}>
         <Icon name="heart" size={24} color="#FF0000" />
         </TouchableOpacity>
      </View>
    );
  };
  
  

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        snapToInterval={imageHeight + 10} // 10 für den margin bottom
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }} // add some padding to the bottom
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: imageWidth,
    height: imageHeight,
    marginBottom:10,
    padding: 10, // Hier wird das Padding hinzugefügt
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    overflow: 'hidden', // damit das Padding innerhalb des Rahmens bleibt

  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  horizontalImage: {
    width: '100%',
    height: imageHeight,
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 70,
    right: 15,
    width: 30,
    height: 30,
    zIndex: 1,
  },
  shareIcon: {
    position: 'absolute',
    bottom: 110,
    right: 10,
    width: 30,
    height: 30,
    zIndex: 1,
  },
  mailIcon: {
    position: 'absolute',
    bottom: 150,
    right: 10,
    width: 30,
    height: 30,
    zIndex: 1,
  },
  
  
  
});


export default Home;

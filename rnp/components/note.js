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


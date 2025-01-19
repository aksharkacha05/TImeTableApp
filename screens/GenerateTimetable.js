import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { LinearGradient } from 'expo-linear-gradient';

const GenerateTimetable = ({ branch }) => {
  // Local image paths for different branches
  const timetableImages = {
    IT: require('../assets/images/time-table.jpg'),
    CE: require('../assets/images/Time-Table CE.jpg'),
    // ECE: require('../assets/images/ece-timetable.jpg'),
  };

  const imageSource = timetableImages[branch];

  return (
    <LinearGradient
      colors={['#0f2027', '#203a43','#2c5364']}
      style={styles.container}
    >
      <Text style={styles.title}>Timetable for {branch}</Text>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height - 100}
        imageWidth={Dimensions.get('window').width}
        imageHeight={300} // Adjust this based on your image's aspect ratio
      >
        <Image
          style={styles.image}
          source={imageSource}
          resizeMode="contain"
        />
      </ImageZoom>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GenerateTimetable;

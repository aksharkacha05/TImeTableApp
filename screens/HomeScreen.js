import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from 'react-native-vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {
  const scale = useSharedValue(1);

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.9, { damping: 10, stiffness: 100 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 10, stiffness: 100 });
  };

  return (
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']} // Dark Teal to Blue gradient
      style={styles.container}
    >
      <Image
        source={require('../assets/images/logo.png')} // Add a logo or relevant image
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to the Timetable App</Text>
      <Text style={styles.subtitle}>Select your branch from the menu to view your timetable.</Text>
      
      <Animated.View style={animatedButtonStyle}>
        <TouchableOpacity
          style={styles.button}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => navigation.navigate('IT Timetable')}
        >
          <Ionicons name="calendar-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>View IT Timetable</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={animatedButtonStyle}>
        <TouchableOpacity
          style={styles.button}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => navigation.navigate('CE Timetable')}
        >
          <Ionicons name="calendar-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>View CE Timetable</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={animatedButtonStyle}>
        <TouchableOpacity
          style={styles.button}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => navigation.navigate('ECE Timetable')}
        >
          <Ionicons name="calendar-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>View ECE Timetable</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a6073', // Slate Blue button color
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default HomeScreen;

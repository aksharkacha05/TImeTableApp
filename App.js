import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BranchTimetable from './components/BranchTimetable';
import SplashScreen from './screens/SplashScreen';
import { Ionicons } from 'react-native-vector-icons';
import { StatusBar } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        drawerIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'IT Timetable') {
            iconName = 'calendar-outline';
          } else if (route.name === 'CE Timetable') {
            iconName = 'calendar-outline';
          } else if (route.name === 'ECE Timetable') {
            iconName = 'calendar-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: '#3a6073',
        drawerInactiveTintColor: 'gray',
        drawerStyle: {
          backgroundColor: '#1c2833',
        },
        headerStyle: {
          backgroundColor: '#0f2027',
        },
        headerTintColor: '#fff',
      })}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="IT Timetable"
        options={{ title: 'IT Timetable' }}
      >
        {() => <BranchTimetable branch="IT" />}
      </Drawer.Screen>
      <Drawer.Screen
        name="CE Timetable"
        options={{ title: 'CE Timetable' }}
      >
        {() => <BranchTimetable branch="CE" />}
      </Drawer.Screen>
      <Drawer.Screen
        name="ECE Timetable"
        options={{ title: 'ECE Timetable' }}
      >
        {() => <BranchTimetable branch="ECE" />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'}/>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

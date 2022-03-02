/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import VideoScreen from '../screens/VideoScreen';
import EventsScreen from '../screens/EventsScreen';
import AboutScreen from '../screens/AboutScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function LogoTitle(){
  return (
    <Image
      style={{ width: 175, height: 50 }}
      source={require('../assets/images/feelthebeat-03.png')}
    />  )
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false  }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerTitle: (props) => <LogoTitle {...props} /> 
        }}
      />

      <BottomTab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTitle: (props) => <LogoTitle {...props} /> 
        }}
      />

      <BottomTab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          title: 'Videos',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerTitle: (props) => <LogoTitle {...props} /> 
        }}
      />
      
      <BottomTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerTitle: (props) => <LogoTitle {...props} /> 
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

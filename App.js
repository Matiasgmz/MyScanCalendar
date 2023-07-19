import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import ScanQRCode from './components/ScanQRCode'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FormAddEvent from './components/FormAddEvent';
import Maps from './components/Maps';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator activeColor="black"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: 'white', height: 80 }} screenOptions={{ headerShown: false }}>

        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={25} />
            ),
            tabBarLabel: '',
          }}
          component={Home}
        />

        <Tab.Screen
          name="Scan"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="barcode-outline" color={color} size={25} />
            ),
            tabBarLabel: '',
          }}
          component={ScanQRCode}
        />

        <Tab.Screen
          name="Ajout"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" color={color} size={25} />
            ),
            tabBarLabel: '',
          }}
          component={FormAddEvent}
        />

        <Tab.Screen
          name="Maps"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map-outline" color={color} size={25} />
            ),
            tabBarLabel: '',
          }}
          component={Maps}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




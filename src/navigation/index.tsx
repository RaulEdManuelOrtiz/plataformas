import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import { RootStackParamList, RootTabParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import AllServices from '../screens/AllServices';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const TabBarIcon = (props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) => <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;

const TabBarIconComponent = ({ color }: { color: string }) => <TabBarIcon name="code" color={color} />;

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="AllServices"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="AllServices"
        component={AllServices}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: TabBarIconComponent,
        }}
      />
    </BottomTab.Navigator>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer
    linking={LinkingConfiguration}
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
  >
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;

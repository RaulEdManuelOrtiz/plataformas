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
import NotFoundScreen from '../screens/NotFoundScreen';
import { routesList } from '../routes/routesDictionary';
import ServiceDetails from '../components/ServiceDetails';
import CreateService from '../components/CreateService';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="AllServices"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      {routesList.map((_) => (
        <BottomTab.Screen
          name={_.name}
          key={_.key}
          component={_.component}
          options={{
            title: _.title,
            // @ts-ignore
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: (props) => <FontAwesome {...props} name={_.icon} />,
            headerStyle: {
              backgroundColor: '#002B49',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
      ))}
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
      <Stack.Screen name="ServiceDetails" component={ServiceDetails} options={{ title: 'Servicio' }} />
      <Stack.Screen name="CreateService" component={CreateService} options={{ title: 'Crear servicio' }} />
    </Stack.Group>
  </Stack.Navigator>
);

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
  >
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;

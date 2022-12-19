import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { IconButton } from 'react-native-paper';
import Colors, { primaryColor } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import { RootStackParamList, RootTabParamList } from '../../types';
import NotFoundScreen from '../screens/NotFoundScreen';
import { routesList } from '../routes/routesDictionary';
import ServiceDetails from '../components/ServiceDetails';
import CreateService from '../components/CreateService';
import Login from '../screens/Login';
import Header from '../components/Header';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = ({ user }: any) => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="AllServices"
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      {routesList.map((_) => (
        <BottomTab.Screen
          name={_.name}
          key={_.key}
          //  eslint-disable-next-line
          children={(props) => <_.component {...props} user={user} />}
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

const RootNavigator = ({ user }: any) => (
  <Stack.Navigator initialRouteName={user ? 'Root' : 'Login'}>
    {/* @ts-ignore */}
    <Stack.Screen name="Login" options={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}>
      {(props) => <Login {...props} user={user} />}
    </Stack.Screen>
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Modal" component={ModalScreen} />
      <Stack.Screen name="ServiceDetails" component={ServiceDetails} options={{ title: 'Servicio', headerShown: false }} />
      <Stack.Screen
        name="CreateService"
        component={CreateService}
        options={{
          contentStyle: { backgroundColor: 'white' },
          header: ({ navigation }) => (
            <Header
              title="Solicitar servicio"
              icon="chevron-left"
              onPress={navigation.goBack}
              iconSize={36}
            />
          ),
        }}
      />
    </Stack.Group>
    <Stack.Screen name="Root" options={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}>
      {(props) => <BottomTabNavigator {...props} user={user} />}
    </Stack.Screen>
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
  </Stack.Navigator>
);

const Navigation = ({ user }: any) => (
  <NavigationContainer>
    <RootNavigator user={user} />
  </NavigationContainer>
);

export default Navigation;

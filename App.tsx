import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import auth from '@react-native-firebase/auth';
import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import 'expo-dev-client';
import { Text, View } from 'react-native';

const colors = {
  primary: 'rgb(0, 98, 158)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(207, 229, 255)',
  onPrimaryContainer: 'rgb(0, 29, 52)',
  secondary: 'rgb(82, 96, 112)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(213, 228, 247)',
  onSecondaryContainer: 'rgb(15, 29, 42)',
  tertiary: 'rgb(105, 87, 121)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(240, 219, 255)',
  onTertiaryContainer: 'rgb(36, 21, 50)',
  error: 'rgb(186, 26, 26)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',
  background: 'rgb(252, 252, 255)',
  onBackground: 'rgb(26, 28, 30)',
  surface: 'rgb(252, 252, 255)',
  onSurface: 'rgb(26, 28, 30)',
  surfaceVariant: 'rgb(222, 227, 235)',
  onSurfaceVariant: 'rgb(66, 71, 78)',
  outline: 'rgb(114, 119, 127)',
  outlineVariant: 'rgb(194, 199, 207)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(47, 48, 51)',
  inverseOnSurface: 'rgb(241, 240, 244)',
  inversePrimary: 'rgb(153, 203, 255)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(239, 244, 250)',
    level2: 'rgb(232, 240, 247)',
    level3: 'rgb(224, 235, 244)',
    level4: 'rgb(222, 234, 243)',
    level5: 'rgb(217, 230, 241)',
  },
  surfaceDisabled: 'rgba(26, 28, 30, 0.12)',
  onSurfaceDisabled: 'rgba(26, 28, 30, 0.38)',
  backdrop: 'rgba(44, 49, 55, 0.4)',
};
const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();
  const isLoadingComplete = useCachedResources();

  // Handle user state changes
  const onAuthStateChanged = (userData: any) => {
    setUser(userData);
    if (initializing) setInitializing(false);
  };

  // console.log('USER', user);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const theme = {
    ...MD3LightTheme,
    colors, // Copy it from the color codes scheme and then use it here
  };

  if (!isLoadingComplete) {
    return (
      <View>
        <Text>LOADING ...</Text>
      </View>
    );
  }
  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }
  // return (
  //   <View>
  //     <Text>
  //       Welcome
  //       {user.email}
  //     </Text>
  //   </View>
  // );
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation user={user} />
        <StatusBar />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;

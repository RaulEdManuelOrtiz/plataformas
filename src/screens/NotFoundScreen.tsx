import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from 'react-native-paper';
import { RootStackScreenProps } from '../../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const NotFoundScreen = ({ navigation }: RootStackScreenProps<'NotFound'>) => (
  <View style={styles.container}>
    <Text style={styles.title}>This screen doesnt exist.</Text>
    <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
      <Text style={styles.linkText}>Go to home screen!</Text>
    </TouchableOpacity>
  </View>
);

export default NotFoundScreen;

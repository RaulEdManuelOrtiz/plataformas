import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const TabTwoScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Tab Two</Text>
    <View style={styles.separator} />
  </View>
);

export default TabTwoScreen;

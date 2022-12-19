import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Avatar, Chip, List, Text, TouchableRipple,
} from 'react-native-paper';
import { primaryColor } from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 1,
    marginHorizontal: 16,
    borderBottomColor: '#BDBDBD',
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  categoriesContainer: {
    flexDirection: 'row',

  },
});
const ServiceCard = ({ item, navigation, editable }: any) => (
  <TouchableRipple
    rippleColor="rgba(0, 0, 0, .32)"
    onPress={() => navigation.navigate('CreateService')}
    style={{ borderRadius: 15 }}
  >
    <View style={styles.container}>
      <List.Image
        variant="image"
        style={{ height: 150, borderRadius: 10, width: 100 }}
        source={{ uri: 'https://www.colbake.com/wp-content/uploads/2019/01/tradicion-maquinaria-panaderia.jpg' }}
      />
      <View style={styles.textContainer}>
        <Text>
          Clases de quimica
        </Text>
        <Text>
          Requiero el servicio de clases particulares en la materia de química. Los temás de óxidos y ácidos.
        </Text>
        <View style={styles.categoriesContainer}>
          <Chip mode="outlined" style={{ backgroundColor: 'blue' }}>Educación</Chip>
        </View>
      </View>
    </View>
  </TouchableRipple>
);

export default ServiceCard;

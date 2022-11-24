import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import ServiceCard from '../../components/ServiceCard';
import { RootTabScreenProps } from '../../../types';
import { data } from './constants';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

const MyServices = ({ navigation }: RootTabScreenProps<'MyServices'>) => (
  <View style={{ height: '100%' }}>
    <FlatList
      style={{ marginTop: 8 }}
      data={data}
      renderItem={({ item }) => <ServiceCard item={item} navigation={navigation} editable />}
    />
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => navigation.navigate('CreateService')}
    />
  </View>
);

export default MyServices;

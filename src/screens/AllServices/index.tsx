import React from 'react';
import { FlatList, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { RootTabScreenProps } from '../../../types';
import { data } from './constants';
import ServiceCard from '../../components/ServiceCard';

const AllServices = ({ navigation }: RootTabScreenProps<'AllServices'>) => (
  <View>
    <Text>All serv icaes asd</Text>
    <FlatList data={data} renderItem={ServiceCard} />
  </View>
);

export default AllServices;

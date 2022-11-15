import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { RootTabScreenProps } from '../../../types';

const AllServices = ({ navigation }: RootTabScreenProps<'AllServices'>) => (
  <View>
    <Text>All services view </Text>
  </View>
);

export default AllServices;

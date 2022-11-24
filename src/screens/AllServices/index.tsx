import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RootTabScreenProps } from '../../../types';
import { data } from './constants';
import ServiceCard from '../../components/ServiceCard';

const AllServices = ({ navigation }: RootTabScreenProps<'AllServices'>) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);
  return (
    <View style={{ height: '100%' }}>
      <Searchbar
        placeholder="Buscar"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        style={{ marginTop: 8 }}
        data={data}
        renderItem={
            ({ item }) => <ServiceCard item={item} navigation={navigation} editable={false} />
          }
      />
    </View>
  );
};

export default AllServices;

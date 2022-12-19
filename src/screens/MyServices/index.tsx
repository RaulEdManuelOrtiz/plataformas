import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import {
  Avatar, Card, FAB, IconButton, SegmentedButtons,
} from 'react-native-paper';
import ServiceUserCard from '../../components/ServiceUserCard';
import { RootTabScreenProps } from '../../../types';
import { data } from './constants';
import { primaryColor } from '../../constants/Colors';
import Header from '../../components/Header';

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 25,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  viewTitle: {
    marginTop: 28,
    marginBottom: 0,
    backgroundColor: 'white',
    borderStyle: undefined,
    borderColor: 'red',
    borderWidth: 0,
    marginLeft: -10,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: primaryColor,
    marginTop: 6,
    marginLeft: 6,
  },
  segmentedButton: {
    height: 40,
    paddingHorizontal: 25,
  },
});

const MyServices = ({ navigation }: RootTabScreenProps<'MyServices'>) => {
  const [value, setValue] = React.useState('one');
  return (
    <View style={{ height: '100%' }}>
      {/*  @ts-ignore */}
      <Header
        title="Mis servicios"
        icon="clipboard-list-outline"
      />
      <View>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          style={styles.segmentedButton}
          buttons={[
            {
              value: 'one',
              label: 'Solicitados',
              style: {
                width: '50%',
                borderWidth: 0,
                borderBottomWidth: value === 'one' ? 3 : 0,
                borderColor: primaryColor,
                borderRadius: 0,
                backgroundColor: 'white',
              },
            },
            {
              value: 'two',
              label: 'Aplicados',
              style: {
                width: '50%',
                borderWidth: 0,
                borderBottomWidth: value === 'two' ? 3 : 0,
                borderColor: primaryColor,
                borderRadius: 0,
                backgroundColor: 'white',
              },
            },
          ]}
        />
      </View>
      <FlatList
        style={{ marginTop: 8 }}
        data={data}
        renderItem={({ item }) => <ServiceUserCard item={item} navigation={navigation} editable />}
      />
      {value === 'one' && (
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('CreateService')}
        />
      )}
    </View>
  );
};

export default MyServices;

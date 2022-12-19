import React, { useState } from 'react';
import {
  FlatList, SafeAreaView, ScrollView, StyleSheet, View,
} from 'react-native';
import {
  Avatar, Card, IconButton, Searchbar, SegmentedButtons, Text,
} from 'react-native-paper';
import { RootTabScreenProps } from '../../../types';
import { data } from './constants';
import ServiceUserCard from '../../components/ServiceUserCard';
import { primaryColor } from '../../constants/Colors';
import JobCard from '../../components/JobCard';
import ServiceCard from '../../components/ServiceCard';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    height: '80%',
    marginTop: 40,
  },
  userInfo: {
    marginBottom: 8,
    backgroundColor: 'white',
    borderStyle: undefined,
    borderColor: 'red',
    borderWidth: 0,
  },
  message: {
    fontWeight: '100',
    fontSize: 14,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: primaryColor,
  },
  search: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: 16,
    borderRadius: 15,
  },
  searchLabel: {

  },
  safeAreaContainer: {
    flex: 1,
    // flex: 1,
    // alignItems: 'center',
    marginHorizontal: 16,
    // backgroundColor: 'red',
    // padding: 0,
    marginBottom: 10,
    height: 40,
  },
  segmentedButton: {
    // marginHorizontal: 1,
    height: 40,
    // marginLeft: -60,
    // backgroundColor: 'white',
    // backgroundColor: 'blue',
  },
  title: {
    marginHorizontal: 16,
    fontWeight: '700',
    color: primaryColor,
  },
});

const LeftContent = (props: any) => <Avatar.Image {...props} source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }} />;

const AllServices = ({ navigation, user }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [value, setValue] = React.useState('');
  const onChangeSearch = (query: any) => setSearchQuery(query);
  console.log('USERs ===> ', user);
  return (
    <View style={styles.container}>
      {/*  @ts-ignore */}
      <Card style={styles.userInfo} elevation={0} mode="contained">
        <Card.Title
          title="Buenos dias!"
          titleStyle={styles.message}
          subtitle={user.displayName}
          subtitleStyle={styles.name}
          // eslint-disable-next-line
          left={(props) => <Avatar.Image {...props} source={{ uri: user.photoURL }} />}
          // eslint-disable-next-line
          right={() => (
            <IconButton
              icon="bell-outline"
              // onPress={() => setVisible(true)}
            />
          )}
        />
      </Card>
      <Searchbar
        placeholder="Buscar"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
        inputStyle={styles.searchLabel}
        placeholderTextColor="#BDBDBD"
        iconColor="#BDBDBD"
        elevation={0}
      />
      <View style={{ marginVertical: 12 }}>
        <Text variant="titleMedium" style={styles.title}>
          Servicios destacados
        </Text>
      </View>
      <View style={{ height: 56 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.safeAreaContainer}
        >
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            style={styles.segmentedButton}
            buttons={[
              {
                value: 'all',
                label: 'Todos',
                style: {
                  marginRight: 8,
                  borderColor: primaryColor,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderRightWidth: 1,
                  borderBottomEndRadius: 15,
                  borderTopEndRadius: 15,
                },
              },
              {
                value: 'maechanic',
                label: 'Mecanica',
                style: {
                  marginHorizontal: 8,
                  borderColor: primaryColor,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderRightWidth: 1,
                  borderBottomEndRadius: 15,
                  borderTopEndRadius: 15,
                },
              },
              {
                value: 'drive',
                label: 'Manejo',
                style: {
                  marginHorizontal: 8,
                  borderColor: primaryColor,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderRightWidth: 1,
                  borderBottomStartRadius: 15,
                  borderTopStartRadius: 15,
                },
              },
              {
                value: 'test2',
                label: 'test3',
                style: {
                  marginLeft: 8,
                  borderColor: primaryColor,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderRightWidth: 1,
                  borderBottomStartRadius: 15,
                  borderTopStartRadius: 15,
                },
              },
            ]}
          />
        </ScrollView>
      </View>
      {/* <View style={{ marginTop: 100 }}> */}

      {/* <FlatList */}
      {/*  data={data} */}
      {/*  renderItem={ */}
      {/*      ({ item }) => <JobCard /> */}
      {/*    } */}
      {/* /> */}
      {/* </View> */}
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={
              ({ item }) => <ServiceCard item={item} navigation={navigation} editable={false} />
            }
        />
      </View>
    </View>
  );
};

export default AllServices;

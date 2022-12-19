import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar, Card, Divider, IconButton, Text,
} from 'react-native-paper';
import testData from './constants';
import Login from '../../screens/Login';

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 6,
  },
  characteristic: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  boldText: {
    fontWeight: 'bold',
    width: 100,
  },
});

const Characteristic = ({ value }: {value: {label: string, value: string}}) => (
  <View style={styles.characteristic}>
    <Text style={styles.boldText} variant="bodyMedium">{value.label}</Text>
    <Text variant="bodyMedium">{value.value}</Text>
  </View>
);

const ServiceDetails = () => (
  <View>
    <Login />
    {/* <Card style={styles.card}> */}
    {/*  <Card.Content> */}
    {/*    <View style={styles.imageContainer}> */}
    {/*      <Avatar.Image */}
    {/*        source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }} */}
    {/*        size={150} */}
    {/*      /> */}
    {/*      <Text variant="headlineLarge">Mecanico</Text> */}
    {/*      <Text variant="titleMedium">978213468</Text> */}
    {/*      <View style={styles.icons}> */}
    {/*        <IconButton */}
    {/*          icon="phone" */}
    {/*          style={styles.icon} */}
    {/*          mode="contained-tonal" */}
    {/*          containerColor="transparent" */}
    {/*          size={48} */}
    {/*          onPress={() => {}} */}
    {/*        /> */}
    {/*        <IconButton */}
    {/*          icon="email" */}
    {/*          style={styles.icon} */}
    {/*          mode="contained-tonal" */}
    {/*          containerColor="transparent" */}
    {/*          size={48} */}
    {/*          onPress={() => {}} */}
    {/*        /> */}
    {/*        <IconButton */}
    {/*          icon="message" */}
    {/*          style={styles.icon} */}
    {/*          mode="contained-tonal" */}
    {/*          containerColor="transparent" */}
    {/*          size={48} */}
    {/*          onPress={() => {}} */}
    {/*        /> */}
    {/*      </View> */}
    {/*    </View> */}
    {/*    <Divider /> */}
    {/*    <View style={{ marginTop: 16 }}> */}
    {/*      {testData.map((_) => ( */}
    {/*        <Characteristic key={_.value} value={_} /> */}
    {/*      ))} */}
    {/*    </View> */}
    {/*  </Card.Content> */}
    {/* </Card> */}
  </View>
);

export default ServiceDetails;

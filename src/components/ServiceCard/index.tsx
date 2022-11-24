import React from 'react';
import {
    Avatar, Button, Card, Paragraph, Text, Title,
} from 'react-native-paper';
import { StyleSheet } from 'react-native';

const LeftContent = (props: any) => <Avatar.Image {...props} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-man-512.png' }} />;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 16,
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

const ServiceCard = ({ item }: any) => (
  <Card style={styles.container}>
    <Card.Title
      title={item.title}
      subtitle={item.schedule}
      left={LeftContent}
      right={() => <Text style={{ marginRight: 15 }}>S/. 550</Text>}
    />
    <Card.Content>
      <Paragraph>{item.email}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default ServiceCard;

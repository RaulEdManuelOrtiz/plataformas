import React from 'react';
import {
  Avatar, Card, Paragraph, Title,
} from 'react-native-paper';
import { Text } from 'react-native';

const JobCard = () => (
  <Card>
    {/* <Avatar.Image size={160}  source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }} /> */}
    {/* <Card.Header title="Card Header" subtitle="Card Subtitle" left={() => <Text>TEXT</Text>} /> */}
    <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }} />
    <Card.Content>
      <Title>Carpintero</Title>
    </Card.Content>
  </Card>

);

export default JobCard;

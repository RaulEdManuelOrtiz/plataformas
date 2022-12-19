import React, { useState } from 'react';
import {
  Avatar, Button, Card, Dialog, IconButton, Paragraph, Portal, Text,
} from 'react-native-paper';
import { StyleSheet } from 'react-native';

const LeftContent = (props: any) => <Avatar.Image {...props} source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }} />;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const ServiceUserCard = ({ item, navigation, editable }: any) => {
  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);
  return (
    <Card style={styles.container}>
      <Card.Title
        title={item.title}
        titleStyle={styles.title}
        subtitle={item.schedule}
        left={LeftContent}
        right={() => <Text style={{ marginRight: 15 }}>S/. 550</Text>}
      />
      <Card.Actions>
        {editable ? (
          <>
            <IconButton
              icon="delete"
              mode="contained-tonal"
              onPress={() => setVisible(true)}
            />
            <IconButton
              icon="pencil"
              mode="contained-tonal"
              onPress={() => navigation.navigate('CreateService')}
            />
            <IconButton
              icon="eye"
              mode="contained-tonal"
              onPress={() => navigation.navigate('ServiceDetails')}
            />
          </>

        ) : (
          <Button
            icon="chevron-right"
            mode="text"
            onPress={() => navigation.navigate('ServiceDetails')}
            contentStyle={{ flexDirection: 'row-reverse', alignItems: 'center' }}
            labelStyle={{ fontSize: 24, fontWeight: 'bold' }}
          >
            <Text style={{ fontSize: 14, lineHeight: 18 }}>Ver mas</Text>
          </Button>
        )}

      </Card.Actions>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon="alert" />
          <Dialog.Title style={styles.title}>Eliminar el servicio</Dialog.Title>
          <Dialog.Content>
            <Paragraph>¿Estas seguro que desea elminar el servicio?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancelar</Button>
            <Button onPress={() => {}}>Aceptar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Card>
  );
};

export default ServiceUserCard;

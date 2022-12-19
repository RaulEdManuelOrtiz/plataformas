import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import {
  Button, Card, Chip, Text, TextInput,
} from 'react-native-paper';
import colorList from './constants';

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 25,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formItem: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#F6F6F9',
    marginVertical: 16,
    borderColor: 'red',
  },
});

const CreateService = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [color, setColor] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  return (
    <View style={styles.view}>
      <View>
        <View>
          <Text variant="labelLarge">
            Seleccione las categorías del servicio
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Chip>test</Chip>
          <Chip>test</Chip>
          <Chip>test</Chip>
        </View>
      </View>
      <View>
        <View>
          <Text variant="labelLarge">
            Resumen del servicio
          </Text>
        </View>
        <View>
          <TextInput
            mode="outlined"
            value={description}
            onChangeText={(text) => setDescription(text)}
            outlineStyle={{ borderRadius: 12 }}
            style={styles.input}
            theme={{ colors: { primary: '#F6F6F9' } }}
          />
        </View>
      </View>
      <View>
        <View>
          <Text variant="labelLarge">
            Desripción
          </Text>
        </View>
        <View>
          <TextInput
            mode="outlined"
            value={description}
            onChangeText={(text) => setDescription(text)}
            outlineStyle={{ borderRadius: 12 }}
            style={styles.input}
            theme={{ colors: { primary: '#F6F6F9' } }}
            multiline
            numberOfLines={4}
          />
        </View>
      </View>
      <View>
        <View>
          <Text variant="labelLarge">
            Ubicación donde realizar el servicio
          </Text>
        </View>
        <View>
          <TextInput
            mode="outlined"
            value={description}
            onChangeText={(text) => setDescription(text)}
            outlineStyle={{ borderRadius: 12 }}
            style={styles.input}
            theme={{ colors: { primary: '#F6F6F9' } }}
            multiline
            numberOfLines={4}
          />
        </View>
      </View>

      <Card style={styles.card}>
        <Card.Title title="Nuevo Servicio" titleStyle={styles.cardTitle} />
        <Card.Content>
          <DropDown
            label="Profesión"
            mode="outlined"
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={color}
            dropDownStyle={{ borderRadius: 12 }}
            setValue={setColor}
            list={colorList}
          />
          <TextInput
            label="Descripción"
            mode="outlined"
            value={description}
            onChangeText={(text) => setDescription(text)}
            outlineStyle={{ borderRadius: 12 }}
            style={{ marginVertical: 16 }}
          />
          <TextInput
            label="Dirección"
            mode="outlined"
            value={description}
            onChangeText={(text) => setDescription(text)}
            outlineStyle={{ borderRadius: 12 }}
            style={styles.formItem}
          />
          <TextInput
            label="Horario"
            mode="outlined"
            value={description}
            onChangeText={(text) => setDescription(text)}
            outlineStyle={{ borderRadius: 12 }}
            style={styles.formItem}
          />
          <TextInput
            label="Salario"
            mode="outlined"
            value={description}
            onChangeText={(text) => setDescription(text)}
            outlineStyle={{ borderRadius: 12 }}
            style={styles.formItem}
          />
        </Card.Content>
        <Card.Actions>
          <Button
            icon="content-save"
            mode="contained"
            contentStyle={{ flexDirection: 'row-reverse', alignItems: 'center' }}
            onPress={() => {}}
          >
            Crear servicio
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CreateService;

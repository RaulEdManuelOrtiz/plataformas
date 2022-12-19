import React from 'react';
import { Card, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { primaryColor } from '../../constants/Colors';

const styles = StyleSheet.create({
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
});

const Header = ({
  title, icon, onPress = null, iconSize = 36,
}: any) => (
  // @ts-ignore
  <Card style={styles.viewTitle} elevation={0} mode="contained">
    <Card.Title
      title={title}
      titleStyle={styles.title}
      // eslint-disable-next-line
      left={(props) => <IconButton
        size={iconSize}
        iconColor={primaryColor}
        icon={icon}
        {...onPress && { onPress }}
      />}
    />
  </Card>
);

export default Header;

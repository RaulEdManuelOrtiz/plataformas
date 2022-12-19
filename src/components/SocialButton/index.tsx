import React from 'react';
import { Button } from 'react-native-paper';
import { types } from './constants';
import styles from './styles';
import { primaryColor } from '../../constants/Colors';

interface SocialButtonProps {
    type: 'facebook' | 'google' | 'github'
  navigation: any
  onClick: any
}

const SocialButton:React.FC<SocialButtonProps> = ({ type, navigation, onClick }) => {
  const { icon, text } = types(navigation)[type];
  return (
    <Button
      // eslint-disable-next-line
      icon={() => icon}
      style={styles.button}
      onPress={onClick}
      textColor={primaryColor}
      mode="outlined"
      contentStyle={styles.buttonContentStyle}
    >
      {text}
    </Button>
  );
};

export default SocialButton;

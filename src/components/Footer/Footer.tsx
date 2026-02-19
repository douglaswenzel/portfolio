import React from 'react';
import {
  Text,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';

import { styles } from './Footer/styles';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.footer as ViewStyle}>
      <View style={styles.content as ViewStyle}>
        <Text style={styles.text as TextStyle}>
          © {currentYear} Portfólio. Feito a mão por Douglas Wenzel.
        </Text>
      </View>
    </View>
  );
}

import React from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './Screen.styles';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Screen: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.children}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

import React from 'react';

import styles from './Yield.styles';
import { Text, View } from 'react-native';

interface Props {
  title: string;
  value: number;
}

const Yield: React.FC<Props> = ({ title, value }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Yield;

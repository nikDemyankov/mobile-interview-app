import React, { useMemo } from 'react';

import styles from './Yield.styles';
import { Text, View } from 'react-native';

interface Props {
  title: string;
  value: number;
}

const Yield: React.FC<Props> = ({ title, value }) => {
  const prefix = value > 0 ? '+' : '';

  const valueStyle = useMemo(() => {
    if (value > 0) {
      return [styles.value, styles.valuePositive];
    }

    if (value < 0) {
      return [styles.value, styles.valueNegative];
    }

    return styles.value;
  }, [value]);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={valueStyle}>
        {prefix}
        {value ?? 0}
        {'%'}
      </Text>
    </View>
  );
};

export default Yield;

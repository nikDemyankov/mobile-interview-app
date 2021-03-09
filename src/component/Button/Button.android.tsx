import React, { memo, useMemo } from 'react';
import { Text, ViewStyle, TouchableNativeFeedback, View } from 'react-native';

import styles from './Button.styles';

export interface Props {
  onPress: () => void;
  label: string;
  style?: ViewStyle;
}

const Button: React.FC<Props> = ({ onPress, label, style }) => {
  const buttonStyles = useMemo(() => [styles.button, style], [style]);

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={buttonStyles}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default memo(Button);

import React, { memo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableButton, Label } from './Button.styledComponents';

export interface Props {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<Props> = ({ onPress, label, style }) => {
  return (
    <TouchableButton onPress={onPress} style={style}>
      <Label>{label}</Label>
    </TouchableButton>
  );
};

export default memo(Button);

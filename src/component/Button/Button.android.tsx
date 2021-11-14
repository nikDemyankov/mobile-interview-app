import React, { memo } from 'react';
import { ViewStyle, TouchableNativeFeedback } from 'react-native';

import { ButtonContainer, Label } from './Button.styledComponents';

export interface Props {
  onPress: () => void;
  label: string;
  style?: ViewStyle;
}

const Button: React.FC<Props> = ({ onPress, label, style }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <ButtonContainer style={style}>
        <Label>{label}</Label>
      </ButtonContainer>
    </TouchableNativeFeedback>
  );
};

export default memo(Button);

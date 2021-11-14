import styled from 'styled-components/native';
import { color } from '../../ui/theme';

export const Label = styled.Text({
  color: color.background,
  fontWeight: 'bold',
  paddingVertical: 10,
  paddingHorizontal: 14,
  fontSize: 16,
  textAlign: 'center',
});

const buttonStyle = {
  backgroundColor: color.primary,
  borderRadius: 6,
};
export const TouchableButton = styled.TouchableOpacity(buttonStyle);
export const ButtonContainer = styled.View(buttonStyle);

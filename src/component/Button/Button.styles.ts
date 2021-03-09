import { StyleSheet } from 'react-native';
import { color } from '../../ui/theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    borderRadius: 6,
  },
  label: {
    color: color.background,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;

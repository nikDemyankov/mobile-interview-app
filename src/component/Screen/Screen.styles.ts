import { StyleSheet } from 'react-native';
import { color } from '../../ui/theme';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.background,
  },
  children: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default styles;

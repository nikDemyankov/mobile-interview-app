import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Screen } from '../../component';

const InstrumentListScreen: React.FC = () => (
  <Screen>
    <View>
      <Text>Welcome</Text>
    </View>
  </Screen>
);

export default memo(InstrumentListScreen);

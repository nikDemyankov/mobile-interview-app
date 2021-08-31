import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Screen } from '../../component';
import { winnersLosers } from '../../ducks';

const InstrumentListScreen: React.FC = () => {
  const winners = useSelector(winnersLosers.selector.getWinners);

  return (
    <Screen>
      <View>
        <Text>Welcome</Text>
      </View>
    </Screen>
  );
};

export default memo(InstrumentListScreen);

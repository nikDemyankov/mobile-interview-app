import React, { memo } from 'react';
import { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Screen } from '../../component';
import { winnersLosers } from '../../ducks';

const InstrumentListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const winners = useSelector(winnersLosers.selector.getWinners);
  // push
  useEffect(() => {
    dispatch(winnersLosers.action.getWinners());
  }, [dispatch]);

  return (
    <Screen>
      <View>
        <Text>Welcome</Text>
      </View>
      <FlatList data={winners} renderItem={data => <Text>{data.item.name}</Text>} />
    </Screen>
  );
};

export default memo(InstrumentListScreen);

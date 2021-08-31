import React, { memo, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Screen } from '../../component';
import { winnersLosers } from '../../ducks';
import { InstrumentRow } from './components';

const InstrumentListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const winners = useSelector(winnersLosers.selector.getWinners);

  useEffect(() => {
    dispatch(winnersLosers.action.getWinners());
  }, [dispatch]);

  return (
    <Screen>
      <FlatList
        data={winners}
        renderItem={({ item }) => <InstrumentRow instrument={item} />}
        keyExtractor={item => `${item.instrumentId}`}
      />
    </Screen>
  );
};

export default memo(InstrumentListScreen);

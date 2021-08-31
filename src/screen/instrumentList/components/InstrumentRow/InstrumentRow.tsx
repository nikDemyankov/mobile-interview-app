import React from 'react';
import { Text } from 'react-native';
import { Instrument } from '../../../../ducks/winnersLosers/winnersLosers.type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './InstrumentRow.styles';
import Yield from '../Yield';
import { View } from 'react-native';

interface Props {
  instrument: Instrument;
}

const InstrumentRow: React.FC<Props> = ({ instrument }) => {
  return (
    <>
      <Text style={styles.header}>{instrument.name}</Text>
      <View style={styles.yieldColumn}>
        <Yield title={'one year'} value={instrument.yield['1y']} />
        <Yield title={'3 month'} value={instrument.yield['3m']} />
        <Yield title={'today'} value={instrument.yield['1d']} />
      </View>
    </>
  );
};

export default InstrumentRow;

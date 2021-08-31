import React from 'react';
import { Text } from 'react-native';
import { Instrument } from '../../../../ducks/winnersLosers/winnersLosers.type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './InstrumentRow.styles';

interface Props {
  instrument: Instrument;
}

const InstrumentRow: React.FC<Props> = ({ instrument }) => {
  return <Text>{instrument.name}</Text>;
};

export default InstrumentRow;

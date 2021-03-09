import React from 'react';
import { create } from 'react-test-renderer';

import InstrumentListScreen from '../InstrumentListScreen';

jest.mock('../../../component', () => ({
  Screen: 'Screen',
}));

it('should render properly', () => {
  const component = create(<InstrumentListScreen />);
  expect(component).toMatchSnapshot();
});

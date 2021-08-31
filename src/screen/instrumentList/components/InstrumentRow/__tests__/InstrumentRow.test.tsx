import React from 'react';
import { create } from 'react-test-renderer';

import InstrumentRow from '../InstrumentRow';

it('should render properly', () => {
  const component = create(<InstrumentRow />);
  expect(component).toMatchSnapshot();
});

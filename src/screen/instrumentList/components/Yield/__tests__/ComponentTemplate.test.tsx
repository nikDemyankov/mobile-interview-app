import React from 'react';
import { create } from 'react-test-renderer';

import Yield from '../Yield';

it('should render properly', () => {
  const component = create(<Yield />);
  expect(component).toMatchSnapshot();
});

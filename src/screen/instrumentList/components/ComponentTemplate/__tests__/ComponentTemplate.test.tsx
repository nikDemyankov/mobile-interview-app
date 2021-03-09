import React from 'react';
import { create } from 'react-test-renderer';

import ComponentTemplate from '../ComponentTemplate';

it('should render properly', () => {
  const component = create(<ComponentTemplate />);
  expect(component).toMatchSnapshot();
});

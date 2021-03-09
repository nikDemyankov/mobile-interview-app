import React from 'react';
import { Text, View } from 'react-native';
import { create } from 'react-test-renderer';

import Screen from '../Screen';

it('should render properly with one child', () => {
  const component = create(
    <Screen>
      <View />
    </Screen>,
  );

  expect(component).toMatchSnapshot();
});

it('should render properly with several children', () => {
  const component = create(
    <Screen>
      <View />
      <Text>'Hello'</Text>
    </Screen>,
  );

  expect(component).toMatchSnapshot();
});

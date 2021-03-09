import React from 'react';
import { create } from 'react-test-renderer';
import Navigation from '../Navigation';

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: 'Stack.Navigator',
    Screen: 'Stack.Screen',
  }),
}));
jest.mock('../../screen/welcome', () => 'WelcomeScreen');
jest.mock('../../screen/instrumentList', () => 'InstrumentListScreen');

it('renders correct stack', () => {
  const component = create(<Navigation />);
  expect(component).toMatchSnapshot();
});

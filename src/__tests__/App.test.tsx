import React from 'react';
import { create } from 'react-test-renderer';
import App from '../App';

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: 'NavigationContainer',
}));
jest.mock('react-native-gesture-handler', () => '');
jest.mock('react-native', () => ({
  StatusBar: 'StatusBar',
}));
jest.mock('react-redux', () => ({
  Provider: 'Provider',
}));
jest.mock('../navigation', () => 'Navigation');
jest.mock('../store', () => 'redux-store');

it('renders correctly', () => {
  const component = create(<App />);
  expect(component).toMatchSnapshot();
});

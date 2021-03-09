import React from 'react';
import { act, create } from 'react-test-renderer';
import { Button } from '../../../component';

import WelcomeScreen from '../WelcomeScreen';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

jest.mock('lottie-react-native', () => 'LottieView');
jest.mock('../resources/lurking-cat.json', () => 'lurking-cat.json');
jest.mock('../../../component/Button', () => 'Button');
jest.mock('../../../component/Screen', () => 'Screen');

it('should render properly', () => {
  const component = create(<WelcomeScreen />);
  expect(component).toMatchSnapshot();
});

it('should navigate to instrument list', () => {
  const component = create(<WelcomeScreen />);

  expect(mockNavigate).not.toHaveBeenCalled();

  act(() => {
    component.root.findByType(Button).props.onPress();
  });

  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('InstrumentList', undefined);
});

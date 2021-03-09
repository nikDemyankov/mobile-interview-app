import React from 'react';
import { TouchableOpacity } from 'react-native';
import { act, create } from 'react-test-renderer';

import Button, { Props } from '../Button.ios';

let props: Props;

beforeEach(() => {
  props = {
    onPress: jest.fn(),
    label: 'Hello',
  };
});

it('should render properly', () => {
  const component = create(<Button {...props} />);
  expect(component).toMatchSnapshot();
});

it('should render properly with style', () => {
  const component = create(<Button {...props} style={{ backgroundColor: 'red' }} />);
  expect(component).toMatchSnapshot();
});

describe('when pressed', () => {
  it('should call onPress', () => {
    const component = create(<Button {...props} />);

    expect(props.onPress).not.toHaveBeenCalled();
    act(() => {
      component.root.findByType(TouchableOpacity).props.onPress();
    });
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});

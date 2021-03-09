import { renderHook, act } from '@testing-library/react-hooks';

import useNavigation from '../useNavigation';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

afterEach(jest.clearAllMocks);

it('should return navigation object with routes', () => {
  const { result } = renderHook(() => useNavigation());

  expect(result.current).toEqual({
    openInstrumentList: expect.any(Function),
  });
});

it('should navigate to instrument list', () => {
  const { result } = renderHook(() => useNavigation());

  expect(mockNavigate).not.toHaveBeenCalled();

  act(() => {
    result.current.openInstrumentList({ foo: 'bar' });
  });

  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('InstrumentList', { foo: 'bar' });
});

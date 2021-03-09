import { SET_SESSION } from '../api.action';
import reducer from '../api.reducer';

describe('on SET_SESSION action', () => {
  it('should return new state with updated session in it', () => {
    const action = {
      type: SET_SESSION,
      session: 'new-session',
    };
    const initialState = {
      session: 'old-session',
    };

    expect(reducer(initialState, action)).toEqual({
      session: 'new-session',
    });
  });
});

describe('on unknown action', () => {
  it('should return same state', () => {
    const action = {
      type: 'HELLO_THERE',
      session: '12345',
    };
    const initialState = {
      session: 'old-session',
    };

    expect(reducer(initialState, action)).toBe(initialState);
  });
});

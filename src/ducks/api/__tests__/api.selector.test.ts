import namespace from '../api.namespace';
import selector from '../api.selector';

describe('getSession', () => {
  it('should return session from the state', () => {
    const state = {
      [namespace]: {
        session: 'hello-i-am-a-session',
      },
    };

    expect(selector.getSession(state)).toEqual('hello-i-am-a-session');
  });

  it('should return null when state is empty', () => {
    const state = { [namespace]: {} };

    expect(selector.getSession(state)).toBeNull();
  });
});

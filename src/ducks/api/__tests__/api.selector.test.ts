import Store from '../../../../fixtures/store';
import { State } from '../../ducks.type';
import selector from '../api.selector';

describe('getSession', () => {
  it('should return session from the state', () => {
    const state: State = {
      ...Store,
      api: {
        session: 'hello-i-am-a-session',
      },
    };

    expect(selector.getSession(state)).toEqual('hello-i-am-a-session');
  });

  it('should return null when state is empty', () => {
    const state: State = {
      ...Store,
      api: {
        session: null,
      },
    };

    expect(selector.getSession(state)).toBeNull();
  });
});

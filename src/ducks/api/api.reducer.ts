import { Action } from 'redux';
import { SET_SESSION } from './api.action';
import { ApiState, SetSessionAction } from './api.type';

const initialState: ApiState = {
  session: null,
};

const onSetSession = (state: ApiState, { session }: SetSessionAction) => ({
  ...state,
  session,
});

const reducer = (state: ApiState = initialState, action: Action<string>) => {
  switch (action.type) {
    case SET_SESSION:
      return onSetSession(state, action as SetSessionAction);

    default:
      return state;
  }
};

export default reducer;

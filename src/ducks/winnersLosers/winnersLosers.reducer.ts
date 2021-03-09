import { Action } from 'redux';
import { SET_LOSERS, SET_WINNERS } from './winnersLosers.action';
import { SetLosersAction, SetWinnersAction, WinnersLoserState } from './winnersLosers.type';

export const initialState: WinnersLoserState = {
  winners: [],
  losers: [],
};

const onSetWinners = (state: WinnersLoserState, { winners }: SetWinnersAction) => ({
  ...state,
  winners,
});

const onSetLosers = (state: WinnersLoserState, { losers }: SetLosersAction) => ({
  ...state,
  losers,
});

const reducer = (state: WinnersLoserState = initialState, action: Action<string>) => {
  switch (action.type) {
    case SET_WINNERS:
      return onSetWinners(state, action as SetWinnersAction);

    case SET_LOSERS:
      return onSetLosers(state, action as SetLosersAction);

    default:
      return state;
  }
};

export default reducer;

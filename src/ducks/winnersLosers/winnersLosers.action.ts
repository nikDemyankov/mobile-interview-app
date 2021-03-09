import R from 'ramda';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import api from '../api';
import { State } from '../ducks.type';
import {
  ApiResponse,
  Instrument,
  InstrumentRawData,
  SetLosersAction,
  SetWinnersAction,
} from './winnersLosers.type';

export const SET_WINNERS = 'SET_WINNERS';
export const SET_LOSERS = 'SET_LOSERS';

const WINNERS_PATH =
  'instrument_search/query/stocklist?sort_attribute=diff_pct&sort_order=desc&offset=0&limit=30&apply_filters=exchange_country=SE|exchange_list=se:largecapstockholmsek';

const LOSERS_PATH =
  'instrument_search/query/stocklist?sort_attribute=diff_pct&sort_order=asc&offset=0&limit=30&apply_filters=exchange_country=SE|exchange_list=se:largecapstockholmsek';

const pickProps = R.applySpec<Instrument>({
  instrumentId: R.path<number>(['instrument_info', 'instrument_id']),
  name: R.path<string>(['instrument_info', 'name']),
  yield: {
    '1d': R.path<number>(['historical_returns_info', 'yield_1d']),
    '3m': R.path<number>(['historical_returns_info', 'yield_3m']),
    '1y': R.path<number>(['historical_returns_info', 'yield_1y']),
  },
  lastPrice: R.path<number>(['price_info', 'last', 'price']),
  currency: R.path<string>(['instrument_info', 'currency']),
});

const setWinnersActionCreator = (data: InstrumentRawData[]): SetWinnersAction => ({
  type: SET_WINNERS,
  winners: data.map(pickProps),
});

const setLosersActionCreator = (data: InstrumentRawData[]): SetLosersAction => ({
  type: SET_LOSERS,
  losers: data.map(pickProps),
});

const getWinners = () => async (dispatch: ThunkDispatch<State, null, Action<string>>) => {
  const response = await dispatch(api.action.get<ApiResponse>(WINNERS_PATH));

  dispatch(setWinnersActionCreator(response?.results));
};

const getLosers = () => async (dispatch: ThunkDispatch<State, null, Action<string>>) => {
  const response = await dispatch(api.action.get<ApiResponse>(LOSERS_PATH));

  dispatch(setLosersActionCreator(response?.results));
};

export default {
  getWinners,
  getLosers,
};

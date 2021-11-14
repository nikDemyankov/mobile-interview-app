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

const pickProps = (item: InstrumentRawData): Instrument => ({
  instrumentId: item.instrument_info.instrument_id,
  name: item.instrument_info.name,
  yield: {
    '1d': item.historical_returns_info.yield_1d,
    '3m': item.historical_returns_info.yield_3m,
    '1y': item.historical_returns_info.yield_1y,
  },
  lastPrice: item.price_info.last.price,
  currency: item.instrument_info.currency,
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

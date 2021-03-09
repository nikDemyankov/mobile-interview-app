import { Action } from 'redux';

export type WinnersLoserState = {
  winners: Instrument[];
  losers: Instrument[];
};

export interface SetWinnersAction extends Action<string> {
  winners: Instrument[];
}

export interface SetLosersAction extends Action<string> {
  losers: Instrument[];
}

type Yield = {
  '1d': number;
  '3m': number;
  '1y': number;
};

export type Instrument = {
  instrumentId: number;
  name: string;
  lastPrice: number;
  currency: string;
  yield: Yield;
};

export type InstrumentRawData = {
  instrument_info: {
    instrument_id: number;
    name: string;
    currency: string;
  };

  price_info: {
    last: {
      price: number;
    };
  };

  historical_returns_info: {
    yield_1d: number;
    yield_3m: number;
    yield_1y: number;
  };
};

export type ApiResponse = {
  results: InstrumentRawData[];
};

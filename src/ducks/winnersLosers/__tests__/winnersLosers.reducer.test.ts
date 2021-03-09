import { SET_LOSERS, SET_WINNERS } from '../winnersLosers.action';
import reducer, { initialState } from '../winnersLosers.reducer';
import { Instrument } from '../winnersLosers.type';

const randomInt = (max: number) => Math.floor(Math.random() * max);

const createInstrument = (id: number): Instrument => ({
  instrumentId: id,
  name: `Instrument ${id}`,
  lastPrice: randomInt(200),
  currency: 'SEK',
  yield: {
    '1d': randomInt(100),
    '3m': randomInt(100),
    '1y': randomInt(100),
  },
});

it('should return initial state by default', () => {
  expect(reducer(undefined, { type: 'some' })).toBe(initialState);
});

describe('when action is unknown', () => {
  it('should return same state', () => {
    const state = {
      winners: [createInstrument(1)],
      losers: [createInstrument(2)],
    };

    expect(reducer(state, { type: 'unknown' })).toBe(state);
  });
});

describe('when action is SET_WINNERS', () => {
  it('should return new state with winners in it', () => {
    const state = {
      winners: [],
      losers: [],
    };
    const winners = [createInstrument(1), createInstrument(2)];
    const action = {
      type: SET_WINNERS,
      winners,
    };

    expect(reducer(state, action)).toEqual({
      winners,
      losers: [],
    });
  });
});

describe('when action is SET_LOSERS', () => {
  it('should return new state with losers in it', () => {
    const state = {
      winners: [],
      losers: [],
    };
    const losers = [createInstrument(1), createInstrument(2)];
    const action = {
      type: SET_LOSERS,
      losers,
    };

    expect(reducer(state, action)).toEqual({
      losers,
      winners: [],
    });
  });
});

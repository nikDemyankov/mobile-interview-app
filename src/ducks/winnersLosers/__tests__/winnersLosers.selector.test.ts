import { State } from '../../ducks.type';
import selectors from '../winnersLosers.selector';

describe('getWinners', () => {
  it('should select winners', () => {
    const state: State = {
      api: {
        session: '',
      },
      winnersLosers: {
        winners: [
          {
            instrumentId: 1,
            name: 'ABB',
            lastPrice: 100,
            currency: 'SEK',
            yield: {
              '1d': 10,
              '3m': 20,
              '1y': 30,
            },
          },
        ],
        losers: [],
      },
    };

    expect(selectors.getWinners(state)).toEqual([
      {
        instrumentId: 1,
        name: 'ABB',
        lastPrice: 100,
        currency: 'SEK',
        yield: {
          '1d': 10,
          '3m': 20,
          '1y': 30,
        },
      },
    ]);
  });
});

describe('getLosers', () => {
  it('should select losers', () => {
    const state: State = {
      api: {
        session: '',
      },
      winnersLosers: {
        winners: [],
        losers: [
          {
            instrumentId: 1,
            name: 'ABB',
            lastPrice: 100,
            currency: 'SEK',
            yield: {
              '1d': 10,
              '3m': 20,
              '1y': 30,
            },
          },
        ],
      },
    };

    expect(selectors.getLosers(state)).toEqual([
      {
        instrumentId: 1,
        name: 'ABB',
        lastPrice: 100,
        currency: 'SEK',
        yield: {
          '1d': 10,
          '3m': 20,
          '1y': 30,
        },
      },
    ]);
  });
});

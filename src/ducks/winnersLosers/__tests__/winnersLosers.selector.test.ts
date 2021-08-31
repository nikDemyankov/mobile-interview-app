import { ApiState } from '../../api/api.type';
import { State } from '../../ducks.type';
import selectors from '../winnersLosers.selector';
import { Instrument } from '../winnersLosers.type';

describe('getWinners', () => {
  it('should return winners', () => {
    const state: State = {
      winnersLosers: {
        winners: [
          {
            instrumentId: 1,
          } as Instrument,
        ],
        losers: [],
      },
      api: {} as ApiState,
    };

    expect(selectors.getWinners(state)).toEqual([{ instrumentId: 1 }]);
  });
});

describe('getLosers', () => {
  it('should return losers', () => {
    const state: State = {
      winnersLosers: {
        losers: [
          {
            instrumentId: 1,
          } as Instrument,
        ],
        winners: [],
      },
      api: {} as ApiState,
    };

    expect(selectors.getLosers(state)).toEqual([{ instrumentId: 1 }]);
  });
});

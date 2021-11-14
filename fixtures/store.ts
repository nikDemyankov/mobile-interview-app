import { State } from '../src/ducks/ducks.type';

const Store: State = {
  api: {
    session: 'some-session',
  },
  winnersLosers: {
    winners: [],
    losers: [],
  },
};

export default Store;

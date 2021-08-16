import { State } from '../ducks.type';

const getWinners = (state: State) => state.winnersLosers.winners;

const getLosers = (state: State) => state.winnersLosers.losers;

export default {
  getLosers,
  getWinners,
};

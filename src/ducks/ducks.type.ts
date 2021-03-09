import { ApiState } from './api/api.type';
import { WinnersLoserState } from './winnersLosers/winnersLosers.type';

export type State = {
  api: ApiState;
  winnersLosers: WinnersLoserState;
};

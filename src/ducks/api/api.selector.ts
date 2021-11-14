import { State } from '../ducks.type';

const getSession = (state: State) => state.api.session;

export default {
  getSession,
};

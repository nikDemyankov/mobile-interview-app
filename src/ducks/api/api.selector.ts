import R from 'ramda';
import namespace from './api.namespace';

const getSession = R.pathOr<string | null>(null, [namespace, 'session']);

export default {
  getSession,
};

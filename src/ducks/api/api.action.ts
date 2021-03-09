import { Platform } from 'react-native';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../ducks.type';
import apiSelector from './api.selector';
import requestBuilder from './utils/requestBuilder';

const CLIENT_ID = Platform.OS === 'ios' ? 'MOBILE_IOS_2' : 'MOBILE_ANDROID_2';

export const SET_SESSION = 'SET_SESSION';

const BASE_URL = 'https://www.nordnet.se/api/2';

const constructUrl = (path: string): string => `${BASE_URL}/${path}`;

const setSessionActionCreator = (session: string) => ({
  type: SET_SESSION,
  session,
});

const getSession = () => async (
  dispatch: ThunkDispatch<State, null, Action<string>>,
): Promise<string> => {
  const url = constructUrl('login');
  const payload = `username=<<anonymous>>&password=<<anonymous>>&service=${CLIENT_ID}&country=se&session_lang=sv`;
  const request = requestBuilder.post({ payload });

  const response = await fetch(url, request);
  const { session_key } = await response.json();

  dispatch(setSessionActionCreator(session_key));

  return session_key;
};

const get = <ReturnType>(path: string) => async (
  dispatch: ThunkDispatch<State, null, Action<string>>,
  getState: () => State,
): Promise<ReturnType> => {
  let session = apiSelector.getSession(getState());
  const url = constructUrl(path);

  if (!session) {
    session = await dispatch(getSession());
  }

  const request = requestBuilder.get({
    session,
  });

  const result = await fetch(url, request);

  return result.json();
};

export default { get };

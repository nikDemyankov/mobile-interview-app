import { Action } from 'redux';

export type ApiState = {
  session: string | null;
};

export interface SetSessionAction extends Action<string> {
  session: string;
}

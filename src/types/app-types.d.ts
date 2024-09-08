import type { Dispatch } from 'react';

export interface AppState {
  isLoaded?: boolean;
}

// add more action types here for new application state opperations
export type ActionTypes =
  'Loaded';

export interface ReducerActions<T = any> {
  payload: T;
  type: ActionTypes;
}

export interface ProviderState<T = any> {
  state: AppState;
  dispatch?: Dispatch<ReducerActions<T>>;
}


  
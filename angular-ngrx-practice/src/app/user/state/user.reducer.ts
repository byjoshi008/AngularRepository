import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialUser: UserState = {
  maskUserName: true,
  currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export function userReducer(state = initialUser, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.MarkUserName:
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state;
  }
}

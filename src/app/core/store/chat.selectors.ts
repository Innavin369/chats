import { createSelector } from '@ngrx/store';
import {
  IAppState, IUser,
} from 'src/app/shared/interfaces';

export const selectUsers = (state: IAppState) => state.users;


import * as fromHome from './../pages/home/store/home.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
    home: fromHome.State;
  }
  
  export const initialState: State = {
    home: fromHome.initialState
  };
  
  export const reducers = {
    home: fromHome.reducer
  };

  export const getHome = (state: State) => state.home;

  export const getItems = createSelector(
      getHome,
      fromHome.items
  );

  export const isLoadingItems = createSelector(
    getHome,
    fromHome.loadingItems
);

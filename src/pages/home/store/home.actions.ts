import { Action } from '@ngrx/store';

export const GET_ITEMS = '[Home] Get Items';
export class GetItemsAction implements Action {
  readonly type = GET_ITEMS;
  constructor(public payload?: any) {}
}

export const GET_ITEMS_SUCCESS = '[Home] Get Items Success';
export class GetItemsSuccessAction implements Action {
  readonly type = GET_ITEMS_SUCCESS;
  constructor(public payload?: any) {}
}

export const GET_ITEMS_FAIL = '[Home] Get Items Failure';
export class GetItemsFailAction implements Action {
  readonly type = GET_ITEMS_FAIL;
  constructor(public payload?: any) {}
}

export type Actions = 
  | GetItemsAction
  | GetItemsSuccessAction
  | GetItemsFailAction;

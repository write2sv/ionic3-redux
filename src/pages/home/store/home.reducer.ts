import * as HomeActions from './home.actions';

export interface State {
    items: any[];
    loadingItems: boolean;
}

export const initialState: State = {
    items: [],
    loadingItems: false
};

export function reducer(
    state = initialState,
    action: HomeActions.Actions
): State {
    switch (action.type) {
        case HomeActions.GET_ITEMS: {
            return {
                ...state,
                loadingItems: true
            };
        }

        case HomeActions.GET_ITEMS_SUCCESS: {
            return {
                ...state,
                items: action.payload,
                loadingItems: false
            };
        }

        default: {
            return {
                ...state
            };
        }
    }
}

export const items = (state: State) => state.items;
export const loadingItems = (state: State) => state.loadingItems;

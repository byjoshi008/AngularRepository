import * as errorActions from '../actions/error.actions';

export interface ErrorState {
    errorMessage: string;
}
const initialState: ErrorState = {
    errorMessage: null
};
export function errorReducer(
    state: ErrorState = initialState,
    action: errorActions.ErrorActions
): ErrorState {
    switch (action.type) {
        case errorActions.ErrorActionTypes.SetErrorMessage:
            return {
                errorMessage: action.payload,
            };

        case errorActions.ErrorActionTypes.ClearErrorMessage:
            return {
                errorMessage: null,
            };

        default:
            return state;
    }
}

export const getErrorMessage = (state: ErrorState) => state.errorMessage;

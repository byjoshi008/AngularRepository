import * as appActions from './app.actions';

export interface State {
    errorMessage: string;
}
const initialState: State = {
    errorMessage: null,
};
export function reducer(
    state: State = initialState,
    action: appActions.AppActions
): State {
    switch (action.type) {
        case appActions.AppActionTypes.SetErrorMessage:
            return {
                errorMessage: action.payload,
            };

        case appActions.AppActionTypes.ClearErrorMessage:
            return {
                errorMessage: null,
            };

        default:
            return state;
    }
}

export const getErrorMessage = (state: State) => state.errorMessage;

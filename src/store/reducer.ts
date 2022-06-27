import { AppActionType } from "./action";

export interface AppState {
    loadingLogin: boolean,
    loadingAcceptTerms: boolean,
    verifyTerms: boolean,
    termsAccepted: boolean,
    verifyTermsTypes: string,
    user?: {
        name: string,
        email: string,
        firstName: string,
        lastName: string,
        telephone: string,
        cpf: string | undefined,
        orgId: string,
        isAdmin: boolean
    }
}

export const INITIAL_STATE = {
    loadingLogin: false, loadingAcceptTerms: false, verifyTerms: false, termsAccepted: false, verifyTermsTypes: ''
}
export function loginReducer(state: AppState = INITIAL_STATE, action: any) {
    switch (action.type) {
        case AppActionType.POST_LOGIN:
            state = { ...state, loadingLogin: true }
            break;
        case AppActionType.POST_LOGIN_SUCCESS:
        case AppActionType.POST_LOGIN_ERROR:
            state = { ...state, loadingLogin: false }
            break;
        case AppActionType.SET_USER:
            state = { ...state, user: action.payload }
            break;
        case AppActionType.CLEAR_USER:
            state = { ...state, user: undefined }
            break;
        case AppActionType.ACCEPT_POLICY_CHANGE:
            state = { ...state, loadingAcceptTerms: true }
            break;
        case AppActionType.ACCEPT_POLICY_CHANGE_ERROR:
            state = { ...state, loadingAcceptTerms: false }
            break;
        case AppActionType.ACCEPT_POLICY_CHANGE_SUCCESS:
            state = { ...state, loadingAcceptTerms: false, verifyTerms: false, termsAccepted: true }
            break;
        case AppActionType.CHANGE_VERIFY_TERMS:
            state = { ...state, verifyTerms: true, verifyTermsTypes: action.payload }
            break;
    }

    return state;
}
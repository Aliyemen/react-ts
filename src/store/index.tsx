import { useRef } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { appReducer } from "./reducer";
import { createReducerManager } from "./reducerManager";

export type ConfigActionType = {
    state: string;
    reducer?: string;
    codeView?: string;
    service: string;
}

export const staticReducers = {
    app: appReducer,
}

export function useAction<TAction>(action: TAction): TAction
export function useAction(action: any): any {
    return useRef(action).current;
}

export const reducerManager = createReducerManager(staticReducers);
export const store = createStore(reducerManager.reduce, composeWithDevTools(applyMiddleware(thunk)));
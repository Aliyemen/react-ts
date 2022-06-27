import { combineReducers } from "redux";

type ReducerManager = {
    add(key: string, reducer: any): void,
    remove(key: any): void,
    reduce(state: any, action: any): any
}
export const createReducerManager = (initialReducers: any): ReducerManager => {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);

    const reduce = (state: any, action: any) => {
        return combinedReducer(state, action as never);
    };

    const add = <T extends any>(key: string, reducer: (state: T, action: any) => T) => {
        if (!key) {
            return
        }

        const namespace = key.split('.');
        let reducresAux = reducers;
        if (namespace != null && namespace.length > 1) {
            namespace.forEach((value, index) => {
                if (index !== namespace.length - 1)
                    reducresAux = reducers[value];
                else {
                    reducresAux[value] = reducer;
                    combineReducers(reducresAux);
                }
            });
        } else {
            reducresAux[key] = reducer
        }

        combinedReducer = combineReducers(reducers)
    }

    const remove = (key: any) => {
        if (!key || !reducers[key]) {
            return
        }
        delete reducers[key]
        combinedReducer = combineReducers(reducers)
    };

    return { reduce, add, remove }
}

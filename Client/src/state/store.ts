import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({

})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

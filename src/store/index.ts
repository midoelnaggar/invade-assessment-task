import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import universitiesSlice from "./slices/universitiesSlice";
import storage from "./storage";

const persistedReducer = persistReducer({
    key: "root",
    storage,
    whitelist: ["universities"]
}, combineReducers({
    universities: universitiesSlice.reducer,
}))

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: { ignoreActions: true },
        });
    },
});

export const { searchUniversities } = universitiesSlice.actions;

export type AppState = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
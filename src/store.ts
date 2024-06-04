import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { syncStorage } from 'redux-persist-webextension-storage';

import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
    RESYNC,
} from '@plasmohq/redux-persist';
import { Storage } from '@plasmohq/storage';

import extensionListStateReducer from "~features/extension-slice"

const combinedReducers = combineReducers({
    extensionList: extensionListStateReducer,
});


const persistConfig = {
    key: "root",
    version: 1,
    storage: syncStorage
}

const persistedReducer = persistReducer(persistConfig, combinedReducers)

const mockStore = configureStore({
    reducer: combinedReducers
})

// @ts-ignore
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    RESYNC
                ]
            }
        })
}) as typeof mockStore

export const persistor = persistStore(store)

new Storage().watch({
    [`persist:${persistConfig.key}`]: (change) => {
        const {oldValue, newValue} = change
        const updatedKeys = []
        for (const key in oldValue) {
            if (oldValue[key] !== newValue?.[key]) {
                updatedKeys.push(key)
            }
        }
        for (const key in newValue) {
            if (oldValue?.[key] !== newValue[key]) {
                updatedKeys.push(key)
            }
        }
        if (updatedKeys.length > 0) {
            persistor.resync()
        }
    }
})

export type RootState = ReturnType<typeof mockStore.getState>
export type AppDispatch = typeof mockStore.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

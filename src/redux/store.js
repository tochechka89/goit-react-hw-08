import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
    key: 'token',
    storage,
    whitelist: ['token'],
    authReducer,
}

const authPersistedReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
        auth: authPersistedReducer,
    }
});

export const persistor = persistStore(store);
import {configureStore} from "@reduxjs/toolkit";
import { packageApi } from "./services/packages";



export const store = configureStore({
    reducer: {
      
        [packageApi.reducerPath]: packageApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([
            packageApi.middleware,
          
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

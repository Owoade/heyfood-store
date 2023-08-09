import { configureStore } from "@reduxjs/toolkit"
import queryReducer from "./query-slice"

export const store = configureStore({
    reducer: {
      query: queryReducer
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export const getQuery = (state:RootState) => state.query
export type AppDispatch = typeof store.dispatch
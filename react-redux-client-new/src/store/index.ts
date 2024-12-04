import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carsSlice/carsSlice";

export const store = configureStore({
    reducer: {
        cars: carsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// function getUser() {
//     return { userName: "gal", age: 36 }
// }

// type UserType = ReturnType<typeof getUser>
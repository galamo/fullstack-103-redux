import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // TBD - reducer carsReducer/carsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// function getUser() {
//     return { userName: "gal", age: 36 }
// }

// type UserType = ReturnType<typeof getUser>
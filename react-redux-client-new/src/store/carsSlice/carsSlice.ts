import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CarsState {
    numberOfCars: number
}

const initState: CarsState = {
    numberOfCars: 10
}

export const carsSlice = createSlice({
    name: "cars",
    initialState: initState,
    reducers: {
        setNumberOfCars: (state, action: PayloadAction<number>) => {
            state.numberOfCars = action.payload
        }
    }
})

const { setNumberOfCars } = carsSlice.actions
export { setNumberOfCars } // single action

export default carsSlice.reducer // connect to store
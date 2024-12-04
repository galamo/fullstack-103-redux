import { useDispatch, useSelector } from "react-redux"
import { incrementNumberOfCars, setNumberOfCars } from "../store/carsSlice/carsSlice"
import { RootState } from "../store"

export default function Cars() {
    const dispatch = useDispatch()
    const numberOfCars = useSelector((state: RootState) => state.cars.numberOfCars)
    console.log("Cars render!")
    return <div style={{ border: "1px solid black" }}>
        <h1> Cars </h1>
        <span> Set Limit of Cars to fetch: </span>
        <input value={numberOfCars} type="text" onChange={(event: any) => {
            console.log(event.target.value)
            dispatch(setNumberOfCars(+event.target.value))
        }} />
        <button onClick={() => {
            dispatch(incrementNumberOfCars())
        }}>
            incrementNumberOfCars
        </button>
    </div>
}

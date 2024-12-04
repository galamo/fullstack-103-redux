import { useDispatch } from "react-redux"
import { setNumberOfCars } from "../store/carsSlice/carsSlice"

export default function Cars() {
    const dispatch = useDispatch()
    return <div>
        <h1> Cars </h1>
        <span> Set Limit of Cars to fetch: </span>
        <input type="text" onChange={(event: any) => {
            console.log(event.target.value)
            dispatch(setNumberOfCars(+event.target.value))
        }} />
    </div>
}

import { RootState } from "../store"
import { useSelector } from "react-redux"



export default function CarsStatistics() {
    console.log("CarsStatistics render!!")
    const numberOfCars = useSelector((state: RootState) => state.cars.numberOfCars)
    return <h1> Cars Statistics: {numberOfCars}</h1>
}

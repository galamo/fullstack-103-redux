import { RootState } from "../store"
import { useSelector } from "react-redux"



export default function CarsStatistics() {
    console.log("CarsStatistics render!!")
    const numberOfCars = useSelector((state: RootState) => state.cars.numberOfCars)
    return <h1 style={{ border: "1px solid black" }}> Cars Statistics: {numberOfCars}</h1>
}

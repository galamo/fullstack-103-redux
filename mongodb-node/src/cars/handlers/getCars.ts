import { CarModel } from "../model";

export default async function getCars() {
    const result = await CarModel.find()
    return result;
}
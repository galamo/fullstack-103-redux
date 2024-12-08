import { CarModel } from "../model";

export default async function getCars(name?: string) {
    const query = typeof name === 'string' ? { Name: { $regex: `${name}*` } } : {}
    const result = await CarModel.find(query)
    return result;
}
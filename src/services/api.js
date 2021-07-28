import { BACKEND } from "../settings/backend"
import { formatTime } from "utils";

export const getGyms = async () => {
    const url = BACKEND.basePath + BACKEND.data.route;
    const method = BACKEND.data.method;
    return await fetch(url,{
            method,
        })
        .then(response => response.json())
        .then(data => data.locations)
        .then(locations => {
            locations?.map((location) => {

                location.schedules = location?.schedules?.map((schedule) => {
                    const hours = schedule?.hour?.split(' às ')
                    if(hours.length === 2) {
                        schedule["start"] = formatTime(hours[0])
                        schedule["end"] = formatTime(hours[1])
                    }
                    return schedule
                })
                return location
            })
            return locations
        })
}
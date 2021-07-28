import { BACKEND } from "../settings/backend"

export const getGyms = async () => {
    const url = BACKEND.basePath + BACKEND.data.route;
    const method = BACKEND.data.method;
    return await fetch(url,{
            method,
        })
        .then(response => response.json())
        .then(data => data.locations)
}
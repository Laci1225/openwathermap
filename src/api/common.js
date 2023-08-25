import axios from "axios";

const httpClient = axios.create({baseURL: "https://api.openweathermap.org/data/2.5/weather", headers: {}})
const appId = "98923aeaac4b1a9b3aab3c265d98041b"

export {httpClient, appId}

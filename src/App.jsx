import {useState} from 'react'
import axios from "axios";

import './App.css'
import GetLocation from "./components/GetLocation.jsx";
import GetWeatherData from "./components/GetWeatherData.jsx";

const httpClient = axios.create({baseURL: "https://api.openweathermap.org/data/2.5/weather", headers: {}})
const appId = "98923aeaac4b1a9b3aab3c265d98041b"
function App() {
    const [lon, setLon] = useState(null)
    const [lat, setLat] = useState(null)
    return (
        <>
            <GetLocation setLon={setLon} setLat={setLat}/>
            <p className="read-the-docs">
                {console.log(lat)}
                {console.log(lon)}
                Click on the Vite and React logos to learn more
            </p>
            <GetWeatherData httpClient={httpClient} lon={lon} lat={lat} appId={appId}/></>
    )
}

export default App

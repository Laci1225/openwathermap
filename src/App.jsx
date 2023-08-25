import {useState} from 'react'

import './App.css'
import GetLocation from "./components/GetLocation.jsx";
import useLocationData from "./hooks/useLocationData.js";
import VisualizeData from "./components/VisualizeData.jsx";

function App() {
    const [lon, setLon] = useState(null)
    const [lat, setLat] = useState(null)
    const locationData = useLocationData({lat: lat, lon: lon});
    return (
        <div className="all-side">
            <div className="left-side">
                <GetLocation setLon={setLon} setLat={setLat}/>
            </div>
            <div className="right-side">
                <VisualizeData locationData={locationData}/>
            </div>
        </div>
    )
}

export default App

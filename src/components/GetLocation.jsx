import PropTypes from "prop-types";
import {useState} from "react";

export default function GetLocation(props) {
    const [lon, setLon] = useState(null);
    const [lat, setLat] = useState(null);

    function handleLonChange(event) {
        setLon(event.target.value);
    }

    function handleLatChange(event) {
        setLat(event.target.value);
    }

    return (
        <div>
            <div className="input-container">
                <label htmlFor="lon">Longitude:</label>
                <input id="lon" type="text" onChange={handleLonChange}/>
            </div>
            <div className="input-container">
                <label htmlFor="lat">Latitude</label>
                <input id="lat" type="text" onChange={handleLatChange}/>
            </div>
            <div>
                <button onClick={() => {
                    props.setLon(lon);
                    props.setLat(lat);
                }}>Submit
                </button>
            </div>
        </div>
    )
}
GetLocation.propTypes = {
    setLon: PropTypes.func.isRequired,
    setLat: PropTypes.func.isRequired,
}
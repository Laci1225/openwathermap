import PropTypes from "prop-types";

export default function GetLocation(props) {
    let lon,lat;
    function handleLonChange(event) {
        lon = (event.target.value);
    }

    function handleLatChange(event) {
        lat = (event.target.value);

    }

    return (
        <div>
            <label htmlFor="lon">Longitude:</label>
            <input id="lon" type="text" onChange={handleLonChange}/>
            <label htmlFor="lat">Latitude</label>
            <input id="lat" type="text" onChange={handleLatChange}/>
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
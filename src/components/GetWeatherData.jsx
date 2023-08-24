import PropTypes from "prop-types";
import {useState} from "react";

export default function GetWeatherData({httpClient, lon, lat, appId}) {
    const [locationName, setLocationName] = useState();
    lon && lat && httpClient.get("?lat=" + lat + "&lon=" + lon + "&appid=" + appId)
        .then(value => {
            setLocationName(value.data.name);
        });
    return (
        <>{locationName}</>
    )
}
GetWeatherData.propTypes = {
    httpClient: PropTypes.func,
    lon: PropTypes.number,
    lat: PropTypes.number,
    appId: PropTypes.string,
}
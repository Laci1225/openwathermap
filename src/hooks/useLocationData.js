import { useEffect, useState} from "react";
import {appId, httpClient} from "../api/common.js";


export default function useLocationData({lat,lon}) {
    const [locationData, setLocationData] = useState();
    useEffect(() => {
        if (lat && lon) {
            httpClient.get("?lat=" + lat + "&lon=" + lon + "&appid=" + appId)
                .then(value => {
                    setLocationData(value.data);
                });
        }
    }, [lat, lon])
    return locationData;
}
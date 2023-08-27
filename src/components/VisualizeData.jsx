import PropTypes from "prop-types";

export default function VisualizeData(props) {
    return (
        <>
            <div className="title">Place information:
                <div>{props?.locationData?.sys?.country}</div>
                <div>{props?.locationData?.name}</div>
            </div>
            <div className="title">Weather information:
                <div>{props?.locationData?.weather[0]?.main}</div>
                <div>{props?.locationData?.weather[0]?.description}</div>
            </div>
            <div className="title">Temperature information:
                <div>
                    {isNaN(props?.locationData?.main?.temp - 273)
                        ? null : (props.locationData.main.temp - 273).toFixed(1) + "°C"}
                </div>
                <div>
                    {isNaN(props?.locationData?.main?.feels_like - 273)
                        ? null : (props.locationData.main.feels_like - 273).toFixed(1) + "°C"}
                </div>
            </div>
            <div className="title">Wind information:
                <div>{isNaN(props?.locationData?.wind?.speed)
                    ? null : props?.locationData.wind.speed + " km/h"}</div>
                <div>{isNaN(props?.locationData?.wind?.deg)
                    ? null : props?.locationData.wind.deg + "°"}</div>
            </div>
        </>
    )
}
VisualizeData.propTypes = {
    locationData: PropTypes.object
}

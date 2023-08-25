import PropTypes from "prop-types";

export default function VisualizeData(props) {
    return (
        <>
            <div className="title">Place information:</div>
            <div>{props?.locationData?.sys?.country}</div>
            <div>{props?.locationData?.name}</div>
            <div className="title">Weather information:</div>
            <div>{props?.locationData?.weather[0]?.main}</div>
            <div>{props?.locationData?.weather[0]?.description}</div>
            <div className="title">Temperature information:</div>
            <div>
                {isNaN(props?.locationData?.main?.temp - 273)
                    ? null
                    : Math.round(props.locationData.main.temp - 273) + "°C"}
            </div>
            <div>
                {isNaN(props?.locationData?.main?.feels_like - 273)
                    ? null
                    : Math.round(props.locationData.main.feels_like - 273) + "°C"}
            </div>
            <div className="title">Wind information:</div>
            <div>{props?.locationData?.wind?.speed && +" km/h"}</div>
            <div>{props?.locationData?.wind?.deg && + "°"}</div>
        </>
    )
}
VisualizeData.propTypes = {
    locationData: PropTypes.object
}

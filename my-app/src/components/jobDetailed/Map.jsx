import React from 'react';
import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";
const Map = ({ location, zoomLevel }) => {
    return (
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCrvVUFPwEpCRO-Y1daPTR_JB-AvNTMC3w' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text='marker'
                    />
                </GoogleMapReact>
            </div>
    );
};

export default Map;
import React from 'react';
import locationIcon from '@iconify/icons-mdi/map-marker'
import { Icon } from '@iconify/react'

const LocationPin = ({ text }) => {
    return (
        <div className="pin">
            <Icon icon={locationIcon} className="pin-icon"  />
            <p>{text}</p>
        </div>
    );
};

export default LocationPin;
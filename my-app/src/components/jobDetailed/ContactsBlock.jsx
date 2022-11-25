import React from 'react';
import Map from "./Map";


const ContactsBlock = ({selectedJob}) => {
    const location = {
        lat: selectedJob.location.lat,
        lng: selectedJob.location.long
    }
    console.log(location.lat)
    console.log(location.lng)
    return (
        <div className="lg-contact-block">
            <div className=' lg-title font-h1'><p className='w-[116px] h-[34px]'>Contacts</p></div>
            <div className="lg-wrapper-rounded">
                <div className="lg-contact">
                    <div className="lg-circle"/>
                    <div className="lg-contact-wrapper">
                        <p className='lg-contact-title'>Department name. <br/> {selectedJob.name}</p>
                        <p className='lg-contact-address font-for-contact '><i
                            className="fa fa-map-marker w-[13px] h-[18px] mr-[8px] text-[#D8D8D8]"
                            aria-hidden="true"/>{selectedJob.address}</p>
                        <p className='lg-contact-phone  font-for-contact text-[#FFFFFFAB]'>{selectedJob.phone}, <br/> {selectedJob.email}
                        </p>
                    </div>
                </div>
                <div className="lg-map">
                    <Map location={location} zoomLevel={3}/>
                </div>
            </div>
        </div>
    );
};

export default ContactsBlock;
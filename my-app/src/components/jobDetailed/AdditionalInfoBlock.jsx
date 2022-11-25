import React from 'react';

const AdditionalInfoBlock = ({selectedJob}) => {
    return (
        <div className='lg-additional-block'>
            <div className="lg-header font-h1"><p
                className=' h-full w-[309px] border-b  border-[#3A4562] lg:w-[230px] lg:h-[34px] lg:ml-[4px]  lg:border-0'>Additional
                info</p></div>
            <div className="lg-employment-type">
                <p className='lg-small-headers font-desc'>Employment-type</p>
                <div className='lg-cards font-card text-[#55699E]'>
                    {selectedJob.employment_type.map(type =>
                        <div className='lg-card bg-blue-rgba border border-blue-border border-solid '
                             key={type}>{type}</div>
                    )}
                </div>
            </div>
            <div className="lg-benefits">
                <p className='lg-small-headers font-desc'>Benefits</p>
                <div className='lg-cards font-card text-[#988B49]'>
                    {selectedJob.benefits.map(benefits =>
                        <div className='lg-card  bg-yellow-rgba border border-yellow-border border-solid'
                             key={benefits}>{benefits}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfoBlock;
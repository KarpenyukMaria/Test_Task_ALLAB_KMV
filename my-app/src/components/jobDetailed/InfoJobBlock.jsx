import React from 'react';

const InfoJobBlock = ({selectedJob}) => {
    return (
        <div className='lg-wrapper-description'>
            <div className="lg-jobName-and-salary">
                <div className="lg-name">{selectedJob.name}</div>
                <div className="lg-salary">{selectedJob.salary} <br/> <span
                    className='lg-salary-v'>Brutto, per year</span></div>
            </div>
            <div
                className="lg-job-posted font-desc text-[13px] tracking-[0.19px] "> Posted {selectedJob.createdAt}</div>
            <div className="lg-job-title font-desc">{selectedJob.title}</div>
            <div className="lg-job-descriptions">
                <p className='w-[343px] h-[25px] mb-[10px] lg:w-[538px] font-h2'>Responsobilities</p>
                <p className='font-desc'>{selectedJob.description}</p>
            </div>
            <div className="lg-job-benefits">
                <p className='font-h2 mb-[15px] lg:mb-[7px]'>Compensation & Benefits:</p>
                {selectedJob.benefits.map(benefits =>
                    <p className='font-desc lg:ml-[-19px]' key={benefits}><i
                        className="fa fa-square  text-slate-500 mr-[10px] lg:mr-[6px]" aria-hidden="true"/>{benefits}
                    </p>
                )}
            </div>
        </div>
    );
};

export default InfoJobBlock;
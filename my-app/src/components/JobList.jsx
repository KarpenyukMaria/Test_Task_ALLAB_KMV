import React from 'react';
import JobItem from "./JobItem";

const JobList = ({jobs}) => {
    return (
        <div className='lg-list-job'>
            <ul>
                {jobs.map((job)=>
                    <JobItem job={job} key={job.title}/>
                )}
            </ul>
        </div>
    );
};

export default JobList;
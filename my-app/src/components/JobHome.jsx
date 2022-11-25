import {useEffect, useState} from 'react';
import ApiService from "../API/ApiService";
import JobList from "./JobList";
import ListBtn from "./ListBtn";


const JobHome = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        ApiService.getAllJobs().then((response) => {
            const data = response.data
            setJobs([...data])
            //console.log(data)
        })
    }, [])

    console.log(jobs)

    return (
        <div className="body-home">
            <div className='lg-main-block'>
                <div className='lg-wrapper'>
                    <JobList jobs={jobs}/>
                    <div className='lg-block-btn'>
                        <ListBtn/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobHome;
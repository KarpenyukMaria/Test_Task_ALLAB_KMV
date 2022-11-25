
import {Link} from "react-router-dom";




const JobItem = ({job}) => {
    return (
        <li className='lg-job-item'>
            <div className="lg-main-info">
                <div className="lg-item-img ">
                    <img src={job.pictures[0]} alt="img" className='object-cover w-full h-full rounded-full'/>
                </div>
                <div className="lg-item-text">
                    <div className="lg-item-title font-for-title-mb sm:font-for-title"><Link to={{ pathname: "/detailed", state: { job } }} onClick={()=>(document.body.style.backgroundColor='white')}>{job.title}</Link></div>
                    <div className="lg-item-name font">Department name <i className="fa fa-circle text-xs" aria-hidden="true"/> {job.name}</div>
                    <div className="lg-item-address font"><i className="fa fa-map-marker mr-[9px] w-[13px] h-[18px] sm:mr-[11px]" aria-hidden="true"/>{job.address}</div>
                </div>
            </div>
            <div className="lg-add-info">
                <div className=' hidden sm:block sm:w-[16px] sm:h-[20px]'><i className="fa fa-bookmark-o text-gray-500 font-normal" aria-hidden="true"/></div>
                <div className=' w-[60px] h-[10px] block flex flex-row gap-[3px] text-[10px] text-[#878D9D] sm:hidden'>
                    <i className="fa fa-star w-[10px] h-[10px]" aria-hidden="true"/>
                    <i className="fa fa-star w-[10px] h-[10px]" aria-hidden="true"/>
                    <i className="fa fa-star w-[10px] h-[10px]" aria-hidden="true"/>
                    <i className="fa fa-star w-[10px] h-[10px]" aria-hidden="true"/>
                </div>
                <div className=' font-mb  overflow-hidden sm:font'> Posted: {job.createdAt}</div>
            </div>
        </li>

    );
};

export default JobItem;
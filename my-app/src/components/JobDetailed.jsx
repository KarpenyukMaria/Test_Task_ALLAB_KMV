
import '../style/JobDetailed.css'
import {useHistory, useLocation} from "react-router-dom";
import InfoJobBlock from "./jobDetailed/InfoJobBlock";
import AdditionalInfoBlock from "./jobDetailed/AdditionalInfoBlock";
import BlockImages from "./jobDetailed/BlockImages";
import ContactsBlock from "./jobDetailed/ContactsBlock";


const JobDetailed = () => {
    const location = useLocation()
    const selectedJob = location.state?.job

    const history = useHistory()
    console.log(selectedJob)

    function goBackHomePage() {
        document.body.style.backgroundColor = 'rgb(203 213 225)'
        history.goBack()
    }

    return (
        <div className='lg-main-block-detailed'>
            <div className="lg-wrapper-detailed">
                <div className="lg-job-detailed-block">
                    <div className="lg-menu">
                        <p className='lg-menu-logo font-h1'>JOB DETAILS</p>
                        <div className="wrapper-btn ">
                            <button className='lg-btn-menu w-[125px] lg:w-[149px] mr-[36px] lg:mr-[31px] '>
                                <i className="fa fa-bookmark-o w-[16px] h-[20px] mr-[15px] hidden lg:block"
                                   aria-hidden="true"/>
                                <i className="fa fa-star-o block w-[20px] h-[19px]  mr-[5px] lg:hidden"
                                   aria-hidden="true"/>Save to my list
                            </button>
                            <button className='lg-btn-menu  w-[68px] lg:w-[84px] '>
                                <i className="fa fa-share-alt w-[18px] h-[20px] mr-[10px] lg:mr-[15px]"
                                   aria-hidden="true"/>Share
                            </button>
                        </div>
                    </div>
                    <button className='hidden  lg-btn-apply  lg:block lg:mb-[32px]'>apply now</button>
                    <InfoJobBlock selectedJob={selectedJob}/>
                    <button className='lg-btn-apply  self-center  mb-[135px] lg:self-auto lg:mb-[86px]'>apply now
                    </button>
                    <AdditionalInfoBlock selectedJob={selectedJob}/>
                    <BlockImages selectedJob={selectedJob}/>
                </div>
                <ContactsBlock selectedJob={selectedJob}/>
            </div>
            <button className='lg-btn-back' onClick={goBackHomePage}><i
                className=" fa fa-solid fa-angle-left w-[10px] h-[18px] text-xl mr-[19px] before: mb-[10px]"/>return to
                job board
            </button>
        </div>
    );
};

export default JobDetailed;
import React from 'react';

const BlockImages = ({selectedJob}) => {

    return (
        <div className='lg-attached-images'>
            <div className='lg-header  border-b border-[#3A4562] font-h1'><p className= 'w-[230px] h-[34px] ml-[4px] '>Attached images</p></div>
            <div className="lg-images">
                {selectedJob.pictures.map((img,index)=>
                    <img src={img} alt="images" className='w-[209px] h-[115px] rounded-[8px] mr-[4px]' key={index} onLoad={()=>console.log(img)}/>
                )}
            </div>
        </div>
    );
};

export default BlockImages;
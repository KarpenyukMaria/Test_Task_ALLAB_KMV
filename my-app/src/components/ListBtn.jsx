import React, {useRef} from 'react';
import ButtonItem from "./ButtonItem";

const ListBtn = () => {
 const arrayNumber=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const ulRef=useRef(0);
    let width = 50; // ширина кнопки
    let count = 5;// к-сть видимих кнопок
    let listElems = 14;
    let position = 0; // положение ленты прокрутки

    function prevBtn(){
        // сдвиг влево
        position += width * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0)
        ulRef.current.style.marginLeft = position + 'px';
        //console.log(ulRef.current.style.marginLeft)
    }
     function nextBtn(){
         // сдвиг вправо
         position -= width * count;
         // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
         position = Math.max(position, -width * (listElems - count));
         ulRef.current.style.marginLeft = position + 'px';
        // console.log(ulRef.current.style.marginLeft)
     }

    return (
        <div className='flex flex-row w-full justify-center relative  font-for-title bg-white rounded-xl'>
            <button className='lg-btn-arrow left-0 border-r-[4px] ' onClick={prevBtn}>
                <i className="fa fa-angle-left" aria-hidden="true"/>
            </button>
            <div className="ul-wrapper">
                <ul className='lg-list-btn' ref={ulRef}>
                    {arrayNumber.map((btn)=>
                        <ButtonItem btn={btn} key={btn}/>
                    )}
                </ul>
            </div>
            <button className='lg-btn-arrow right-0 border-l-[4px]' onClick={nextBtn}>
                <i className="fa fa-angle-right" aria-hidden="true"/>
            </button>
        </div>
    );
};

export default ListBtn;

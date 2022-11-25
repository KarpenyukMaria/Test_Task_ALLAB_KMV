import React from 'react';

const ButtonItem = ({btn}) => {
    return (
        <li className='lg-btn'>
            <button>{btn}</button>
        </li>
    );
};

export default ButtonItem;
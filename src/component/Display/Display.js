import React from 'react';
import './Display.css'
const Display = (props) => {
    console.log(props);
    const {name,img,newCart} = props.bookName;
    return (
        <div>
            <div className='display'>
                <div className='m-2'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h6>{name}</h6>
                </div>
                <div>{newCart}</div>
            </div>
        </div>
    );
};

export default Display;
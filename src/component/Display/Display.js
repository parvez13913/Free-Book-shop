import React from 'react';
import './Display.css'
const Display = (props) => {
    const {name,img} = props.bookName;
    return (
        <div>
            <div className='display'>
                <div className='m-2'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h6>{name}</h6>
                </div>
                <div>
                    <h1>{}</h1>
                </div>
            </div>
        </div>
    );
};

export default Display;
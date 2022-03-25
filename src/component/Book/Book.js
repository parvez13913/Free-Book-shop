import React from 'react';
import './Book.css'
const Book = (props) => {
    console.log(props.book);
    const {name,price,img,ratings,publications} = props.book;
    return (
        <div className='book-container shadow-lg my-5'>
            <div className='cart-img'>
              <img src= {img} alt="Book-images" />
            </div>
            <div className='cart-info mt-4'>
              <h3 className='mb-3'>{name}</h3>
              <p className='mb-0'>Price: ${price}</p>
              <p className='mt-0 mb-0'>Ratings: {ratings} Star</p>
              <p className='mt-0'>Publications: {publications}</p>
            </div>
            <button className='w-100 border-0 rounded'>
                <p>BUY NOW</p>
            </button>
        </div>
    );
};

export default Book;
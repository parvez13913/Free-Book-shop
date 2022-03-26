import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Book.css'
const Book = (props) => {
    const {name,price,img,ratings,publications} = props.book;
    const {handleAddToCart} = props;
    return (
        <div className='book-container shadow-lg my-5'>
            <div className='cart-img'>
              <img src= {img} alt="Book-images" />
            </div>
            <div className='cart-info my-5'>
              <h3 className='mb-3'>{name}</h3>
              <p className='mb-0'>Price: ${price}</p>
              <p className='mt-0 mb-0'>Ratings: {ratings} Star</p>
              <p className='mt-0'>Publications: {publications}</p>
            </div>
            <div className='mt-4'>
                <button onClick={() => handleAddToCart(props.book)} className='w-100 border-0 btn-tex'>
                   <p className='mx-2 mt-2'>Add To Cart</p>
                   <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Book;
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Shop.css'
const Shop = () => {
    const [books,setBooks] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container container">
                
            {
                books.map(book => <Book 
                    key = {book.id}
                    book = {book}
                ></Book>)
            }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;
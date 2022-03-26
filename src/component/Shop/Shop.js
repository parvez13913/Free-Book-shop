import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Shop.css'
const Shop = () => {
    const [books,setBooks] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBooks(data));
    },[]);
    const [cart,setCart] = useState([]);

    const handleAddToCart = (book) => {
        const newCart = [...cart,book];
        if(newCart.length <= 4){
            setCart(newCart);
         }
         else{
             alert("You Cannot Select More Than 4 Books.");
         }
    }
    return (
        <div className='shop-container'>
            <div className="product-container container">
                
            {
                books.map(book => <Book 
                    key = {book.id}
                    book = {book}
                    handleAddToCart = {handleAddToCart}
                ></Book>)
            }
            <div>
                <div>
                  <h6>প্রপস এবং স্টেট এর মধ্যে পার্থক্য কী??</h6>
                  <h2>প্রপস</h2>
                  <li>প্রপস শুধুমাত্র পড়া যাই</li>
                  <li>প্রপস পরিবর্তন করা যাই না </li>
                  <li>প্রপস চাইল্ড কম্পোনেন্ট দিয়ে এক্সেস করা হয়</li>
                  <li>উপাদানগুলির মধ্যে যোগাযোগ করতে প্রপস ব্যবহার করা হয় ।</li>
                  <li>প্রপস আরগুমেন্ট হিসাবে একটি কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে ডাটা পাঠাতে দেয় ।</li>
                  <h2>স্টেট</h2>
                  <li>স্টেট অ্যাসিঙ্ক্রোনাস ভাবে পরিবর্তন হয়</li>
                  <li>স্টেট পরিবর্তনশীল</li>
                  <li>স্টেট চাইল্ড কম্পোনেন্ট দিয়ে এক্সেস করা যাই না</li>
                  <li>স্টেটলেস কম্পোনেন্টের স্টেট থাকে না </li>
                  <li>স্টেট কম্পোনেন্টের ডাটা বা তথ্য ধারন করে রাখে </li>
                </div>

            </div>
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
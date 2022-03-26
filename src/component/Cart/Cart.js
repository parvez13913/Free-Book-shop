
import Display from '../Display/Display';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const book of cart){
        total = total + book.price;
    }
    const handleChooseOneForMe = (cart) => {
         const choose = Math.random() *( cart.length);
         console.log(parseInt(choose));
    }
    const handleChooseAgin = (cart) => {
        console.log(cart);
    }
    return (
        <div className="cart-info">
            <h3 className='text-center my-4 mt-4'>Selected Book</h3>
            <div>
                <p>Selected Item: {cart.length}</p>
                {
                    cart.map(bookName => <Display 
                        key = {bookName.id}
                        bookName = {bookName}
                    ></Display>)
                }
                <p>Total Price: {total}</p>
                <button onClick={() => handleChooseOneForMe(cart)} className='choose-btn'>CHOOSE 1 FOR ME</button> <br/> <br/>
                <button onClick={() => handleChooseAgin(cart)} className='choose-btn'>CHOOSE AGIN</button>
            </div>
        </div>
    );
};

export default Cart;
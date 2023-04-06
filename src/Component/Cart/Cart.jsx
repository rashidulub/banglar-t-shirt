import React from 'react';
import Tshirt from '../Tshirt/Tshirt';

const Cart = ({cart,handleremovetocart}) => {
    let message;
    if(cart.length === 0){
         message=('please select some products')
    }
    return (
        <div>
            <h4>order summary: {cart.length}</h4>
            {message}
            {
                cart.map(tshirt=> <p 
                    key={tshirt._id}
                >{tshirt.name}
                <button 
                onClick={()=>handleremovetocart(tshirt._id)}
                >X</button></p>)
            }
        </div>
    );
};

export default Cart;
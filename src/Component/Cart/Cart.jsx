import React from 'react';
import Tshirt from '../Tshirt/Tshirt';

const Cart = ({cart,handleremovetocart}) => {
   
    let message;
    if(cart.length === 0){
         message=('please select some products')
    }
    else{
        message = <div>
            <h2>boroloxx</h2>

            <p><small>thanks for west your money</small></p>
        </div>
    }
    return (
        <div>
            <h4>order summary: {cart.length}</h4>
            {cart.length > 2 ? <span>sabbash arekta kino</span> : <span>dorja oi dike jan ga</span>}
            {message}
            {
                cart.map(tshirt=> <p 
                    key={tshirt._id}
                >{tshirt.name}
                <button 
                onClick={()=>handleremovetocart(tshirt._id)}
                >X</button></p>)
                
            }
            {
                cart.length ===2 && <p>double dinanza !!</p>
            }
            {
                cart.length === 3 || <p> tinta to hoilo na mama</p>
            }
        </div>
    );
};

export default Cart;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setcart]=useState([]);

    const handleaddtocart =tshirt =>{
        const existing = cart.find(ts=>ts._id ===tshirt._id)
        if (existing){
            toast('already added ')

        }
        else{
            const newCart = [...cart,tshirt];
        setcart(newCart)

        }
        
      
    }

    const handleremovetocart = id =>{
          const remainig = cart.filter(ts=>ts._id !==id)
            setcart(remainig)
        
      
    }
  
    return (
        <div className='home-container'>
            <div className="t-shirts-container">
            {
                tshirts.map(tshirt=>
                    <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleaddtocart={handleaddtocart}
                    
                    ></Tshirt>)
            }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart} 
                handleremovetocart={handleremovetocart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
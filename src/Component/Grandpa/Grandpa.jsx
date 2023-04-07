import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncel from '../Uncel/Uncel';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext =createContext('GOld')

const Grandpa = () => {
   const Ring='dimond'
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <RingContext.Provider value='golden ring'>
            <section className='flex'>
                <Father Ring={Ring}></Father>
                <Uncel></Uncel>
                <Aunty></Aunty>
            </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;<h1>Grandpa</h1>
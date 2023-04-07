import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Spesial = ({Ring}) => {
    const ring = useContext(RingContext)
    return (
        
        <div>
            <h4>boow</h4>
    
            <p><small>Ring : {ring}</small></p>
        </div>
    );
};

export default Spesial;

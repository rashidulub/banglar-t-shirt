import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({Ring}) => {
    return (
        <div>
            <h1>father</h1>
            <section className='flex'>
                <Myself Ring={Ring}></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;<h1>father</h1>
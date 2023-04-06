import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData();
    return (
        <div>
            <h1>home page: {tshirt.length}</h1>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { getGyms } from '../../services/api';

const Home = () => {
    const [gyms, setGyms] = useState({});
    
    useEffect(() => {
        getGyms().then(setGyms)
    },[])
    return(
        <>
        </>
    )

}

export default Home;
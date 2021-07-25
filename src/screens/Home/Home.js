import React, { useEffect, useState } from 'react';
import { getGyms } from '../../services/api';
import Footer from './components/Footer/Footer';

const Home = () => {
    const [gyms, setGyms] = useState({});
    
    useEffect(() => {
        getGyms().then(setGyms)
    },[])
    return(
        <>
            <Footer />
        </>
    )

}

export default Home;